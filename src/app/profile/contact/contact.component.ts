import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model: any = {};

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }

  onSubmit(name: any, subject: any, email: any, message: any): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mleozvnz',
      { name, subject, replyto: email, message },
      // tslint:disable-next-line: deprecation
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }
}
