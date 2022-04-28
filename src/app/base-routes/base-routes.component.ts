import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-routes',
  template: `
    <router-outlet>
    </router-outlet>
  `,
  styles: [
  ]
})
export class BaseRoutesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
