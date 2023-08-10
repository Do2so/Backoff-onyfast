import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AbonnesService } from 'src/app/services/abonnes.service';
import { PaiementsService } from 'src/app/services/paiements.service';
//uimport { Container, Main } from 'tsparticles';

interface IntervalleDate {
  first: string,
  last: string
}

@Component({
  selector: 'app-paiements',
  templateUrl: './paiements.component.html',
  styleUrls: ['./paiements.component.scss']
})
export class PaiementsComponent implements OnInit {

  public _filtrePaiements = '';
  public paiements: any = [];
  public paiementsFiltres: any[] = []
  public intermediaire: any[] = []

  public errorMsg = {
    status: false,
    message: 'Erreur Inconue'
  }
  public showSpinner = true
  public intervalleDate: IntervalleDate = {
    first: '',
    last : ''
  }
  public defaultIntervalleDate: IntervalleDate = {
    first: '',
    last : ''
  }
  constructor( private paiementsService: PaiementsService ) { }

  ngOnInit(): void {
    //this.loadAllPayements()
  }

  private loadAllPayements () {
    let self = this;
    this.paiementsService.getAllPaiements().subscribe({
      next: paiement => {
        console.log('[TYPEOF PAIEMENT ON LOADING] => ', paiement, typeof(paiement));
        for (let i = 0; i < paiement.length; i++ ) {
          paiement[i].montantpayer = paiement[i].montantpayer + ' FCFA'

          //Status
          if  (paiement[i].status === 'pay\u00e9') {
            paiement[i].status = 'Réussi'
          } else {
            paiement[i].status = 'Échoué'
          }

          //Ville
          switch(paiement[i].ville) {
            case 'BZV': paiement[i].ville = 'BRAZZAVILLE'; break;
            case 'PNR': paiement[i].ville = 'POINTE-NOIRE'; break;
            default: break;
          }

          //Date

          var date = paiement[i].createdAt.slice(0, 10).split('-').reverse().join('-')
          var heure = paiement[i].createdAt.slice(11, 19)
          paiement[i].createdAt = date + ' ' + heure

          if (i === 0) {
            this.defaultIntervalleDate.first = date
          } else if (i === (paiement.length - 1)) {
            this.defaultIntervalleDate.last = date
          }

          this.paiements.push(paiement[i])
        }

        this.paiementsFiltres = this.paiements.reverse()
        this.showSpinner = false
      },

      error: err => {
        console.log('[ERROR RETURNED] => ', err)
        self.errorMsg.status = true
        self.errorMsg.message = err.statusText + '\n Problème de connexion au serveur\n Veuillez vérifier votre connexion internet!'

        this.showSpinner = false
      }



    })

  }



  get filtrePaiement (): string {

    return this._filtrePaiements;

  }

  public choixRecherche: '1' | '2' | '3' = '1'


  //Centre

  public showFilter: boolean = false

  val : 'add' | 'expand_more' = 'expand_more'



  //Paiement

  criterePaiement:  'all' | 'ofToDay' =  'all';


  //Status

  critereStatus: 'all' | 'succes' | 'failure' = 'all';


  //Date
  public paymentsOfDay = true


  //- End Range Date Filter



  set filtrePaiement(filtre: string) {

    this._filtrePaiements = filtre

    if(this._filtrePaiements) {

      switch (this.choixRecherche) {

        case '1': this.paiementsFiltres = this.filtreIdAbonnes(this._filtrePaiements);  break;
        case '2': this.paiementsFiltres = this.filtreNumBranch(this._filtrePaiements); break;
        case '3': this.paiementsFiltres = this.filtreRefPayment(this._filtrePaiements); break;
        default: break;

      }

    } else {

      this.paiementsFiltres = this.intermediaire

    }

  }

  private filtreIdAbonnes(critere: string): any[] {

    critere = critere.toLocaleLowerCase()

    const resultat = this.paiementsFiltres.filter(

      (data: any) => data.numc.toLocaleLowerCase().indexOf(critere) !== -1

    )

    return resultat;

  }

  private filtreNumBranch (critere: string): any [] {

    console.log('[RECHERCHE] => ', this.paiements);
    console.log('[RECHERCHE FILTRE] => ', this.paiementsFiltres);


    return this.paiements.filter(
      (data: any) => data.NumBranchement.indexOf(critere) !== -1
    )



  }

