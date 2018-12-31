import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { IdeaComponent } from './idea/idea.component';
import { BlogComponent } from './blog/blog.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileResolver } from './profile/profile.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ProfileComponent,
    IdeaComponent,
    BlogComponent,
    ContributorsComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProfileResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
