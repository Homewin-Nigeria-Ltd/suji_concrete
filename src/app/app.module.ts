import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { HerculesComponent } from './pages/hercules/hercules.component';
import { Session1Component } from './pages/session1/session1.component';
import { SwiperModule } from 'swiper/angular';
import { IconsModule } from './icons/icons.module';
import { Session2Component } from './pages/session2/session2.component';
import { Session3Component } from './pages/session3/session3.component';
import { Session4Component } from './pages/session4/session4.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { Session5Component } from './pages/session5/session5.component';
import { Session6Component } from './pages/session6/session6.component';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HerculesComponent,
    Session1Component,
    Session2Component,
    Session3Component,
    Session4Component,
    Session5Component,
    Session6Component,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule, IvyCarouselModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
