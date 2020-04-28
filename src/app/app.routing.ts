import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ConcordhomeComponent } from './examples/concordhome/concordhome.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { ProductComponent } from './examples/product/product.component';
import { ProductmessringComponent } from './examples/productmessring/productmessring.component';
import { ProductlmtComponent } from './examples/productlmt/productlmt.component';
import { ProductargosyComponent } from './examples/productargosy/productargosy.component';
import { ProductrotadataComponent } from './examples/productrotadata/productrotadata.component';
import { ProductroscomComponent } from './examples/productroscom/productroscom.component';
import { ProductanotronicComponent } from './examples/productanotronic/productanotronic.component';
import { ProductrecsaComponent } from './examples/productrecsa/productrecsa.component';
import { ProductlanatusComponent } from './examples/productlanatus/productlanatus.component';
import { ProducttitanComponent } from './examples/producttitan/producttitan.component';
import { ServiceComponent } from './examples/service/service.component';
import { VideoComponent } from './examples/video/video.component';
import { PublicationComponent } from './examples/publication/publication.component';
import { BrochureComponent } from './examples/brochure/brochure.component';
import { RavindranathComponent } from './examples/ravindranath/ravindranath.component';
import { CharankumarComponent } from './examples/charankumar/charankumar.component';
import { ProductancoComponent } from './examples/productanco/productanco.component';


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home2',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'home',            component: ConcordhomeComponent },
    { path: 'aboutus',            component: AboutusComponent },
    { path: 'product',           component:ProductComponent },
    { path: 'productmessring',   component:ProductmessringComponent },
    { path: 'productlmt',   component:ProductlmtComponent },
    { path: 'productargosy',   component:ProductargosyComponent },
    { path: 'productrotadata',   component:ProductrotadataComponent },
    { path: 'productroscom',   component:ProductroscomComponent },
    { path: 'productanotronic',   component:ProductanotronicComponent },
    { path: 'productrecsa',   component:ProductrecsaComponent },
    { path: 'productlanatus',   component:ProductlanatusComponent },
    { path: 'producttitan',   component:ProducttitanComponent },
    { path: 'productanco',   component:ProductancoComponent },
    { path: 'service',           component: ServiceComponent },
    { path: 'video',           component: VideoComponent },
    { path: 'publication',           component: PublicationComponent },
    { path: 'brochure',           component: BrochureComponent },
    { path: 'ravindranath',      component: RavindranathComponent },
    { path: 'charankumar',      component: CharankumarComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
