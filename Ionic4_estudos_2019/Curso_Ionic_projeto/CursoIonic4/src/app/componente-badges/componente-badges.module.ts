import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteBadgesPage } from './componente-badges.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteBadgesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteBadgesPage]
})
export class ComponenteBadgesPageModule {}
