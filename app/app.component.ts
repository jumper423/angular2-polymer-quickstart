import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { HeroService } from './hero.service';
import {Router, ROUTER_DIRECTIVES} from "@angular/router";


@Component({
  selector: 'my-app',
  template: `
    <app-header-layout has-scrolling-region>
      <app-header fixed>
        <app-toolbar [class.raised]="isInChildView">
          <paper-icon-button icon="arrow-back" *ngIf="isInChildView" (click)="goBack()"></paper-icon-button>
          <div title spacer>{{title}}</div>
        </app-toolbar>
      </app-header>
      <router-outlet></router-outlet>
    </app-header-layout>
  `,
  styles: [`
    app-toolbar {
      background: var(--primary-color);
      color: var(--dark-theme-text-color);
    }

    app-toolbar.raised {
      @apply(--shadow-elevation-4dp);
    }

    paper-icon-button {
      position: absolute;
      top: 12px;
      left: 8px;
    }
  `],
  directives: [
    ROUTER_DIRECTIVES,
    PolymerElement('app-header-layout'),
    PolymerElement('app-header'),
    PolymerElement('app-toolbar'),
    PolymerElement('paper-icon-button')
  ],
  providers: [
    HeroService
  ]
})

export class AppComponent implements OnInit {
  title = '';
  isInChildView = false;

  constructor(private _router: Router) { }

  ngOnInit() {
    // this._router.subscribe(() => {
    //   let routeData: RouteData = this._router.currentInstruction.component.routeData;
    //   this.title = routeData.get('title');
    //   this.isInChildView = !routeData.get('root');
    // });
  }

  goBack() {
    this._router.navigate(['Heroes']);
  }
}
