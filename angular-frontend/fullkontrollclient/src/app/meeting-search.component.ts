import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { MeetingSearchService } from './meeting-search.service';
import { Meeting } from './meeting';
 
@Component({
  selector: 'meeting-search',
  templateUrl: './meeting-search.component.html',
  styleUrls: [ './meeting-search.component.css' ],
  providers: [MeetingSearchService]
})
export class MeetingSearchComponent implements OnInit {
  meetings: Observable<Meeting[]>;
  private searchTerms = new Subject<string>();
 
  constructor(
    private meetingSearchService: MeetingSearchService,
    private router: Router) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.meetings = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.meetingSearchService.search(term)
        // or the observable of empty meetings if there was no search term
        : Observable.of<Meeting[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Meeting[]>([]);
      });
  }
 
  gotoDetail(meeting: Meeting): void {
    let link = ['/detail', meeting.id];
    this.router.navigate(link);
  }
}