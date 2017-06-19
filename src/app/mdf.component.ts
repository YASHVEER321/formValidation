import {Component }from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './mdf.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent3 {
 title = 'new app works!';
 userForm=new FormGroup({
 	name:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(6)]),
 	email:new FormControl(null,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')),
 	company:new FormControl()
 })
onSubmit(){
	console.log("hiiiiiiiiiii",this.userForm.value);
}
}
