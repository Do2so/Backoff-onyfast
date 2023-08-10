import { FeuilleCalculsComponent } from './views/feuille-calculs/feuille-calculs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './views/dashboard/dashboard.component';

import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


import { PaiementsComponent } from './views/paiements/paiements.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/views/auth/auth.component';


import { AgentComponent } from './views/agent/agent.component';

import { RoleComponent } from './views/role/role.component';
import { ServiceComponent } from './views/service/service.component';

import { MessageComponent } from './views/message/message.component';
import { MailComponent } from './views/mail/mail.component';
import { AdduserComponent } from './views/adduser/adduser.component';
import { TopologieComponent } from './views/topologie/topologie.component';
import { AddRoleComponent } from './views/add-role/add-role.component';
import { AddserviceComponent } from './views/addservice/addservice.component';
//import { UpdateComponent } from './views/update/update.component';
import { DetailsagentComponent } from './views/detailsagent/detailsagent.component';
import { GestionLiaisonComponent } from './views/gestion-liaison/gestion-liaison.component';
import { TronconComponent } from './views/troncon/troncon.component';
import { FibreComponent } from './views/fibre/fibre.component';
import { LiensComponent } from './views/liens/liens.component';
import { MaintenanceComponent } from './views/maintenance/maintenance.component';
import { LiaisonComponent } from './views/liaison/liaison.component';
import { AddLiaisonComponent } from './views/add-liaison/add-liaison.component';
import { UpdateLiaisonComponent } from './views/update-liaison/update-liaison.component';
import { DetailsLiaisonComponent } from './views/details-liaison/details-liaison.component';
import { AddMaintenanceComponent } from './views/add-maintenance/add-maintenance.component';
import { UpdateMaintenanceComponent } from './views/update-maintenance/update-maintenance.component';
import { AddmessageComponent } from './views/addmessage/addmessage.component';
import { UpdateMessageComponent } from './views/update-message/update-message.component';
import { UpdateMailComponent } from './views/update-mail/update-mail.component';
import { DetailMailComponent } from './views/detail-mail/detail-mail.component';
import { AddmailComponent } from './views/addmail/addmail.component';
import { UpdateRoleComponent } from './views/update-role/update-role.component';
import { DetailRoleComponent } from './views/detail-role/detail-role.component';
import { UpdateServiceComponent } from './views/update-service/update-service.component';
import { DetailsServiceComponent } from './views/details-service/details-service.component';
import { AddTronconComponent } from './views/add-troncon/add-troncon.component';
import { DetailsTronconComponent } from './views/details-troncon/details-troncon.component';
import { UpdateTronconComponent } from './views/update-troncon/update-troncon.component';

import { UpdateFibreComponent } from './views/update-fibre/update-fibre.component';
import { DetailsFibreComponent } from './views/details-fibre/details-fibre.component';
import { DetailsLienComponent } from './views/details-lien/details-lien.component';

import { AddlienComponent } from './views/addlien/addlien.component';
import { InscriptionComponent } from './views/inscription/inscription.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UpdateComponent } from './views/update/update.component';
import { AssisclientComponent } from './components/assisclient/assisclient.component';
import { EpargneComponent } from './views/epargne/epargne.component';
import { DetailUserComponent } from './views/detail-user/detail-user.component';
import { SendMailComponent } from './views/send-mail/send-mail.component';
import { HistotiqueActiviteComponent } from './views/histotique-activite/histotique-activite.component';
import { UpdateUserComponent } from './views/update-user/update-user.component';
import { DetailMessageComponent } from './views/detail-message/detail-message.component';
import { DetailsPretComponent } from './views/details-pret/details-pret.component';
import { DetailsEpargneComponent } from './views/details-epargne/details-epargne.component';
import { NodemailerComponent } from './views/nodemailer/nodemailer.component';
import { DetailNotifComponent } from './views/detail-notif/detail-notif.component';



