import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation/navigation.service';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('void => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(200, animate(2000, style({ opacity: 1 })))
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  loading = false;
  spinPerson = '';
  routeSubscription: Subscription;
  selectPersonSub: Subscription;
  people = [1, 2, 3, 4, 5, 6];

  constructor(private router: Router,
    private navSer: NavigationService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.router.events.subscribe(
      (routerEvent: Event) => {
        this.checkRouterEvent(routerEvent);
      }
    );
    this.selectPersonSub = this.navSer.selectPerson.subscribe(
      (id: string) => {
        this.selectPerson(+id);
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

  selectPerson(id: number) {
    this.spinPerson = `spin-${id}`;
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.selectPersonSub.unsubscribe();
  }

}
