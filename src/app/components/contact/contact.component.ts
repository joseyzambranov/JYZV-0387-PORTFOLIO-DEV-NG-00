import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NetlifyFormsService } from 'src/app/services/netlify-forms.service';
import { Feedback } from './inferface/feedback';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: any;
  email: any;
  project: any;
  message: any;
  loading: boolean | undefined;
  emailSent: boolean | undefined;
  emailFailed: boolean | undefined;

  constructor(private netlifyForms: NetlifyFormsService) {

    this.loading = false;
    this.emailSent = false;
    this.emailFailed = false;

  }

private formStatusSub: Subscription | undefined;

sendContact(contactForm: NgForm) {
    if (
      contactForm.invalid
    ) {
      return;
    }

    const data = {
      name: this.name,
      email: this.email,
      project: this.project,
      message: this.message,
    };

    const entry = {
      ...data,
    } as Feedback;

    this.formStatusSub = this.netlifyForms.submitFeedback(entry).subscribe(
      (res) => {
        this.loading = false;
        this.emailSent = true;
        setTimeout(() => {
          this.emailSent = false;
        }, 10000);
        contactForm.resetForm();
        Swal.fire({
          title: 'Éxito',
          text: 'El formulario se envió con éxito',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      },
      (err) => {
        this.loading = false;
        this.emailFailed = true;
        setTimeout(() => {
          this.emailFailed = false;
        }, 10000);
        Swal.fire({
          title: 'Error',
          text: 'Oops! Algo salió mal. Por favor, inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }

 ngOnDestroy() {
   this.formStatusSub ? this.formStatusSub.unsubscribe() : null;
 }

}
