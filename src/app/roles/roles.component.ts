import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  // firstName:string = 'akash';
  // age:number = 28;
  // currentDate:Date = new Date();
  roleList: IRole[] = [];
  http = inject(HttpClient)
  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles() {
    this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res: any) => {
      this.roleList = res.data
    })
  }

  // showWelcomeMessage() {
  //   alert("welcome to angular 18 tutorial")
  // }
  // showAlertMessage(message:string) {
  //   alert(message)
  // }
}
