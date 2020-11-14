import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.scss']
})
export class UsersDisplayComponent implements OnInit {

  @Input() users;

  constructor() { }

  ngOnInit(): void {
  }

  convertToUpperCase(val: string) {
    return val.toUpperCase();
  }

}
