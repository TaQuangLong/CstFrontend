import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'cst-frontend';

  constructor(
    private router: Router,
  ) {}
  ngOnInit(): void {
    const routeEvent = this.router.events;
  }
}
