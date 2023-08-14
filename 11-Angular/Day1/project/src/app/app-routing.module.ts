import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AllRoutesComponent } from './components/all-routes/all-routes.component';

// const routes: Routes = [
//   //DefaultPage:
//   {path: '', redirectTo: '/home', pathMatch: "full"},

//   {path: 'home', component:MainComponent, title: "Home Page"},
//   {path: 'product', component:ProductComponent, title: "Product Page"},
//   {path: 'productDetails/:id', component:ProductDetailsComponent, title: "Product Details Page"},
//   {path: 'productParent', component:ProductsParentComponent, title: "Product Parent Page"},
//   {path: 'aboutus', component:AboutusComponent, title: "About us Page"},

//   //NotFoundPage:
//   {path: '**', component: NotFoundComponent}

// ];

const routes: Routes = [
  //DefaultPage:
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },


  {path: 'index', component: AllRoutesComponent, children: [
    //DefaultPage:
  {path: '', redirectTo: '/home', pathMatch: "full"},

  {path: 'home', component:MainComponent, title: "Home Page"},
  {path: 'product', component:ProductComponent, title: "Product Page"},
  {path: 'productDetails/:id', component:ProductDetailsComponent, title: "Product Details Page"},
  {path: 'productParent', component:ProductsParentComponent, title: "Product Parent Page"},
  {path: 'aboutus', component:AboutusComponent, title: "About us Page"},
  ]},

  //NotFoundPage:
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
