import { UserService } from './user.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface message{
  numero:number,
  contenu:string,
  username:string
}

interface maintenance{
libelle : string,
lieu : string,
longitudeLieu : string,
latitudeLieu : string,
liaison : string,
nombreEpissure : number,
cause : string,
actionEntrep : string,
materielUse : string,
username : string
}

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  REST_API: string = 'http://127.0.0.1:3000';
  URL: string='https://641c33141a68dc9e46031127.mockapi.io/onyfast/pret';

  URL1:string="https://641c33141a68dc9e46031127.mockapi.io/onyfast/assurance";
  URL2:string="http://185.98.139.41/api/users/get";

  URL3: string = "http://192.162.68.88/api/users/demandes/assurances/get";
  URL4: string = "http://192.162.68.88/api/users/demandes/prets/get";
  URL5: string = "http://192.162.68.88/api/users/demandes/epargnes/get";
  URL6: string = "http://192.162.68.88/api/users/get";
  API :string ="http://192.162.68.88/api/users"
  URL7 :string ="http://192.162.68.88/api"
  URL8 :string ="http://192.162.68.88/api/activites/get"
  AGENT : string ="http://192.162.68.88/api/agents/get/"

  public listUsers = []
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private httpclient: HttpClient) { }

   // Afficher tous les utilisateurs
   
   GetUsers() {

    const self= this
    
    return this.httpclient.get(`${this.REST_API}/utilisateurs/affiche`)
 
  }


//liste des demandes d'assurance


  //Afficher les roles
  GetRoles() {
    return this.httpclient.get(`${this.REST_API}/role/afficherole`);
  }

  //Affiche les services
  GetServices() {
    return this.httpclient.get(`${this.REST_API}/service/afficheservice`);
  }

  //Affiche tous les services
  GetMessages() {
    return this.httpclient.get(`${this.REST_API}/message/affichemessages`);
  }
   GetMessagesCopie() {
    return this.httpclient.get(`${this.URL3}`);
  }
  GetEpargnesCopie() {
    return this.httpclient.get(`${this.URL5}`);
  }
  GetUsersCopie() {
    return this.httpclient.get(`${this.URL6}`);
  }
   GetUsersActivity() {
    return this.httpclient.get(`${this.URL8}`);
  }

  GetHistorique() {
    return this.httpclient.get(`${this.URL7}/activite/get`);
  }

  //affiche les messages
  GetMails() {
    return this.httpclient.get(`${this.REST_API}/mail/affichemail`);
  }
  GetMailsCopie() {
    return this.httpclient.get(`${this.URL4}`);
  }
  
  //Affiche les liaisons
  GetLiaisons() {
    return this.httpclient.get(`${this.REST_API}/all-liaisons/afficheliaisons`);
  }

  //Afficher les maintenaces
  GetMaintenances() {
    return this.httpclient.get(`${this.REST_API}/all-maintenances/affichemaintenances`);
  }
  GetMaintenancesCopie() {
    return this.httpclient.get(`${this.URL2}`);
  }
  
  //Afficher tous les troncons
  GetTroncons() {
    return this.httpclient.get(`${this.REST_API}/all-troncons/affichetroncons`);
  }
//Afficher tous les fibres
GetFibres() {
  return this.httpclient.get(`${this.REST_API}/all-fibres/affichefibres`);
}

//Afficher tous les liens
GetLiens() {
  return this.httpclient.get(`${this.REST_API}/all-liens/afficheliens`);
}

//nombre d'agents
GetAgentNumber() {
  return this.httpclient.get(`${this.REST_API}/utilisateurs/nombre`);
}

//Nombre de liaison
GetNumberLiaison() {
  return this.httpclient.get(`${this.REST_API}/all-liaisons/nombre`);
}

//Nombre de maintenances
GetNumberMaintenance() {
  return this.httpclient.get(`${this.REST_API}/all-maintenances/nombre`);
}

GetNumberMessage() {
  return this.httpclient.get(`${this.REST_API}/message/nombre`);
}

