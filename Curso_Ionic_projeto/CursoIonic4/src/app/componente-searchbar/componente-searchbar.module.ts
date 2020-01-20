import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteSearchbarPage } from './componente-searchbar.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteSearchbarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteSearchbarPage]
})
export class ComponenteSearchbarPageModule {}
