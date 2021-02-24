import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferServiceComponent } from '../services/transfer-service.component'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  dates: string[];
  sales: number[];
  salesTax: number[];
  totalSales: number[];
  totalToBe: number[];
  cash: number[];
  credit: number[];
  closingCash: number[];
  columnName: string[];

  totalSales1: number = 0;
  creditCard1: number = 0;
  day1: string = "";
  totalSales2: number = 0;
  creditCard2: number = 0;
  day2: string = "";
  totalSales3: number = 0;
  creditCard3: number = 0;
  day3: string = "";
  totalSales4: number = 0;
  creditCard4: number = 0;
  day4: string = "";
  totalSales5: number = 0;
  creditCard5: number = 0;
  day5: string = "";
  totalSales6: number = 0;
  creditCard6: number = 0;
  day6: string = "";

  constructor(private router: Router, private transfereService:TransferServiceComponent) {
    this.dates = [];
    this.sales = [];
    this.salesTax = [];
    this.totalSales = [];
    this.totalToBe = [];
    this.cash = [];
    this.credit = [];
    this.closingCash = [];
    this.columnName = [];
  }

  ngOnInit(): void {
  }

  submit() {
    let weekSize:number = 0;
    // console.log(this.totalSales1 +" "+ this.creditCard1.toString() +" "+ this.day1.toString());
    if(this.day1.length > 1){
      weekSize++;
      let salesD1 = this.totalSales1 / 1.108;
      let salesTaxD1 = salesD1 * 0.108;
      let toBeAccD1 = this.totalSales1 + 100;
      let cashD1 = this.totalSales1 - this.creditCard1;
      // console.log(salesD1 +" "+ salesTaxD1 +" "+ this.totalSales1 +" "+ toBeAccD1 +" "+ cashD1 +" "+ this.creditCard1);
      this.dates.push(this.day1.toString());
      this.sales.push(Number(salesD1.toFixed(2)));
      this.salesTax.push(Number(salesTaxD1.toFixed(2)));
      this.totalSales.push(Number(this.totalSales1.toFixed(2)));
      this.totalToBe.push(Number(toBeAccD1.toFixed(2)));
      this.cash.push(Number(cashD1.toFixed(2)));
      this.credit.push(Number(this.creditCard1.toFixed(2)));
    }
    // console.log(this.totalSales2 +" "+ this.creditCard2.toString() +" "+ this.day2.toString());
    if(this.day2.length > 1){
      weekSize++;
      let salesD2 = this.totalSales2 / 1.108;
      let salesTaxD2 = salesD2 * 0.108;
      let toBeAccD2 = this.totalSales2 + 100;
      let cashD2 = this.totalSales2 - this.creditCard2;
      // console.log(salesD2 +" "+ salesTaxD2 +" "+ this.totalSales2 +" "+ toBeAccD2 +" "+ cashD2 +" "+ this.creditCard2);
      this.dates.push(this.day2.toString());
      this.sales.push(Number(salesD2.toFixed(2)));
      this.salesTax.push(Number(salesTaxD2.toFixed(2)));
      this.totalSales.push(Number(this.totalSales2.toFixed(2)));
      this.totalToBe.push(Number(toBeAccD2.toFixed(2)));
      this.cash.push(Number(cashD2.toFixed(2)));
      this.credit.push(Number(this.creditCard2.toFixed(2)));
    }
    // console.log(this.totalSales3 +" "+ this.creditCard3.toString() +" "+ this.day3.toString());
    if(this.day3.length > 1){
      weekSize++;
      let salesD3 = this.totalSales3 / 1.108;
      let salesTaxD3 = salesD3 * 0.108;
      let toBeAccD3 = this.totalSales3 + 100;
      let cashD3 = this.totalSales3 - this.creditCard3;
      // console.log(salesD3 +" "+ salesTaxD3 +" "+ this.totalSales3 +" "+ toBeAccD3 +" "+ cashD3 +" "+ this.creditCard3);
      this.dates.push(this.day3.toString());
      this.sales.push(Number(salesD3.toFixed(2)));
      this.salesTax.push(Number(salesTaxD3.toFixed(2)));
      this.totalSales.push(Number(this.totalSales3.toFixed(2)));
      this.totalToBe.push(Number(toBeAccD3.toFixed(2)));
      this.cash.push(Number(cashD3.toFixed(2)));
      this.credit.push(Number(this.creditCard3.toFixed(2)));
    }
    // console.log(this.totalSales4 +" "+ this.creditCard4.toString() +" "+ this.day4.toString());
    if(this.day4.length > 1){
      weekSize++;
      let salesD4 = this.totalSales4 / 1.108;
      let salesTaxD4 = salesD4 * 0.108;
      let toBeAccD4 = this.totalSales4 + 100;
      let cashD4 = this.totalSales4 - this.creditCard4;
      // console.log(salesD4 +" "+ salesTaxD4 +" "+ this.totalSales4 +" "+ toBeAccD4 +" "+ cashD4 +" "+ this.creditCard4);
      this.dates.push(this.day4.toString());
      this.sales.push(Number(salesD4.toFixed(2)));
      this.salesTax.push(Number(salesTaxD4.toFixed(2)));
      this.totalSales.push(Number(this.totalSales4.toFixed(2)));
      this.totalToBe.push(Number(toBeAccD4.toFixed(2)));
      this.cash.push(Number(cashD4.toFixed(2)));
      this.credit.push(Number(this.creditCard4.toFixed(2)));
    }
    // console.log(this.totalSales5 +" "+ this.creditCard5.toString() +" "+ this.day5.toString());
    if(this.day5.length > 1){
      weekSize++;
      let salesD5 = this.totalSales5 / 1.108;
      let salesTaxD5 = salesD5 * 0.108;
      let toBeAccD5 = this.totalSales5 + 100;
      let cashD5 = this.totalSales5 - this.creditCard5;
      // console.log(salesD5 +" "+ salesTaxD5 +" "+ this.totalSales5 +" "+ toBeAccD5 +" "+ cashD5 +" "+ this.creditCard5);
      this.dates.push(this.day5.toString());
      this.sales.push(Number(salesD5.toFixed(2)));
      this.salesTax.push(Number(salesTaxD5.toFixed(2)));
      this.totalSales.push(Number(this.totalSales5.toFixed(2)));
      this.totalToBe.push(Number(toBeAccD5.toFixed(2)));
      this.cash.push(Number(cashD5.toFixed(2)));
      this.credit.push(Number(this.creditCard5.toFixed(2)));
    }
    // console.log(this.totalSales6 +" "+ this.creditCard6.toString() +" "+ this.day6.toString());
    if(this.day6.length > 1){
      weekSize++;
      let salesD6 = this.totalSales6 / 1.108;
      let salesTaxD6 = salesD6 * 0.108;
      let toBeAccD6 = this.totalSales6 + 100;
      let cashD6 = this.totalSales6 - this.creditCard6;
      // console.log(salesD6 +" "+ salesTaxD6 +" "+ this.totalSales6 +" "+ toBeAccD6 +" "+ cashD6 +" "+ this.creditCard6);
      this.dates.push(this.day6.toString());
      this.sales.push(Number(salesD6.toFixed(2)));
      this.salesTax.push(Number(salesTaxD6.toFixed(2)));
      this.totalSales.push(Number(this.totalSales6.toFixed(2)));
      this.totalToBe.push(Number(toBeAccD6.toFixed(2)));
      this.cash.push(Number(cashD6.toFixed(2)));
      this.credit.push(Number(this.creditCard6.toFixed(2)));
    }
    // console.log(weekSize);
    for (let i = 0; i < weekSize; i++) {
      this.closingCash.push(100);
      this.columnName.push("DATE");
    }
    this.columnName.push("TOTAL");

    // send data to a service
    this.transfereService.setData(this.dates, this.sales, this.salesTax, this.totalSales, this.totalToBe, this.cash, this.credit, this.closingCash, this.columnName);

    //  send to new page after submit got clicked
    this.router.navigate(['/', 'result'])
  }

}
