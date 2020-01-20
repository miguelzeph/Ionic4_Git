import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteDatetimePage } from './componente-datetime.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteDatetimePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteDatetimePage]
})
export class ComponenteDatetimePageModule {}
