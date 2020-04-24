import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ConcordhomeComponent } from './concordhome/concordhome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { PublicationComponent } from './publication/publication.component';
import { VideoComponent } from './video/video.component';
import { BrochureComponent } from './brochure/brochure.component';
import { ProductmessringComponent } from './productmessring/productmessring.component';
import { ProductlmtComponent } from './productlmt/productlmt.component';
import { ProductargosyComponent } from './productargosy/productargosy.component';
import { ProductrotadataComponent } from './productrotadata/productrotadata.component';
import { ProductroscomComponent } from './productroscom/productroscom.component';
import { ProductanotronicComponent } from './productanotronic/productanotronic.component';
import { ProductrecsaComponent } from './productrecsa/productrecsa.component';
import { ProductlanatusComponent } from './productlanatus/productlanatus.component';
import { ProducttitanComponent } from './producttitan/producttitan.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RavindranathComponent } from './ravindranath/ravindranath.component';
import { CharankumarComponent } from './charankumar/charankumar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        ConcordhomeComponent,
        AboutusComponent,
        ProductComponent,
        ServiceComponent,
        PublicationComponent,
        VideoComponent,
        BrochureComponent,
        ProductmessringComponent,
        ProductlmtComponent,
        ProductargosyComponent,
        ProductrotadataComponent,
        ProductroscomComponent,
        ProductanotronicComponent,
        ProductrecsaComponent,
        ProductlanatusComponent,
        ProducttitanComponent,
        ProductlistComponent,
        RavindranathComponent,
        CharankumarComponent
    ]
})
export class ExamplesModule { }
