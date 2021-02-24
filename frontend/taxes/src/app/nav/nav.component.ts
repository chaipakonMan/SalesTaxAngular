import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goWork(){ 
    this.router.navigate(['/', 'work'])
    // good debugging way
    // .then(nav => {
    //   console.log(nav); 
    // }, err => {
    //   console.log(err) 
    // });
  } 

}
