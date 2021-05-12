import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfessorComponent } from './pages/create-professor/create-professor.component';
import { ListProfessoresComponent } from './pages/list-professores/list-professores.component';

const routes: Routes = [
  { path: '', component: ListProfessoresComponent },
  { path: 'create', component: CreateProfessorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
