import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class ArchivosService {

  constructor() { }
  sublirArchivo( archivo: File, tipeArchive:string, id:string ){
    return new Promise((resolve, reject) =>{
      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      formData.append('imagen', archivo, archivo.name);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status == 200){
            console.log('Se sublio la imagen ');
            resolve(xhr.response)

          }else{
            console.log('Fallo la subida de imagens');

            reject(xhr.response);
          }
        }
      }
      let url = `${URL_SERVICES}/`;
    })

  }
}
