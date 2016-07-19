import { Component } from '@angular/core';
import {PolymerElement} from "@vaadin/angular2-polymer";


export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <vaadin-grid [items]="products">
        <table>
            <colgroup>
                <col name="name">
            </colgroup>
        </table>
    </vaadin-grid>
    `,
  directives: [PolymerElement('vaadin-grid')]
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  products:any[] = [
    {id:1, name:'dfsdf'},
    {id:2, name:'11111'},
    {id:3, name:'22222'}
  ];
}