import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-refresher',
  templateUrl: './componente-refresher.page.html',
  styleUrls: ['./componente-refresher.page.scss'],
})
export class ComponenteRefresherPage implements OnInit {

  message: string = "Puxe para baixo para observar..."

  constructor() { }

  ngOnInit() {
  }

  atualizarMensagem(event:any){
    setTimeout(()=>{this.message='Prabens!!! VOCÊ ATUALIZOU A PÁGINA', event.target.complete()},2000);
  }

}
