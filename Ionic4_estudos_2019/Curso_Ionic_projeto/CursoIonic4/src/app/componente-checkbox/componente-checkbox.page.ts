import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-checkbox',
  templateUrl: './componente-checkbox.page.html',
  styleUrls: ['./componente-checkbox.page.scss'],
})
export class ComponenteCheckboxPage implements OnInit {

  meses: any[] =[
    {nomeDoMes:"Janeiro",valor:1,marcado:false},
    {nomeDoMes:"Fevereiro",valor:2,marcado:true},
    {nomeDoMes:"Março",valor:3,marcado:true},
    {nomeDoMes:"Abril",valor:4,marcado:true},
    {nomeDoMes:"Maio",valor:5,marcado:false},

  ];

  constructor() { }

  ngOnInit() {
    console.log(this.meses)
  }

  exibirMeses(){
    console.table(this.meses);
  }

}
