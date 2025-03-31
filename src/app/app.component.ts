import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterComponent } from './master/master.component';

@Component({
  selector: 'app-root',
  imports: [MasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
