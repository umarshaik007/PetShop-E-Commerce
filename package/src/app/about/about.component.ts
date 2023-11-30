import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  val:number = 0;
  get1(){
    if( this.val == 1 ) this.val = 0;
    // document.getElementById("content")?.style.animation = "blinker 1.5s linear infinite";
    // document.getElementById("content").style.animation = "blinker 1.5s linear infinite";
  }
  get2() {
    if( this.val == 0 ) this.val = 1;
  }
}
