import { Component, OnInit, Output } from '@angular/core';

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
  user:any = {}
  ngOnInit(): void {
    this.mainViwe;
    this.user.sex = "นาย";
    this.user.name = "สุริยา พุฒดวง"
    this.user.company = "Sinovac"
    this.user.vccLot = "1/2564"
    this.user.serialNo = "SNV-000001"
    this.user.vccDate = "1 กรกฎาคม 2564"
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
