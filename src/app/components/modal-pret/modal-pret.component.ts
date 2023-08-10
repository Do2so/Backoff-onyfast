import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationsService } from 'src/app/crudservice/operations.service';
import emailjs from '@emailjs/browser'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-pret',
  templateUrl: './modal-pret.component.html',
  styleUrls: ['./modal-pret.component.scss']
})
export class ModalPretComponent implements OnInit{

  getID: any;
  constructor(private crd : OperationsService,
              private activatedroute: ActivatedRoute,
              private fb: FormBuilder)
              {
    this.getID = this.activatedroute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUserID()
  }


  liste : any;
  public getUserID() {
    this.crd.GetUserByID(this.getID).subscribe({
      next:(data:any) => {
        console.log("ID  ",this.getID)
        console.log(data, typeof(data));
        this.liste=data
      },
      error:() =>{
        console.log('erreur');
      }});
  }

  form : FormGroup = this.fb.group({
    from_name: '',
    to_name:'',
    from_email: ['',[Validators.required]],
    subject :'',
    message : ''
  })

  async send(){
    emailjs.init('q4WCV4BOMSPBO1uPf')
    let response = await emailjs.send("service_5hhjfyg","template_7qxs9ld",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject : this.form.value.subject,
      message: this.form.value.messag,
      });
      alert('Mail envoyé')
      this.form.reset()
  }
}
