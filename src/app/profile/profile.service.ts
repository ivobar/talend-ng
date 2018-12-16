import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    profiles: Profile;
    constructor(private httpClient: HttpClient) { }

    getProfile(id: string): Observable<Profile> {
        return this.httpClient.get<Profile>(`https://talend-f65a9.firebaseio.com/profiles/${id}.json`);
    }

}
