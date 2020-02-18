import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: any, typePerson?: any): any {
    let url = `${URL_SERVICES}/storage/img/`;
    return 'Funciona osedhelu';
  }

}
