import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-searchbar',
  templateUrl: './componente-searchbar.page.html',
  styleUrls: ['./componente-searchbar.page.scss'],
})
export class ComponenteSearchbarPage implements OnInit {

  nome: string =  '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() { 
    this.pessoas = [
      {id:1, idade:10, nome: "Paulo"},
      {id:1, idade:28, nome: "Miguel"},
      {id:1, idade:52, nome: "Ana"},
      {id:1, idade:27, nome: "Priscila"},
      {id:1, idade:25, nome: "Guilherme"},
    ];
    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas;

    return this.pessoasFiltradas.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLowerCase())
    });
  }
  filtrarItens(){
    this.pessoasFiltradas = this.filtrarPessoas(this.nome)
  }


}
