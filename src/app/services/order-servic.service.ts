import { Injectable } from '@angular/core';
import { UserServicService } from './user-servic.service';
import interfaceOrder from '../typs/interfaceOrder';
const orders = [{
  name: 'dany',
  numFlight: '546367',
},{
  name: 'fany',
  numFlight: '456467',
}
];
@Injectable({
  providedIn: 'root'
})
export class OrderServicService {
private order=orders;


  constructor(private user:UserServicService) { 

  }
getOrder():any{
    if(this.user.getUser().role==='agent')
    return this.order;
  }

}
