import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Customerall } from './customerAll';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url:string="http://localhost:8080/api/orders/customer/";

  private urlCustomer:string= "http://localhost:8080/api/customers/all";
  
  private currentDate = new Date();
  private currentMonthDateBefore = new Date();


  constructor(private http:HttpClient) { }

  // Obtener ordenes por cliente en un rango de fecha
  getOrder(id:number):Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.url + id + "/start-date/"+ this.getMonthBeforeDateString() +"/end-date/" + this.getCurrentDateString());
  }

  // Obtener todos clientes
  getCustomer():Observable<Customerall[]>
  {
    console.log(this.urlCustomer);
    return this.http.get<Customerall[]>(this.urlCustomer);
  }

  getCurrentDateString(): string{
    let day:any = this.currentDate.getDate();
    let month:any = this.currentDate.getMonth() + 1;
    let year:any = this.currentDate.getFullYear();
    let currentDateString: string;
    
    if(day<10){
      day = "0" + day.toString();
    }
    if(month<10){
      month = "0" + month.toString();
    }
    currentDateString = year.toString() + "-" + month + "-" + day;
    return currentDateString;
  }

  getMonthBeforeDateString(): string{
    let day:any = this.currentMonthDateBefore.getDate();
    let month:any = this.currentMonthDateBefore.getMonth();
    let year:any = this.currentMonthDateBefore.getFullYear();
    let currentMonthDateBeforeString: string;
    
    if(day<10){
      day = "0" + day.toString();
    }
    if(month<10){
      month = "0" + month.toString();
    }
    currentMonthDateBeforeString = year.toString() + "-" + month + "-" + day;
    return currentMonthDateBeforeString;
  }

}
