import { Component, OnInit } from '@angular/core';
import { Profile } from './profile.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile;
  cardClass;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cardClass = `person-${this.route.snapshot.params['id']}`;
    this.profile = this.route.snapshot.data.profile;
  }

}
