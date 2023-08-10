interface IPaiement {
  refAbonne: string,
  nCli: string,
  mode: 'airtel' | 'mtn' | 'visa',
  idTransact: string,
  status: 'réussie' | 'échoué',
  msisdn: '053822611' | 'nul',
  date: string,
  montant: number,
  devise: 'FCFA'
}

export class Client {

  constructor () {}

  private nCli!: string

  private typeClient!: 'BT'| 'MT'| 'HT'

  private refAbonne!: string

  private tel!: string

  private email!: string

}


export  class Facture {

  constructor () {}

}
