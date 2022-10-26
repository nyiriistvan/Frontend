import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'obi';
  
  dolgozo = {
    name: 'Pali Márton',
    city: 'Szeged',
    salary: 385
  }
}
