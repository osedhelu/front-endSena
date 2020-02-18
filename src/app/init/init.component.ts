import { Component, OnInit } from '@angular/core';
declare function init();
@Component({
  selector: 'app-root',
  templateUrl: './init.component.html',
  styles: []
})
export class InitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init();
  }

}
