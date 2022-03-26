import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() img:string = '../../../assets/img/30-printer-png-image.png'
  @Input() hot:boolean = false;
  @Input() discount:boolean = false;
  @Input() new:boolean = false;

  scale:string = '1'
  buy:string = '350px'

  onMouseEnter(){
    this.scale = '1.3'
    this.buy = '308px'
  }
  onMouseLeave(){
    this.scale = '1'
    this.buy = '350px'
  }
}
