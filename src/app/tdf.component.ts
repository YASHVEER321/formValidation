import { Component ,OnInit} from '@angular/core';
//import {Router, ROUTER_PROVIDERS} from '@angular/router'
//import {Routes,RouterModule} from '@angular/router'

import { FormsModule } from '@angular/forms';
import {Router,RouterModule} from '@angular/router'
//import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './tdf.component.html',
  styleUrls: ['./app.component.css'],
     providers: [RouterModule]
})
export class AppComponent2 {
 title = 'new app works!';
 // public user: User;
onSubmit(value:any){
console.log("hiiiiiiiiiii",value);
       // this.router.navigate(['success',{named:"yash"}]);
}

/*	 ngOnInit() {
        this.user={name:"Yash",
       // email:"yash@gmail.com"
       }
    }

*/ // constructor(private router: Router) { }
  //----------------
 
   
}
