import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headHigh:string = '-70px'

  headDown(){
    this.headHigh = '0px'
  }
  headUp(){
    this.headHigh = '-70px'
  }
}
