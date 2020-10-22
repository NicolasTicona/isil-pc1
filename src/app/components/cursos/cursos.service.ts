import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  getCursos(){
    const ruta = "http://localhost/colegio/cursos.php"

    return this.http.get(ruta);
  }

  getMatricula(codigoCurso){
    const ruta = "http://localhost/colegio/matricula.php";

    const params = new HttpParams().set("codigoCurso", codigoCurso);

    return this.http.get(ruta, {params});
  }
}
