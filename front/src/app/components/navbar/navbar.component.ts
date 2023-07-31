import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  exclude = true;
  constructor(private router: Router, private location: Location) {
    this.excludeLink();
  }

  excludeLink() {
    const excludeList: string[] = [
      'agregar',
      'editar',
      'register',
      'login',
      'reset',
    ];

    this.router.events.subscribe((i) => {
      this.exclude =
        excludeList.filter(
          (item) =>
            !isNaN(Number(this.location.path().split('/').reverse()[0])) ||
            this.location.path().endsWith(item)
        ).length > 0
          ? false
          : true;
    });
  }
}
