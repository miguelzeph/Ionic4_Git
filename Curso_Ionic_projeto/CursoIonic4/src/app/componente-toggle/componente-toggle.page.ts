import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-toggle',
  templateUrl: './componente-toggle.page.html',
  styleUrls: ['./componente-toggle.page.scss'],
})
export class ComponenteTogglePage implements OnInit {

  marcado: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
