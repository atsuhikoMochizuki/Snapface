import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

const routes: Routes = [
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent }
  ];


/* Nota : RouterModule est le module principale du routeru d'Angular*/

@NgModule({ // On ajoute au décorateur un objet de configuration
    imports: [
        /*Enregistrement des routes racines de notre application*/
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]      // Export du RouterModule configuré
})
export class AppRoutingModule {

}