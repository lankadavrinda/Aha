import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleaseComponent } from './latestrelease/latestrelease.component';
import { MollywoodmoodComponent } from './mollywoodmood/mollywoodmood.component';
import { AhaoriginalsComponent } from './ahaoriginals/ahaoriginals.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { WatchforfreeComponent } from './navigatingcomponent/watchforfree/watchforfree.component';
import { TrendingnowComponent } from './navigatingcomponent/trendingnow/trendingnow.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestreleaseComponent,
    MollywoodmoodComponent,
    AhaoriginalsComponent,
    WatchforfreeComponent,
    NavbarComponent,
    FooterComponent,
    TrendingnowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
