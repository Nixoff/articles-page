import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path:'inicio',
        loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule)
    }
]
