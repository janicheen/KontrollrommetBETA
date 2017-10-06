import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
// Models
import { User } from './_models/user';
import { MeetingParticipant } from './_models/meetingparticipant';
// State
import { State } from './state';

const state = new State();
const store = new BehaviorSubject<State>(state);

export class AppStore {
    store = store;

    changes = store.asObservable()
    .distinctUntilChanged()
    .do(changes => console.log('projecting new state', changes));

    getState() {
    return this.store.value;
    }

    setState(state: State) {
        console.log('setState ', state);
        this.store.next(state);
    }

    updateState(property: string, data: any) {
        console.log('updating state', state);
        const currentState = this.getState();
        this.setState(Object.assign({}, currentState, { [property]: data }));
    }
}
