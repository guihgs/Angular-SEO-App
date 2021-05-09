import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements AfterViewInit {

  @ViewChild('input') inputElement: ElementRef;
  @Output() search: EventEmitter<string>

  constructor() { }

  ngAfterViewInit(){
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'), //equivalent input.target.input
        distinctUntilChanged(),
        filter((value: string) => value.length > 3),
        map((value) => value) //map operator returns the value as an Observable
      )
      .subscribe(value => {
        this.search.emit(value); //the value can be sent over to the parent component
      });
  }

}