  private filtreRefPayment (critere: string): any [] {

    return this.paiementsFiltres.filter(
      (data: any) => data.refpaiement.indexOf(critere) !== -1
    )

  }

  private filtreDate () {

    this.paiementsFiltres = this.paiements

    if ( this.intervalleDate.first && this.intervalleDate.last ) {

      const first = this.formatDateGMTToCommonFormat(new Date(this.intervalleDate.first))

      this.defaultIntervalleDate.first = first

      const last = this.formatDateGMTToCommonFormat(new Date(this.intervalleDate.last))

      this.defaultIntervalleDate.last = last


      var listPaiements:any  = []

      for ( let i = 0; i < this.paiementsFiltres.length; i++ ) {

        if ( this.paiementsFiltres[i].createdAt.slice(0, 10).split('-').reverse().join('-') >= first.split('-').reverse().join('-') &&
        this.paiementsFiltres[i].createdAt.slice(0, 10).split('-').reverse().join('-') <= last.split('-').reverse().join('-') ) {

          listPaiements.push(this.paiementsFiltres[i])

        }

      }

      this.paiementsFiltres = listPaiements

      this.intermediaire = listPaiements

    }

  }

  private formatDateGMTToCommonFormat ( date: Date ): any {

    return String(((date.getDate() <= 9)? '0' + date.getDate(): date.getDate()) + '-' + ((( date.getMonth() + 1 ) <= 9)? '0' + ( date.getMonth() + 1 ): ( date.getMonth() + 1 )) + '-' + date.getFullYear())

  }

  public filtreStatus () {

    var listPaiements:any  = []

    if (this.critereStatus == 'succes')  {

      for ( let i = 0; i < this.paiementsFiltres.length; i++ ) {

        if ( this.paiementsFiltres[i].status == 'Réussi' ) {

          listPaiements.push(this.paiementsFiltres[i])

        }

      }

      this.paiementsFiltres = listPaiements

    } else if (this.critereStatus == 'failure'){

      for ( let i = 0; i < this.paiementsFiltres.length; i++ ) {

        if ( this.paiementsFiltres[i].status == 'Échoué' ) {

          listPaiements.push(this.paiementsFiltres[i])

        }

      }

      this.paiementsFiltres = listPaiements

      if ( listPaiements.length > 0 )
        this.intermediaire = listPaiements;

    }

  }


  public applicateFilter() {

    //Verifier si l'historique des paiement ou les paiements du jour est selectionne

    this.intermediaire = this.paiementsFiltres

    if ( this.criterePaiement === 'ofToDay' ) {

      const dateOfToday = new Date().toISOString().slice(0, 10).split('-').reverse().join('-')

      alert('Vous avez choisis les paiements du jour: ' + dateOfToday)

      var listPaiements:any  = []

      for ( let i = 0; i < this.paiementsFiltres.length; i++ ) {

        if (this.paiementsFiltres[i].createdAt.slice(0, 10).split('-').reverse().join('-') == dateOfToday) {

          listPaiements.push(this.paiementsFiltres[i])

        }

      }

      this.paiementsFiltres = listPaiements

      if ( listPaiements.length > 0 )
        this.intermediaire = listPaiements;

    } else {

    //Appliquer filtre de la date
      this.filtreDate()

    }

    this.filtreStatus()

    //On applique le filtre en fonction de ce qui est inscrit dans la varre de recherche

    if(this._filtrePaiements) {

      switch (this.choixRecherche) {

        case '1': this.paiementsFiltres = this.filtreIdAbonnes(this._filtrePaiements);  break;
        case '2': this.paiementsFiltres = this.filtreNumBranch(this._filtrePaiements); break;
        case '3': this.paiementsFiltres = this.filtreRefPayment(this._filtrePaiements); break;
        default: break;

      }

    }

    //Fin

    this.showFilter = false

  }

  public toggleFilter() {

    this.showFilter = !this.showFilter

    this.val = 'add'

    if( this.showFilter ) {

      this.val = 'expand_more'

    } else{
      this.val = 'add'
    }

  }

  public showAllPaiement () {
    console.log('[ALL PAIEMENTS] => ', this.paiements);
    this.paiementsFiltres = this.paiements
  }

  showIntermediaryFilter() {
    console.log('[INTERMEDIARY PAIEMENTS LIST] => ', this.intermediaire);
  }

}
//    ^
// <     >
//    v
