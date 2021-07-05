import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lampang prom';

  faCoffee = faCoffee;

  testClick(){
    console.log('test success')
  }
  testNumberChange(value:any){
    console.log('test',value)
  }
}
