import { Injectable } from '@angular/core';
import { Delivery } from '../data/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  deliveries:Delivery[];

  constructor() {
    this.deliveries = [];
   }

   public gerDeliveries(){
    return this.deliveries;
   }

   public setNewDelivery(newDelivery:Delivery){//obtener una nueva entrega
    this.deliveries.push(newDelivery);
   };

   public getDeliveriesSize(){
    return this.deliveries.length;
   }
   
}
