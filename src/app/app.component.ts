import { Component } from '@angular/core';
import { Webside } from './interfaces/webside';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  ///////////////
  // Variabels //
  ///////////////
  public title: string = 'Web Design Guide'
  
  public websides: Webside[] = [

    {name:'Halide', link: 'https://halide.cam'}

  ]

  ///////////////
  // Functions //
  ///////////////
  public openPage(url: string): void {
    console.log('Hello')
    window.location.href = url

  }
}
