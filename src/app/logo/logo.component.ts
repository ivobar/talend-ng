import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit() {
  }

  returnHome() {
    this.navService.routeChanged.next();
  }
}
