import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'tabs/changes', 
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule', 
    //canActivate: [AuthGuard], 
  },
  { 
    path: 'register', 
    loadChildren: './register/register.module#RegisterPageModule',
    //canActivate: [AuthGuard], 
  },
  { 
    path: 'tabs', 
    loadChildren: './tabs/tabs.module#TabsPageModule',
    //canActivate: [AuthGuard]
  }
  // { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  // { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule' },
  
  // { path: 'changes', loadChildren: './changes/changes.module#ChangesPageModule' },
  // { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule' },
  // { path: 'search', loadChildren: './search/search.module#SearchPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    // RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
