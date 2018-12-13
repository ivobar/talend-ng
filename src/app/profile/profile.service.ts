import { Injectable } from '@angular/core';
import { Profile } from './profile.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    profiles: Profile[] = [
        {
            name: 'Ivo Baramov',
            age: 27,
            job: 'Front-end Developer',
            // tslint:disable-next-line:max-line-length
            mainDescrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore est maiores itaque asperiores distinctio quam similique ratione perspiciatis reprehenderit velit nisi nemo aperiam dolorem repellendus doloribus libero repellat voluptate, rerum cum eius. Aperiam iste tenetur aliquid cupiditate, corrupti vitae quo tempora perspiciatis minima pariatur, cumque culpa nemo odio neque.',
            // tslint:disable-next-line:max-line-length
            secondaryDescrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, earum? Nihil assumenda voluptatum aperiam, error labore dicta explicabo voluptatem distinctio maiores fugit hic doloribus ea? Sunt ab asperiores molestiae voluptatum.',
            blogLink: 'Some blog link here',
            roadmapLink: 'Some roadmap link here',
            goals: ['Link1', 'Link2', 'Link3']
        }
    ];
    constructor() { }

}
