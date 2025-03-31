import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName:string = 'akash';
  age:number = 28;
  currentDate:Date = new Date();

  showWelcomeMessage() {
    alert("welcome to angular 18 tutorial")
  }
  showAlertMessage(message:string) {
    alert(message)
  }
}
