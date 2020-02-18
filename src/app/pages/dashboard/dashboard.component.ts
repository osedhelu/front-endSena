import { Component, OnInit } from '@angular/core';
import {chart} from 'chart.js';
import { UserService } from '../../services/service.index';
import {Usuarios} from '../../models/user.model'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  studen = [];
  teacher = [];
  users = [];
  lineChartLabels = ['enero','febrero','junio','julio'];
  lineChartData = [{data:[40,20,30,10], label:'test'},{data:[4,100,70,60], label:'teacher'}];
  constructor(public _serviceUSers: UserService) { }

  ngOnInit() {
    this._serviceUSers.cargarUsuarios().subscribe((resp: any)=>{
      this.users = resp.data;
    })

    // this._serviceUSers.cargarTeacher().subscribe((resp: any) =>{
    //   this.teacher = resp.data;
    // });
    // this._serviceUSers.cargarStudent().subscribe((resp: any) =>{
    //   this.studen = resp.data;
    // });
  }

}
