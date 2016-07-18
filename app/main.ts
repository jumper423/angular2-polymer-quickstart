import { bootstrap } from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';

import { provideRouter, RouterConfig }  from '@angular/router';
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";

const routes: RouterConfig = [
    {
        path: '/heroes',
        component: HeroesComponent,
    },
    {
        path: '/heroes/:id',
        component: HeroDetailComponent,
    }
];
export const appRouterProviders = [
    provideRouter(routes)
];

bootstrap(AppComponent,[
    appRouterProviders
]);
