import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ConceptComponent } from './concept/concept.component';
import { MangerComponent } from './manger/manger.component';
import { BoissonComponent } from './boisson/boisson.component';
import { GroupesComponent } from './groupes/groupes.component';
import { GalerieComponent } from './galerie/galerie.component';
import { TrouvenousComponent } from './trouvenous/trouvenous.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ConceptComponent,
    MangerComponent,
    BoissonComponent,
    GroupesComponent,
    GalerieComponent,
    TrouvenousComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
