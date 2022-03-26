import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() img:string = '../../../assets/img/30-printer-png-image.png'
  @Input() hot:boolean = false;
  @Input() discount:boolean = false;
  @Input() new:boolean = false;
  @Input() title:string = 'پرینتر برند Brother'
  @Input() price:string = '3.500'

  scale:string = '0'
  buy:string = '350px'

  onMouseEnter(){
    this.scale = '1'
    this.buy = '308px'
  }
  onMouseLeave(){
    this.scale = '0'
    this.buy = '350px'
  }

}
