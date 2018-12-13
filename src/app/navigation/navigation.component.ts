import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  pageCarousel = ['idea', 'people', 'contributors', 'blog'];

  constructor(
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    if (this.location.path()) {
      this.router.navigate(['/']);
    }
  }

  moveLeft() {
    this.pageCarousel.unshift(this.pageCarousel.pop());
  }

  moveRight() {
    this.pageCarousel.push(this.pageCarousel.shift());
  }
}
