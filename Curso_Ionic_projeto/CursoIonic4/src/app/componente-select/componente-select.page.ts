import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-select',
  templateUrl: './componente-select.page.html',
  styleUrls: ['./componente-select.page.scss'],
})
export class ComponenteSelectPage implements OnInit {
  
  vetor: any ={
    header: "Frutas",
    subHeader: "Selecione o que deseja comprar",
    message: 'por apenas R$1,00 ',
    translucent: true,
  }

  constructor() { }

  ngOnInit() {
  }

}
