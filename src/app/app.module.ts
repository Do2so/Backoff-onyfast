import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { PaiementsComponent } from './views/paiements/paiements.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component'

import { WhiteButtonComponent } from './components/white-button/white-button.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import { AgentComponent } from './views/agent/agent.component';
import { RoleComponent } from './views/role/role.component';
import { ServiceComponent } from './views/service/service.component';
import { MessageComponent } from './views/message/message.component';
import { MailComponent } from './views/mail/mail.component';
import { AdduserComponent } from './views/adduser/adduser.component';
import { TopologieComponent } from './views/topologie/topologie.component';
import { AddRoleComponent } from './views/add-role/add-role.component';
import { AddserviceComponent } from './views/addservice/addservice.component';
import { LiaisonComponent } from './views/liaison/liaison.component';
import { AddmessageComponent } from './views/addmessage/addmessage.component';
import { AddmailComponent } from './views/addmail/addmail.component';
//import { UpdateComponent } from './views/update/update.component';
import { DetailsagentComponent } from './views/detailsagent/detailsagent.component';
import { GestionLiaisonComponent } from './views/gestion-liaison/gestion-liaison.component';
import { TronconComponent } from './views/troncon/troncon.component';
import { FibreComponent } from './views/fibre/fibre.component';
import { LiensComponent } from './views/liens/liens.component';
import { MaintenanceComponent } from './views/maintenance/maintenance.component';
import { AddTronconComponent } from './views/add-troncon/add-troncon.component';
import { UpdateTronconComponent } from './views/update-troncon/update-troncon.component';

import { UpdateFibreComponent } from './views/update-fibre/update-fibre.component';
import { AddlienComponent } from './views/addlien/addlien.component';

import { AddMaintenanceComponent } from './views/add-maintenance/add-maintenance.component';
import { UpdateMaintenanceComponent } from './views/update-maintenance/update-maintenance.component';
import { UpdateMailComponent } from './views/update-mail/update-mail.component';
import { UpdateMessageComponent } from './views/update-message/update-message.component';
import { AddLiaisonComponent } from './views/add-liaison/add-liaison.component';
import { UpdateLiaisonComponent } from './views/update-liaison/update-liaison.component';
import { DetailsLiaisonComponent } from './views/details-liaison/details-liaison.component';
import { DetailMessageComponent } from './views/detail-message/detail-message.component';
import { DetailMailComponent } from './views/detail-mail/detail-mail.component';
import { UpdateRoleComponent } from './views/update-role/update-role.component';
import { DetailRoleComponent } from './views/detail-role/detail-role.component';
import { AddServiceComponent } from './views/add-service/add-service.component';
import { UpdateServiceComponent } from './views/update-service/update-service.component';
import { DetailsServiceComponent } from './views/details-service/details-service.component';
import { DetailsTronconComponent } from './views/details-troncon/details-troncon.component';
import { DetailsFibreComponent } from './views/details-fibre/details-fibre.component';
import { DetailsLienComponent } from './views/details-lien/details-lien.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

import { FeuilleCalculsComponent } from './views/feuille-calculs/feuille-calculs.component';
import { GererDepartementComponent } from './views/gerer-departement/gerer-departement.component';
import { InscriptionComponent } from './views/inscription/inscription.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AssisclientComponent } from './components/assisclient/assisclient.component';
import { EpargneComponent } from './views/epargne/epargne.component';
import { DetailUserComponent } from './views/detail-user/detail-user.component';
import { SendMailComponent } from './views/send-mail/send-mail.component';
import { HistotiqueActiviteComponent } from './views/histotique-activite/histotique-activite.component';
import { UpdateUserComponent } from './views/update-user/update-user.component';
import { UpdateComponent } from './views/update/update.component';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ModalDemandeComponent } from './components/modal-demande/modal-demande.component';
import { FormatDatePipe } from './format-date.pipe';
import { DetailsPretComponent } from './views/details-pret/details-pret.component';
import { DetailsEpargneComponent } from './views/details-epargne/details-epargne.component';
import { ModalPretComponent } from './components/modal-pret/modal-pret.component';
import { ModalEpargneComponent } from './components/modal-epargne/modal-epargne.component';
import {ToastrModule} from 'ngx-toastr';
import { MaxlengthPipe } from './pipes/maxlength.pipe';
import { NodemailerComponent } from './views/nodemailer/nodemailer.component';
import { DetailNotifComponent } from './views/detail-notif/detail-notif.component';
import { DetailHistComponent } from './views/detail-hist/detail-hist.component';
import { AlertComponent } from './views/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavComponent,
    PageNotFoundComponent,
    ToolbarComponent,
  

    PaiementsComponent,
    HomeComponent,
 
    WhiteButtonComponent,
    AgentComponent,
    RoleComponent,
    ServiceComponent,
    MessageComponent,
    MailComponent,
    AdduserComponent,
    TopologieComponent,
    AddRoleComponent,
    AddserviceComponent,
    LiaisonComponent,
    AddmessageComponent,
    AddmailComponent,
    DetailsagentComponent,
    GestionLiaisonComponent,
    TronconComponent,
    FibreComponent,
    LiensComponent,
    MaintenanceComponent,
    AddTronconComponent,
    UpdateTronconComponent,
 
    UpdateFibreComponent,
    AddlienComponent,
    AddMaintenanceComponent,
    UpdateMaintenanceComponent,
    UpdateMailComponent,
    UpdateMessageComponent,
    AddLiaisonComponent,
    UpdateLiaisonComponent,
    DetailsLiaisonComponent,
    DetailMailComponent,
    UpdateRoleComponent,
    DetailRoleComponent,
    AddServiceComponent,
    UpdateServiceComponent,
    DetailsServiceComponent,
    DetailsTronconComponent,
    DetailsFibreComponent,
    DetailsLienComponent,
    FeuilleCalculsComponent,
    GererDepartementComponent,
    InscriptionComponent,
    ProfileComponent,
    AssisclientComponent,
    EpargneComponent,
    DetailUserComponent,
    SendMailComponent,
    UpdateComponent,
    HistotiqueActiviteComponent,
         UpdateUserComponent,
         ModalDemandeComponent,
         FormatDatePipe,
         DetailsPretComponent,
         DetailsEpargneComponent,
         ModalPretComponent,
         ModalEpargneComponent,
         MaxlengthPipe,
         NodemailerComponent,
         DetailNotifComponent,
         DetailHistComponent,
         AlertComponent,

    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    MatBadgeModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    AuthModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatPaginatorModule,
    ToastrModule.forRoot()
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

