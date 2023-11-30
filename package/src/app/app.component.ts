import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetShop';
  valid = ""
  username:String = ""
  password:String = ""

  default() {
    if( ( this.username == "abc" ) && ( this.password == "xyz" ) )
      this.valid = "valid";
  }

  data = ["Hai","Hello","Welcome","Good to see You","Nice to meet you"]
  
}
