import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interface/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flag:boolean = true;

  informations :Product[] = [
    {
      title:"پرینتر کانن مدل PIXMA MG2540s",
      description:"پرینتر کانن مدل PIXMA MG2540s",
      price:"8900000",
    },
    {
      title:"موس آرما مدل M27",
    description:"به همراه دانگل",
    price:"1000000",

    }

  ]
  product(){
    this.flag = false;
  }

}
