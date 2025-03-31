import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';

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

  // new way of inject
  masterService = inject(MasterService);

  // this is dependency injection
  // constructor(masterService:MasterService){

  // }
  roleList: IRole[] = [];
  ngOnInit(): void {
   this.masterService.getRoles().subscribe((res:any) => {
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
