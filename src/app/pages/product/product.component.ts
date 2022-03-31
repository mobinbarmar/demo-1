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

}
