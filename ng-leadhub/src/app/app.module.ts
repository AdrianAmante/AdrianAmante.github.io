import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AgencysummaryComponent } from './agencysummary/agencysummary.component';
import { PartnersummaryComponent } from './partnersummary/partnersummary.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { SearchfilterComponent } from './searchfilter/searchfilter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    AgencysummaryComponent,
    PartnersummaryComponent,
    PageheaderComponent,
    SearchfilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
