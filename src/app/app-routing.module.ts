import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { GaleryComponent } from './galery/galery.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'login',  component: LoginComponent },
      {path:'aboutus', component: AboutusComponent},
      { path: 'product', canActivate: [AuthGuard], component: ProductComponent },
      { path: 'galery', canActivate: [AuthGuard], component: GaleryComponent },
      {path:'contactus', component: ContactusComponent},
      { path: '**', component: PagenotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
