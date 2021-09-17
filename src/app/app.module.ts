import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {NgxPaginationModule} from 'ngx-pagination';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { HeaderComponent } from './pages/common/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FindABuyerComponent } from './pages/find-a-buyer/find-a-buyer.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { RegisterBuyerComponent } from './pages/register-buyer/register-buyer.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { IndustryAerospaceComponent } from './pages/industry-aerospace/industry-aerospace.component';
import { CountryComponent } from './pages/country/country.component';
import { CountryAustriaComponent } from './pages/country-austria/country-austria.component';
import { JoinGlobalmergersComponent } from './pages/join-globalmergers/join-globalmergers.component';
import { FindBuyerComponent } from './pages/find-buyer/find-buyer.component';
import { FindSellerComponent } from './pages/find-seller/find-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FindABuyerComponent,
    SearchResultComponent,
    IndustryComponent,
    RegisterBuyerComponent,
    FooterComponent,
    IndustryAerospaceComponent,
    CountryComponent,
    CountryAustriaComponent,
    JoinGlobalmergersComponent,
    FindBuyerComponent,
    FindSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    NgxPaginationModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
