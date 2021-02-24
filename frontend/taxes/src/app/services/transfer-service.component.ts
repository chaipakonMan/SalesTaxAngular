import { Injectable } from '@angular/core';

@Injectable()
export class TransferServiceComponent {

  private dates: string[];
  private sales: number[];
  private salesTax: number[];
  private totalSales: number[];
  private totalToBe: number[];
  private cash: number[];
  private credit: number[];
  private closingCash: number[];
  private columnName: string[];

  constructor() { 
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

  setData(dates: string[], sales:number[], salesTax:number[], totalSales:number[], totalToBe:number[], cash:number[], credit:number[], closingCash:number[], columnName:string[]){
    this.dates = dates;
    this.sales = sales;
    this.salesTax = salesTax;
    this.totalSales = totalSales;
    this.totalToBe = totalToBe;
    this.cash = cash;
    this.credit = credit;
    this.closingCash = closingCash;
    this.columnName = columnName;
  }

  getDates(){
    return this.dates;
  }
  getSales(){
    return this.sales;
  }
  getSalesTax(){
    return this.salesTax;
  }
  getTotalSales(){
    return this.totalSales;
  }
  getTotalToBe(){
    return this.totalToBe;
  }
  getCash(){
    return this.cash;
  }
  getCredit(){
    return this.credit;
  }
  getClosingCash(){
    return this.closingCash;
  }
  getColumnName(){
    return this.columnName;
  }

}
