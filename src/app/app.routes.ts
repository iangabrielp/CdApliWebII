import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { Pagina404Component } from './pagina404/pagina404.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'nosotros',
        component:NosotrosComponent
    },
    {
        path:'productos',
        component:ProductosComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'**',
        component:Pagina404Component
    }
];
