import { Component, OnInit } from '@angular/core';
import { StudenService } from '../../services/service.index';
import { Studen } from '../../models/studen.model';
// import swal from 'sweetalert';
declare var swal: any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {
  studen = [];
  desde: number = 0;
  totalRegistros: number = 0;

  constructor(public _studemServices: StudenService) { }

  ngOnInit() {
    this.cargarstuden();
  }
  cargarstuden() {
    this._studemServices.listStuden(this.desde).subscribe((resp: any ) => {
      this.studen = resp.data;
      this.totalRegistros = resp.total;
    });
  }
  editstuden(id: number) {
    console.log(id);

  }

  deletestuden(id: number) {
    swal({
      title: 'Are you sure',
      text: '______',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((resp) => {
      console.log(resp);

      if (resp) {
        this._studemServices.deletestuden(id).subscribe(respI => {
          console.log(respI);
          this.cargarstuden();
        });
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  fnAumentar(value: number) {
    let desde = this.desde + value;
    if (desde >= this.totalRegistros) {
        return;
    }
    if (desde < 0) {
      return;
    }
    console.log(desde);
    this.desde += value;
    this.cargarstuden();
  }
}
