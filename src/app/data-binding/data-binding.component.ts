import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';

  getValor(){
    return 2;
  }

  urlImagem = 'http://lorempixel.com/400/200/sports';

  constructor() { }

  ngOnInit() {
  }

}
