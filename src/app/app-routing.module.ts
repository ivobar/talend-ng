import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { IdeaComponent } from './idea/idea.component';
import { ContributorsComponent } from './contributors/contributors.component';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: '/people'},
  {path: 'people', component: HomeComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'idea', component: IdeaComponent},
  {path: 'contributors', component: ContributorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
