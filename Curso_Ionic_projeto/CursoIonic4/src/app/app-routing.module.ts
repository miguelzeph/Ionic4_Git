import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },

  { 
    path: 'instalacao',
    loadChildren: './instalacao/instalacao.module#InstalacaoPageModule'
  },

  { 
    path: 'layout',
    loadChildren: './layout/layout.module#LayoutPageModule'
  },

  {
     path: 'layout-header-footer',
    loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule'
  },
  
  { 
    path: 'layout-tabs',
    loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule'
  },

  { 
    path: 'layout-menu',
    loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule'
  },

  { 
    path: 'layout-split',
    loadChildren: './layout-split/layout-split.module#LayoutSplitPageModule'
  },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },

  { 
    path: 'layout-grid',
     loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule',
  },

  { 
    path: 'layout-css',
     loadChildren: './layout-css/layout-css.module#LayoutCssPageModule',
  },

  { 
    path: 'componentes',
     loadChildren: './componentes/componentes.module#ComponentesPageModule',
  },
  { path: 'componente-action-sheet', loadChildren: './componente-action-sheet/componente-action-sheet.module#ComponenteActionSheetPageModule' },
  { path: 'componente-alert', loadChildren: './componente-alert/componente-alert.module#ComponenteAlertPageModule' },
  { path: 'componente-badges', loadChildren: './componente-badges/componente-badges.module#ComponenteBadgesPageModule' },
  { path: 'componente-button', loadChildren: './componente-button/componente-button.module#ComponenteButtonPageModule' },
  { path: 'componente-card', loadChildren: './componente-card/componente-card.module#ComponenteCardPageModule' },
  { path: 'componente-checkbox', loadChildren: './componente-checkbox/componente-checkbox.module#ComponenteCheckboxPageModule' },
  { path: 'componente-radio', loadChildren: './componente-radio/componente-radio.module#ComponenteRadioPageModule' },
  { path: 'componente-datetime', loadChildren: './componente-datetime/componente-datetime.module#ComponenteDatetimePageModule' },
  { path: 'componente-fab', loadChildren: './componente-fab/componente-fab.module#ComponenteFabPageModule' },
  { path: 'componente-input', loadChildren: './componente-input/componente-input.module#ComponenteInputPageModule' },
  { path: 'componente-list', loadChildren: './componente-list/componente-list.module#ComponenteListPageModule' },
  { path: 'componente-load', loadChildren: './componente-load/componente-load.module#ComponenteLoadPageModule' },
  { path: 'componente-modal', loadChildren: './componente-modal/componente-modal.module#ComponenteModalPageModule' },
  { path: 'componente-modal-interno', loadChildren: './componente-modal-interno/componente-modal-interno.module#ComponenteModalInternoPageModule' },
  { path: 'componente-range', loadChildren: './componente-range/componente-range.module#ComponenteRangePageModule' },
  { path: 'componente-select', loadChildren: './componente-select/componente-select.module#ComponenteSelectPageModule' },
  { path: 'componente-slides', loadChildren: './componente-slides/componente-slides.module#ComponenteSlidesPageModule' },
  { path: 'componente-spinner', loadChildren: './componente-spinner/componente-spinner.module#ComponenteSpinnerPageModule' },
  { path: 'componente-toast', loadChildren: './componente-toast/componente-toast.module#ComponenteToastPageModule' },
  { path: 'componente-infinit-scroll', loadChildren: './componente-infinit-scroll/componente-infinit-scroll.module#ComponenteInfinitScrollPageModule' },
  { path: 'componente-popover', loadChildren: './componente-popover/componente-popover.module#ComponentePopoverPageModule' },
  { path: 'componente-refresher', loadChildren: './componente-refresher/componente-refresher.module#ComponenteRefresherPageModule' },
  { path: 'componente-searchbar', loadChildren: './componente-searchbar/componente-searchbar.module#ComponenteSearchbarPageModule' },
  { path: 'componente-toggle', loadChildren: './componente-toggle/componente-toggle.module#ComponenteTogglePageModule' },
  { path: 'api-externa', loadChildren: './api-externa/api-externa.module#ApiExternaPageModule' },
  { path: 'animacoes', loadChildren: './animacoes/animacoes.module#AnimacoesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
