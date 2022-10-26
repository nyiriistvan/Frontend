import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urlap';
  word!:string;

  goButton(event: Event, word: string) {
    console.log('Név: ', word);
    console.log(event);
  }
}
