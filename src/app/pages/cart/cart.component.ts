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
      url:"../../../assets/img/kisspng-multi-function-printer-inkjet-printing-canon-autom-color-printer-5a77a6aec2c8c3.9515433815177908947978.png",
    },
    {
      title:"موس آرما مدل M27",
    description:"به همراه دانگل",
    price:"1000000",
    url:"../../../assets/img/kisspng-computer-mouse-computer-keyboard-laptop-logitech-computer-mouse-5acaaed741a1d4.0967488915232324712688.png",

    }

  ]
  product(){
    this.flag = false;
  }

}
