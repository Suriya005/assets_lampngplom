import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent implements OnInit {
  constructor() {}
  mainViwe: boolean = true;
  kem: boolean = false;
  kemMe: any = 1;
  ngOnInit(): void {
    this.mainViwe;
  }

  openKem1 = () => {
    this.mainViwe = false;
    this.kem = true;
    this.kemMe = 1;
  };
  openKem2 = () => {
    this.mainViwe = false;
    this.kem = true;
    this.kemMe = 2;
  };
  backMain = () => {
    this.mainViwe = true;
    this.kem = false;
  };
  backMainCancel = () =>{
    this.mainViwe = true;
    this.kem = false;
  }
}
