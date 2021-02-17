import { Component, ElementRef, OnInit, Renderer2, ViewChild  } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { Customerall } from './customerAll';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  customers: Customer[] = [];
  customerall: Customerall[] = [];
  option: number  = 1;

  

  constructor(private customerService:CustomerService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.customerService.getOrder(this.option).subscribe(c => this.customers = c);
    this.customerService.getCustomer().subscribe(cs => this.customerall = cs);
    
  }

  updateSelect() {
    var id: number = +this.option;
    this.customerService.getOrder(id).subscribe(c => this.customers = c);
  }

}
