import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-professores',
  templateUrl: './list-professores.component.html',
  styleUrls: ['./list-professores.component.sass']
})
export class ListProfessoresComponent implements OnInit {

  professores: number[] = [1,2,3,4]

  constructor() { }

  ngOnInit(): void {
  }

}
