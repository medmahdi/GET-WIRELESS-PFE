import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { DefaultBodyComponent } from './default-body/default-body.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCandidatComponent } from './create-candidat/create-candidat.component';
import { AdminComponent } from './admin/admin.component';
import { PartieAdminComponent } from './partie-admin/partie-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { PartieSimpleComponent } from './partie-simple/partie-simple.component';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { AjouterFormateurComponent } from './ajouter-formateur/ajouter-formateur.component';
import { AffecterSessionComponent } from './affecter-session/affecter-session.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { PartieAdmnAcComponent } from './partie-admn-ac/partie-admn-ac.component';
import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { DetailleFormationComponent } from './detaille-formation/detaille-formation.component';
import { ListeDesFormationsCandidatComponent } from './liste-des-formations-candidat/liste-des-formations-candidat.component';
import { ListeDesFormationsFormateurComponent } from './liste-des-formations-formateur/liste-des-formations-formateur.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PartieCandidatComponent } from './partie-candidat/partie-candidat.component';
import { AcceuilCandidatComponent } from './acceuil-candidat/acceuil-candidat.component';
import { MenuCandidatComponent } from './menu-candidat/menu-candidat.component';
import { LoginFormateurComponent } from './login-formateur/login-formateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { AuthInterceptor } from './helper/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    DefaultBodyComponent,
    AcceuilComponent,
    FooterComponent,
    CreateCandidatComponent,
    AdminComponent,
    PartieAdminComponent,
    MenuAdminComponent,
    PartieSimpleComponent,
    AjouterFormationComponent,
    AjouterFormateurComponent,
    AffecterSessionComponent,
    ListeDesCandidatsComponent,
    PartieAdmnAcComponent,
    RechercheFormationComponent,
    DetailleFormationComponent,
    ListeDesFormationsCandidatComponent,
    ListeDesFormationsFormateurComponent,
    PartieCandidatComponent,
    AcceuilCandidatComponent,
    MenuCandidatComponent,
    LoginFormateurComponent,
    //  AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule, BrowserAnimationsModule,AdminPanelModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
