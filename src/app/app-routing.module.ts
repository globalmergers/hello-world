import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/common/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { FindABuyerComponent } from './pages/find-a-buyer/find-a-buyer.component';
import { RegisterBuyerComponent } from './pages/register-buyer/register-buyer.component';
import { IndustryAerospaceComponent } from './pages/industry-aerospace/industry-aerospace.component';
import { CountryComponent } from './pages/country/country.component';
import { CountryAustriaComponent } from './pages/country-austria/country-austria.component';
import { JoinGlobalmergersComponent } from './pages/join-globalmergers/join-globalmergers.component';
import { FindBuyerComponent } from './pages/find-buyer/find-buyer.component';
import { FindSellerComponent } from './pages/find-seller/find-seller.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"search",
    component: SearchResultComponent
  },
  {
    path:"industry-Automotive",
    component: IndustryComponent,
    data: { title: 'Automotive Industry in Europe', b1:'Buy Automotive Company in EU', b2: 'Sell Automotive Company in EU' }
  },
  {
    path:"industry-Electric-Vehicle",
    component: IndustryComponent,
    data: { title: 'Electric Vehicle Industry in Europe', b1:'Buy Electric Vehicle Company in EU', b2: 'Sell Electric Vehicle Company in EU' }
  },
  {
    path:"industry-Energy",
    component: IndustryComponent,
    data: { title: 'Energy Industry in Europe', b1:'Buy Energy Company in EU', b2: 'Sell Energy Company in EU' }
  },
  {
    path:"industry-Industrial-Goods",
    component: IndustryComponent,
    data: { title: 'Industrial Goods in Europe', b1:'Buy Industrial Goods Company in EU', b2: 'Sell Industrial Goods Company in EU' }
  },
  {
    path:"register-buyer",
    component: RegisterBuyerComponent
  },
  {
    path:"industry-Aerospace",
    component: IndustryAerospaceComponent
  },
  {
    path:"country",
    component: CountryComponent
  },
  {
    path:"country-austria",
    component: CountryAustriaComponent
  },
  {
    path:"request-information",
    component: JoinGlobalmergersComponent
  },
  {
    path:"comming-soon",
    component: FindABuyerComponent
  },
  {
    path:"about-us",
    component: FindABuyerComponent,
    data: { title: 'About-Us' }
  },
  {
    path:"sign-in",
    component: FindABuyerComponent,
    data: { title: 'SignIn' }
  },
  {
    path:"industry/plastics",
    component: FindABuyerComponent,
    data: { title: 'Energy' }
  },
  {
    path:"industry/Electric-Vehicle",
    component: FindABuyerComponent,
    data: { title: 'Electric Vehicle' }
  },
  {
    path:"industry/industrial-goods",
    component: FindABuyerComponent,
    data: { title: 'Industrial-Goods' }
  },
  {
    path:"country/armenia",
    component: FindABuyerComponent,
    data: { title: 'Armenia' }
  },
  {
    path:"country/switzerland",
    component: FindABuyerComponent,
    data: { title: 'Switzerland' }
  },
  {
    path:"country/croatia",
    component: FindABuyerComponent,
    data: { title: 'Croatia' }
  },
  {
    path:"country/denmark",
    component: FindABuyerComponent,
    data: { title: 'Denmark' }
  },
  {
    path:"country/finland",
    component: FindABuyerComponent,
    data: { title: 'Finland' }
  },
  {
    path:"country/france",
    component: FindABuyerComponent,
    data: { title: 'France' }
  },
  {
    path:"country/germany",
    component: FindABuyerComponent,
    data: { title: 'Germany' }
  },
  {
    path:"country/hungary",
    component: FindABuyerComponent,
    data: { title: 'Hungary' }
  },
  {
    path:"country/italy",
    component: FindABuyerComponent,
    data: { title: 'Italy' }
  },
  {
    path:"country/netherlands",
    component: FindABuyerComponent,
    data: { title: 'Netherlands' }
  },
  {
    path:"country/poland",
    component: FindABuyerComponent,
    data: { title: 'Poland' }
  },
  {
    path:"country/portugal",
    component: FindABuyerComponent,
    data: { title: 'Portugal' }
  },
  {
    path:"country/romania",
    component: FindABuyerComponent,
    data: { title: 'Romania' }
  },
  {
    path:"country/slovakia",
    component: FindABuyerComponent,
    data: { title: 'Slovakia' }
  },
  {
    path:"country/slovenia",
    component: FindABuyerComponent,
    data: { title: 'Slovenia' }
  },
  {
    path:"country/slovenia",
    component: FindABuyerComponent,
    data: { title: 'Slovenia' }
  },
  {
    path:"country/spain",
    component: FindABuyerComponent,
    data: { title: 'Spain' }
  },
  {
    path:"country/czech-republic",
    component: FindABuyerComponent,
    data: { title: 'Czech Republic' }
  },
  {
    path:"country/sweden",
    component: FindABuyerComponent,
    data: { title: 'Sweden' }
  },
  {
    path:"country/belgium",
    component: FindABuyerComponent,
    data: { title: 'Belgium' }
  },
  {
    path:"find-buyer",
    component: FindBuyerComponent
  },
  {
    path:"find-seller",
    component: FindSellerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
