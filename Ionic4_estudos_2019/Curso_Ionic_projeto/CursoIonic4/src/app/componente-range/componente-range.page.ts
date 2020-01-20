import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-range',
  templateUrl: './componente-range.page.html',
  styleUrls: ['./componente-range.page.scss'],
})
export class ComponenteRangePage implements OnInit {

  desligar: any[] = [{marcado:'true'}];

  constructor() { }

  ngOnInit() {
  }

}