const routes: Routes = [
  
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
 
  {path: 'agent', component: AgentComponent, canActivate: [AuthGuard]},
  {path: 'role', component: RoleComponent, canActivate: [AuthGuard]},
  {path: 'service', component: ServiceComponent, canActivate: [AuthGuard]},
  {path: 'message', component: MessageComponent, canActivate: [AuthGuard]},
  {path: 'mail', component: MailComponent, canActivate: [AuthGuard]},
  {path: 'adduser', component: AdduserComponent, canActivate: [AuthGuard]},
  {path: 'update', component: UpdateComponent, canActivate: [AuthGuard]},
  {path: 'topologie', component: TopologieComponent, canActivate: [AuthGuard]},
  {path: 'AddRole', component: AddRoleComponent, canActivate: [AuthGuard]},
  {path: 'addservice', component: AddserviceComponent, canActivate: [AuthGuard]},
  {path: 'addliaison', component: AddLiaisonComponent, canActivate: [AuthGuard]},
  {path: 'addMaintenance', component: AddMaintenanceComponent, canActivate: [AuthGuard]},
  {path: 'addMessage', component: AddmessageComponent, canActivate: [AuthGuard]},
  {path: 'addmail', component: AddmailComponent, canActivate: [AuthGuard]},
  {path: 'addtroncon', component: AddTronconComponent, canActivate: [AuthGuard]},

  {path: 'addLien', component: AddlienComponent, canActivate: [AuthGuard]},
  {path: 'inscription', component: InscriptionComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'assistance', component: AssisclientComponent, canActivate: [AuthGuard]},
  {path: 'epargne', component: EpargneComponent, canActivate: [AuthGuard]},

  {path: 'updateliaison/:id', component: UpdateLiaisonComponent, canActivate: [AuthGuard]},
  {path: 'updatemaintenance/:id', component: UpdateMaintenanceComponent, canActivate: [AuthGuard]},
  {path: 'updatemessage/:id', component: UpdateMessageComponent, canActivate: [AuthGuard]},
  {path: 'updatemail/:id', component: UpdateMailComponent, canActivate: [AuthGuard]},
  {path: 'updaterole/:id', component: UpdateRoleComponent, canActivate: [AuthGuard]},
  {path: 'updateservice/:id', component: UpdateServiceComponent, canActivate: [AuthGuard]},
  {path: 'updateTroncon/:id', component: UpdateTronconComponent, canActivate: [AuthGuard]},
  {path: 'updateFibre/:id', component: UpdateFibreComponent, canActivate: [AuthGuard]},




  {path: 'detailsagent/:id', component: DetailsagentComponent, canActivate: [AuthGuard]},
  {path: 'detailsliaison/:id', component: DetailsLiaisonComponent, canActivate: [AuthGuard]},
  {path: 'detailsmail/:id', component: DetailMailComponent, canActivate: [AuthGuard]},
  {path: 'details-message/:id', component: DetailMessageComponent, canActivate: [AuthGuard]},
  {path: 'details-pret/:id', component: DetailsPretComponent, canActivate: [AuthGuard]},
  {path: 'details-epargne/:id', component: DetailsEpargneComponent, canActivate: [AuthGuard]},
  
  {path: 'detailsrole/:id', component: DetailRoleComponent, canActivate: [AuthGuard]},
  {path: 'detailsservice/:id', component: DetailsServiceComponent, canActivate: [AuthGuard]},
  {path: 'detailsTroncon/:id', component: DetailsTronconComponent, canActivate: [AuthGuard]},
  {path: 'detailsFibre/:id', component: DetailsFibreComponent, canActivate: [AuthGuard]},


  {path: 'detailsLien/:id', component: DetailsLienComponent, canActivate: [AuthGuard]},
  {path: 'detailNotif', component: DetailNotifComponent, canActivate: [AuthGuard]},
  {path: 'feuillecalculs', component: FeuilleCalculsComponent, canActivate: [AuthGuard]},





  {path: 'gestionliaison', component: GestionLiaisonComponent, canActivate: [AuthGuard]},
  {path: 'nodemailer', component: NodemailerComponent, canActivate: [AuthGuard]},
  {path: 'troncon', component: TronconComponent, canActivate: [AuthGuard]},
  {path: 'fibre', component: FibreComponent, canActivate: [AuthGuard]},
  {path: 'lien', component: LiensComponent, canActivate: [AuthGuard]},
  {path: 'maintenance', component: MaintenanceComponent, canActivate: [AuthGuard]},
  {path: 'liaison', component: LiaisonComponent, canActivate: [AuthGuard]},
  {path: 'sendMail', component: SendMailComponent, canActivate: [AuthGuard]},
  {path: 'HistoriqueActivite', component: HistotiqueActiviteComponent, canActivate: [AuthGuard]},
  {path: 'updateuser/:id', component: UpdateUserComponent, canActivate: [AuthGuard]},




  {path: 'paiements', component: PaiementsComponent, canActivate: [AuthGuard]},
  {path: 'detailsUser/:id', component:DetailUserComponent, canActivate: [AuthGuard]},
 
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
