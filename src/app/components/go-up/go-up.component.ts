import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-up',
  templateUrl: './go-up.component.html',
  styleUrls: ['./go-up.component.css']
})
export class GoUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  goUp(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'auto'
    });
  }

}
