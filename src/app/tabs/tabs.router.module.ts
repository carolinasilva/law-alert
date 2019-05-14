import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../services/user/auth.guard';
 
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'changes',
        children: [
          {
            path: '',
            loadChildren: '../changes/changes.module#ChangesPageModule',
            canActivate: [AuthGuard]
          }
          // {
          //   path: ':id',
          //   loadChildren: '../changes-details/changes-details.module#FilmDetailsPageModule'
          // }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: '../favorites/favorites.module#FavoritesPageModule',
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: '../search/search.module#SearchPageModule',
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'help',
        children: [
          {
            path: '',
            loadChildren: '../help/help.module#HelpPageModule'
          }
        ]
      }
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}