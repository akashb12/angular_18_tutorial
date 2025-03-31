import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName:string = 'akash';
  age:number = 28;
  currentDate:Date = new Date();
}
