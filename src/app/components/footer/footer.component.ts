import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  healthy:string = '1'
  healthyEnter(){
    this.healthy = '1.4'
  }
  healthyLeave(){
    this.healthy = '1'
  }

  contact:string = '1'
  contactEnter(){
    this.contact = '1.4'
  }
  contactLeave(){
    this.contact = '1'
  }

  ready:string = '1'
  readyEnter(){
    this.ready = '1.4'
  }
  readyLeave(){
    this.ready = '1'
  }

  world:string = '1'
  worldEnter(){
    this.world = '1.4'
  }
  worldLeave(){
    this.world = '1'
  }

}
