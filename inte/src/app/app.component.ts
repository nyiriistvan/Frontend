import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inte';
  mari!:Employee;
  name: string | undefined;
  constructor(){
    this.mari={
      name:"Pere Béla",
      city:"Szeged",
      salary:385

  
    }
  }
  path: string = '../assets/tank.jpeg'
  alttext: string = 'Tank';

  katt():void{
   // alert("Müködik");
   this.name="Tibi"
  }
  selectFruit(event: any) {
    console.log(event.target.value);
  }
}

interface Employee{
  name:string,
  city:string,
  salary:number
}

