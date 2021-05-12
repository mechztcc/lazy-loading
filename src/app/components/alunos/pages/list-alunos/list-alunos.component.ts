import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.sass']
})
export class ListAlunosComponent implements OnInit {

  alunos: number[] = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit(): void {
  }

}
