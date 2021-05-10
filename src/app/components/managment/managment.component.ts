import { Component, OnInit } from '@angular/core';
import { UserServicService } from 'src/app/services/user-servic.service';
import interfaceUesr from 'src/app/typs/interfaceUesr';
import { DestanitionServisService } from 'src/app/services/destanition-servis.service';
import { OrderServicService } from 'src/app/services/order-servic.service';
import interfaceOrder from 'src/app/typs/interfaceOrder';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css']
})
export class ManagmentComponent implements OnInit {
user:interfaceUesr={name:"",role:""};
newDestnation:string="";
view:boolean=false;
orderData:interfaceOrder[]=[];
  constructor(private carrentUser:UserServicService,private destenation:DestanitionServisService, private order:OrderServicService) {
    this.user= carrentUser.getUser();

  }


  ngOnInit(): void {
  }
  addDastenaition() {
    if (this.newDestnation) {
     this.destenation.addDestnaition(this.newDestnation)
    }    
    this.newDestnation = '';
  }
  showorder(){
    
  
   
       this.view=!(this.view)

      this.orderData=this.order.getOrder();
     }  
  }



