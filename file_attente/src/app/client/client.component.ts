import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  users= [
    { name: 'John Smith', firstName: 'John', email: 'john@example.com', phoneNumber: '123-456-7890', gender: 'Male' },
    { name: 'Alice Johnson', firstName: 'Alice', email: 'alice@example.com', phoneNumber: '987-654-3210', gender: 'Female' },
    { name: 'Bob Davis', firstName: 'Bob', email: 'bob@example.com', phoneNumber: '555-123-4567', gender: 'Male' },
    { name: 'Emily White', firstName: 'Emily', email: 'emily@example.com', phoneNumber: '777-888-9999', gender: 'Female' },
    { name: 'Michael Brown', firstName: 'Michael', email: 'michael@example.com', phoneNumber: '111-222-3333', gender: 'Male' },
    { name: 'Olivia Miller', firstName: 'Olivia', email: 'olivia@example.com', phoneNumber: '444-555-6666', gender: 'Female' },
    { name: 'Daniel Wilson', firstName: 'Daniel', email: 'daniel@example.com', phoneNumber: '999-888-7777', gender: 'Male' },
    { name: 'Sophia Turner', firstName: 'Sophia', email: 'sophia@example.com', phoneNumber: '222-333-4444', gender: 'Female' },
    { name: 'David Harris', firstName: 'David', email: 'david@example.com', phoneNumber: '666-777-8888', gender: 'Male' },
    { name: 'Emma Carter', firstName: 'Emma', email: 'emma@example.com', phoneNumber: '888-999-0000', gender: 'Female' },
  ];


  constructor(private router: Router, private client: ClientService) { }

  reserver() {
    alert("Ticket reserver avec succes");
  }

  Rendez_vous() {
    alert("Rendez_vous pris");
  }

  ngOnInit() {
    this.client.getClients().subscribe((rep: any) => {
      this.users = rep.filter((obj: any) => obj.role === 'user');
    });
  }
}
