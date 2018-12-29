import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  pageCarousel = ['idea', 'people', 'contributors', 'blog'];
  routeChangeSub: Subscription;

  constructor(
    private location: Location,
    private router: Router,
    private navSer: NavigationService) { }

  ngOnInit() {
    if (this.location.path()) {
      this.router.navigate(['/']);
    }
    this.routeChangeSub = this.navSer.routeChanged.subscribe(
      () => {
        this.pageCarousel = ['idea', 'people', 'contributors', 'blog'];
        this.router.navigate(['/']);
      }
    );
  }

  moveLeft() {
    this.pageCarousel.unshift(this.pageCarousel.pop());
  }

  moveRight() {
    this.pageCarousel.push(this.pageCarousel.shift());
  }

  selectPerson(id: string) {
    console.log('maika ti');

    this.navSer.routeChanged.next(id);
  }

  ngOnDestroy() {
    this.routeChangeSub.unsubscribe();
  }
}
