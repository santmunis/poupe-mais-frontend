import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guars/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((page) => page.HomeModule),
    canActivate: [AuthGuard],
    data: { hiddenMenu: false },
  },
  {
    path: 'objective',
    loadChildren: () =>
      import('./pages/objective/objective.module').then(
        (page) => page.ObjectiveModule
      ),
    canActivate: [AuthGuard],
    data: { hiddenMenu: false },
  },
  {
    path: 'page',
    loadChildren: () =>
      import('./pages/user/user.module').then((page) => page.UserModule),
    data: { hiddenMenu: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
