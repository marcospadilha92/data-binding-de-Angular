import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles:[
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  conteudoAtual : String = '';
  conteudoSalvo : String = '';
  isMouseOver = false;
  nome = 'abc';
  pessoa = {
    nome : 'def',
    idade : 20
  }

  onClick(){
    alert ("Alô Alô Marciano!");
  }

  onKeyup(event){
    console.log(event);
    this.conteudoAtual = event.target.value;
  }

  onSave(valor : String){
    this.conteudoSalvo = valor;
  }

  onMouseSpan (){
    this.isMouseOver = !this.isMouseOver;
  }


  getValor(){
    return 2;
  }

  urlImagem = 'http://lorempixel.com/400/200/sports';

  constructor() { }

  ngOnInit() {
  }

}
