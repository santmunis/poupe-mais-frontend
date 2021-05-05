import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public hiddenMenu: boolean = false;
  constructor(private _router: Router) {}
  ngOnInit(): void {
    Chart.register(...registerables);

    this._router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        const route = event.state.root.firstChild;
        this.hiddenMenu = route.data.hiddenMenu || false;
      }
    });
  }
  title = 'poupemais';
}
