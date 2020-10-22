import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];
  estudiantes: any[] = [];

  cursoSelected: String = "";

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe((res: any) => {
      this.cursos = res;
    })
  }

  selectCurso(curso){

    this.cursoSelected = curso.nombre_curso;

    this.cursosService.getMatricula(curso.codigo_curso).subscribe((res: any) => {
      this.estudiantes = res;
    })
  }

}
