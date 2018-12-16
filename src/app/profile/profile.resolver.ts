import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Injectable()
export class ProfileResolver implements Resolve<Observable<Profile>> {
    constructor(private profService: ProfileService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Profile> {
        return this.profService.getProfile(route.paramMap.get('id'));
    }
}
