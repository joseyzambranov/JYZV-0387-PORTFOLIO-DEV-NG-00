import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NetlifyFormsService } from 'src/app/services/netlify-forms.service';
import { Feedback } from './inferface/feedback';

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

  constructor(private netlifyForms: NetlifyFormsService) {}

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
      },
      (err) => {
        this.loading = false;
        this.emailFailed = true;
        setTimeout(() => {
          this.emailFailed = false;
        }, 10000);
      }
    );
  }

 ngOnDestroy() {
   this.formStatusSub ? this.formStatusSub.unsubscribe() : null;
 }

}
