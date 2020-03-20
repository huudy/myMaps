import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchBox: FormControl;

  constructor(private searchSvc: SearchService) {}

  ngOnInit() {
    this.searchBox = new FormControl();
    this.searchBox.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(term => {
        //search our db
        //search all
        //combine return
        // this.searchSvc.
      });
  }

  onSubmit() {}
}
