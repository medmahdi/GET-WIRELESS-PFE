import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CreateCandidatComponent } from './create-candidat/create-candidat.component';
import { AdminComponent } from './admin/admin.component';
import { PartieSimpleComponent } from './partie-simple/partie-simple.component';
import { PartieAdminComponent } from './partie-admin/partie-admin.component';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { AjouterFormateurComponent } from './ajouter-formateur/ajouter-formateur.component';
import { AffecterSessionComponent } from './affecter-session/affecter-session.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { DetailleFormationComponent } from './detaille-formation/detaille-formation.component';
import { ListeDesFormationsCandidatComponent } from './liste-des-formations-candidat/liste-des-formations-candidat.component';
import { ListeDesFormationsFormateurComponent } from './liste-des-formations-formateur/liste-des-formations-formateur.component';
import { LoginFormateurComponent } from './login-formateur/login-formateur.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'Acceuil', component: AcceuilComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Login_Formateur', component: LoginFormateurComponent },
  { path: 'Create_Candidat', component: CreateCandidatComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'Recherche', component: RechercheFormationComponent },
  { path: 'Detaile_Formation/:id', component: DetailleFormationComponent },
  { path: 'Liste_Des_Formations_Candidat', component: ListeDesFormationsCandidatComponent },
  { path: 'Liste_Des_Formations_Formateur', component: ListeDesFormationsFormateurComponent },
  {
    path: 'Partie_Admin',
    component: PartieAdminComponent,
    children: [
      { path: 'Ajouter_Formation', component: AjouterFormationComponent },
      { path: 'Ajouter_Formateur', component: AjouterFormateurComponent },
      { path: 'Affecter_Session', component: AffecterSessionComponent },
      { path: 'Liste_Des_Candidats', component: ListeDesCandidatsComponent },
    ]
  },
  { path: 'admin-panel', loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
