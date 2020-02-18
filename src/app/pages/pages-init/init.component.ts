import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { UserService } from '../../services/service.index';
@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styles: []
})
export class InitPages implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _userService: UserService) { }
  nameUser: string = ".."
  ngOnInit() {
    let url = `assets/css/app.css`;
    this._document.getElementById('styleCambiar').setAttribute('href', url);
  }

}
