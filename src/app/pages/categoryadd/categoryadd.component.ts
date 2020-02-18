import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudenService } from '../../services/service.index';
import { Studen } from '../../models/studen.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-categoryadd',
  templateUrl: './categoryadd.component.html',
  styles: []
})
export class CategoryaddComponent implements OnInit {
  imagenSubir: File;
  forma: FormGroup;
  fallbackIcon = 'fas fa-user';
  icon: string;
    dropdownList = [];
    typeDocunent = [];
    dropdownSettings = {};
  constructor(public router: Router, public  _studenService: StudenService) { }
  ngOnInit() {
      this.limpiar();  
//
this.dropdownList = [
  {"id":1,"itemName":"CC"},
  {"id":2,"itemName":"TI"},
  
];
this.typeDocunent = [
    {"id":2,"itemName":"Singapore"},
    {"id":3,"itemName":"Australia"},
    {"id":4,"itemName":"Canada"},
    {"id":5,"itemName":"South Korea"}
];
this.dropdownSettings = {
      singleSelection: false,
      text:"Selecione el tipo de Documento",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"myclass custom-class"
    };
//
  }
  limpiar(){
    this.forma = new FormGroup({
      typeDocunent: new FormControl(null, Validators.required),
      cedulaStuden:new FormControl(null, Validators.required),
      nameStuden: new FormControl(null, Validators.required),
      emailStuden: new FormControl(null, Validators.required),
      numCourse: new FormControl(null, Validators.required),
      nameCourse: new FormControl(null, Validators.required),
      observacionStuden: new FormControl(null, Validators.required)
    });
  }
  onItemSelect(item:any){
    console.log(item);
    console.log(this.typeDocunent);
}
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.typeDocunent);
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}
  addCategory() {
    console.log(this.forma.value);

    let StudenResp = new Studen(
      this.forma.value.nameStuden,
      this.forma.value.emailStuden,
      this.forma.value.typeDocunent,
      this.forma.value.cedulaStuden,
      this.forma.value.numCourse,
      this.forma.value.nameCourse,
      this.forma.value.observacionStuden,
    );
    this._studenService.addStuden(StudenResp).subscribe((resp: any) => {
      this.limpiar();
      swal('Exelect', 'Estudiante guardado con exito', 'success');
    });
  }
  fnAumentar(value){
    console.log(value);
  }
}
