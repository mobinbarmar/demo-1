import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'auto'
    });
  }

  successfulAdded:boolean = true

  addToCart(){
    this.successfulAdded = false
    setTimeout(() => {
      this.successfulAdded = true
    }, 3000);
  }

  flag:boolean = false
  desClass:string = 'active'
  featureClass:string = ''
  commentsFlag:boolean = true
  commentsColor:string = ''

  openDes(){
    this.flag = false
    this.desClass = 'active'
    this.featureClass = ''
  }

  openFeature(){
    this.flag = true;
    this.featureClass = 'active'
    this.desClass = ''
  }

  commentShow(){
    this.commentsFlag = !this.commentsFlag
    if(this.commentsColor == ''){
      this.commentsColor = 'commentColor'
    }else{
      this.commentsColor = ''
    }
  }
}
