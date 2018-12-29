import { Component, OnInit, OnDestroy } from '@angular/core';
import { Profile } from './profile.model';
import { ActivatedRoute, Params, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  cardClass: string;
  idSub: Subscription;
  dataSub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.cardClass = `person-${params['id']}`;
      }
    );
    this.route.data.subscribe(
      (data: Data) => {
        this.profile = data.profile;
      }
    );
  }

}
