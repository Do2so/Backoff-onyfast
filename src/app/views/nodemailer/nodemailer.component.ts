import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nodemailer',
  templateUrl: './nodemailer.component.html',
  styleUrls: ['./nodemailer.component.scss']
})
export class NodemailerComponent {

  to: string = '';
  subject: string = '';
  text: string = '';
  constructor(private http: HttpClient) {}

  sendEmail() {
    const emailData = { to: this.to, subject: this.subject, text: this.text };
    this.http.post<any>('http://localhost:3000/send-email', emailData).subscribe(
      (response) => {
        console.log(response);
        alert('Mail envoyé avec succès')
        // Afficher un message de succès ou effectuer une autre action si nécessaire.
      },
      (error) => {
        console.error(error);
        alert('Mail non envoyé')
        // Afficher un message d'erreur ou effectuer une autre action si nécessaire.
      }
    );
  }
}
