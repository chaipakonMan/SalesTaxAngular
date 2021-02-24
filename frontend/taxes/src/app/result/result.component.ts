import { Component, OnInit } from '@angular/core';
import { TransferServiceComponent } from '../services/transfer-service.component'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  dates: string[];
  sales: number[];
  salesTax: number[];
  totalSales: number[];
  totalToBe: number[];
  cash: number[];
  credit: number[];
  closingCash: number[];
  columnName: string[];

  closingCashTotal = 0;
  salesTotal = 0;
  salesTaxTotal = 0;
  totalSalesTotal = 0;
  totalToBeTotal = 0;
  cashTotal = 0;
  creditTotal = 0;

  constructor(private transfereService:TransferServiceComponent) { 
    this.dates = transfereService.getDates();
    this.sales = transfereService.getSales();
    this.salesTax = transfereService.getSalesTax();
    this.totalSales = transfereService.getTotalSales();
    this.totalToBe = transfereService.getTotalToBe();
    this.cash = transfereService.getCash();
    this.credit = transfereService.getCredit();
    this.closingCash = transfereService.getClosingCash();
    this.columnName = transfereService.getColumnName();
    
    this.closingCashTotal = Number(this.closingCash.reduce((a, b) => a + b, 0).toFixed(2));
    this.salesTotal = Number(this.sales.reduce((a, b) => a + b, 0).toFixed(2));
    this.salesTaxTotal = Number(this.salesTax.reduce((a, b) => a + b, 0).toFixed(2));
    this.totalSalesTotal = Number(this.totalSales.reduce((a, b) => a + b, 0).toFixed(2));
    this.totalToBeTotal = Number(this.totalToBe.reduce((a, b) => a + b, 0).toFixed(2));
    this.cashTotal = Number(this.cash.reduce((a, b) => a + b, 0).toFixed(2));
    this.creditTotal = Number(this.credit.reduce((a, b) => a + b, 0).toFixed(2));
  }

 
  ngOnInit(): void {
  }

}