GetNumberMail() {
  return this.httpclient.get(`${this.REST_API}/mail/nombre`);
}


  //supprimer un agent
  deleteAgent(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-agent/delete/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }
  //Supprimer un message
  deleteMessage(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/message/supMessage/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }

  deleteService(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/service/supService/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }
  //Supprimer un message
  deleteMail(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/mail/supMail/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }
  //Supprimer une liaison
  deleteLiaison(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/sup/delete/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }

  //Supprimer une maintenance
  deleteMaintenance(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/maintenance/supmaintenance/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }

  //Supprimer un role
  deleteRole(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/role/supRole/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }

  //Supprimer un troncon
  deleteTroncon(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/all-troncons/supTroncon/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }

  //supprimer une fibre
  deleteFibre(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/all-fibres/supFibre/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }

  //Supprimer un lien
  deleteLien(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/all-liens/supLienu/${id}`;
    return this.httpclient.delete(API_URL).pipe(
        catchError(this.handleError)
      )
  }

  //créer un agent
 AddUser(data: UserService): Observable<any> {
    let API_URL = `${this.REST_API}/ajout/insert`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Ajouter un troncon
  AddTroncon(data: UserService): Observable<any> {
    let API_URL = `${this.REST_API}/all-troncons/ajoutTroncon`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Ajouter un role
  AddRole(data: UserService): Observable<any> {
    let API_URL = `${this.REST_API}/role/ajoutRole`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  
  //Ajouter une liaison
  AddLiaison(data: UserService): Observable<any> {
    let API_URL = `${this.REST_API}/une/liaison`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Ajouter une maintenance
  AddMaintenance(data: maintenance): Observable<any> {
    let API_URL = `${this.REST_API}/maintenance/insertM`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  AddMessage(data: message): Observable<any> {
    let API_URL = `${this.REST_API}/message/ajoutMessage`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  //Ajouter uyn service
  AddService(data: UserService): Observable<any> {
    let API_URL = `${this.REST_API}/service/ajoutService`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  //Ajouter une fibre
  AddFibre(data: UserService): Observable<any> {
    let API_URL = `${this.REST_API}/all-fibres/ajoutFibre`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  //Ajouter un mail
  AddMail(data: UserService): Observable<any> {
    let API_URL = `${this.REST_API}/mail/ajoutMail`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  //Ajouiter un lien
  
  AddLien(data: UserService): Observable<any> {
    let API_URL = `${this.REST_API}/all-liens/ajoutLien`;
    return this.httpclient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Afficher un utilisateur
  GetUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/one/select/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
//lire un messag
GetMessage(id:any): Observable<any> {
  let API_URL = `${this.REST_API}/message/oneMessage/${id}`;
  return this.httpclient.get(API_URL, { headers: this.httpHeaders })
    .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
}
GetBalance(id:any): Observable<any> {
  let API_URL = `${this.URL7}/users/${id}/balance`;
  return this.httpclient.get(API_URL, { headers: this.httpHeaders })
    .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
}

//lire un role
GetRole(id:any): Observable<any> {
  let API_URL = `${this.REST_API}/role/oneRole/${id}`;
  return this.httpclient.get(API_URL, { headers: this.httpHeaders })
    .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
}
//Lire un mail
GetMail(id:any): Observable<any> {
  let API_URL = `${this.REST_API}/mail/oneMail/${id}`;
  return this.httpclient.get(API_URL, { headers: this.httpHeaders })
    .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
}

  //lire une liaison
  GetLiaison(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/oneL/getoneL/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  DetailUser(id:any): Observable<any> {
    let API_URL = `${this.API}/get/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  Lire(id: any): Observable<any> {
    return this.httpclient.get(`${this.URL6}/${id}`);
  }
  GetBook(id:any): Observable<any> {
    let API_URL = `${this.URL6}/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  //lire une maintenance
  
  GetMaintenance(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/maintenance/one/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  GetUserByID(id:any): Observable<any> {
    let API_URL = `${this.API}/get/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  GetAssuranceByID(id:any): Observable<any> {
    let API_URL = `${this.URL3}/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  GetPretByID(id:any): Observable<any> {
    let API_URL = `${this.URL4}/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  GetEpargneByID(id:any): Observable<any> {
    let API_URL = `${this.URL5}/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  //lire un service
  GetService(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/service/oneService/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  //lire un tronçon
  GetTroncon(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/all-troncons/oneTroncon/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  //lire une fibre
  GetFibre(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/all-fibres/oneFibre/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  //lire un lien
  GetLien(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/all-liens/oneLien/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  //modifier un agent
  updateUser(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/modif/update/${id}`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }


  //Mettre à jour un client GTP
  updateUserCopie(id:any, data:any): Observable<any> {
    let API_URL = `${this.API}/${id}/put`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  //Modifier un service
  updateService(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/service/updateService/${id}`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  //Modifier un role
   updateRole(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/role/updateRole/${id}`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  //Modifier un lien
  updateLien(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/all-liens/updateLien/${id}`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  //Modifier un mot de pass
  updatePassword(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/New/updatePassword/${id}`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
//Modifier un messag
updateMessage(id:any, data:any): Observable<any> {
  let API_URL = `${this.REST_API}/message/updateMessage/${id}`;
  return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
}
//Modifier mail
updateMail(id:any, data:any): Observable<any> {
  let API_URL = `${this.REST_API}/mail/updateMail/${id}`;
  return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
}
  //modifier une maintenance
    updateMaintenance(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/maintenance/updateM/${id}`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  //Modifier une liaison
  updateLiaison(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/mettre/ajour/${id}`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  //Modifier un troncon
  updateTroncon(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/all-troncons/updateTroncon/${id}`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  //Modifier une fibre
  updateFibre(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/all-fibres/updateFibre/${id}`;
    return this.httpclient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  //details d'un agent

  detailAgent(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/detail-agent/get/${id}`;
    return this.httpclient.get(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }





   // gestion des erreurs suit au http
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
