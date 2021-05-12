import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProfessoresComponent } from './pages/list-professores/list-professores.component';
import { CreateProfessorComponent } from './pages/create-professor/create-professor.component';
import { ProfessoresRoutingModule } from './professores-routing.module';
import { CardProfessorComponent } from './components/card-professor/card-professor.component';
import { FormProfessorComponent } from './components/form-professor/form-professor.component';



@NgModule({
  declarations: [
    ListProfessoresComponent,
    CreateProfessorComponent,
    CardProfessorComponent,
    FormProfessorComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule
  ]
})
export class ProfessoresModule { }
