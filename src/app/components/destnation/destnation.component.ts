import { Component, OnInit } from '@angular/core';
import { DestanitionServisService } from 'src/app/services/destanition-servis.service';

@Component({
  selector: 'app-destnation',
  templateUrl: './destnation.component.html',
  styleUrls: ['./destnation.component.css']
})
export class DestnationComponent implements OnInit {
data:string[];
number: number=30;
code:string="efrat";
date = new Date();
constructor(private d:DestanitionServisService) {
console.log("hjfyruy67r");
this.data=d.getDestnaition();
console.log(this.data+"fgsdtrs");

 }

  
  ngOnInit(): void {
  }

}
