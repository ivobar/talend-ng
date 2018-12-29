import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  loading = false;
  spinPerson = '';
  routeSubscription: Subscription;

  constructor(private router: Router, private navSer: NavigationService) { }

  ngOnInit() {
    this.routeSubscription = this.router.events.subscribe(
      (routerEvent: Event) => {
        this.checkRouterEvent(routerEvent);
      }
    );
    this.navSer.routeChanged.subscribe(
      (id: string) => {
        this.selectPerson(id);
      }
    );
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  selectPerson(id: string) {
    this.spinPerson = `spin-${id}`;
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
