import { Component,OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './success.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent4 implements OnInit{
 title = 'new app works!';

 constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    const myData = this.route.snapshot.params;
   // name="Yash"
   // console.log( this.route.snapshot.params,"Data from routes---->",myData);
  }
}
