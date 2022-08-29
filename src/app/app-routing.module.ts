import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonComponent } from './boisson/boisson.component';
import { ConceptComponent } from './concept/concept.component';
import { GalerieComponent } from './galerie/galerie.component';
import { GroupesComponent } from './groupes/groupes.component';
import { HomeComponent } from './home/home.component';
import { MangerComponent } from './manger/manger.component';
import { TrouvenousComponent } from './trouvenous/trouvenous.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'trouve_nous', component: TrouvenousComponent},
  {path: 'groupes', component: GroupesComponent},
  {path: 'concept', component: ConceptComponent},
  {path: 'manger', component: MangerComponent},
  {path: 'boisson', component: BoissonComponent},
  {path: 'galerie', component: GalerieComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
