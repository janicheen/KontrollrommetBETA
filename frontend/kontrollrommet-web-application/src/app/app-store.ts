import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
// Models
import { User } from './_models/user';
import { MeetingParticipant } from './_models/meetingparticipant';
// State
import { State } from './state';

/* interface State {
    user: Object;
    isLoading: boolean;
    meetingparticipations: any[];
}
 */
const state = new State();
const store = new BehaviorSubject<State>(state);

export class AppStore {
    store = store;

    changes = store.asObservable()
    .distinctUntilChanged()
    // log new state
    .do(changes => console.log('new state', changes));

    getState() {
    return this.store.value;
    }

    setState(state: State) {
        console.log('setState ', state); // log update
        this.store.next(state);
    }

    updateState(property: string, data) {
        const currentState = this.getState();
        this.setState(Object.assign({}, currentState, { [property]: data }));
    }
}
