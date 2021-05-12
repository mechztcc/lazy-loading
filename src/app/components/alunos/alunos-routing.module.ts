import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlunoComponent } from './pages/create-aluno/create-aluno.component';
import { ListAlunosComponent } from './pages/list-alunos/list-alunos.component';

const routes: Routes = [
  { path: '' , component: ListAlunosComponent },
  { path: 'create' , component: CreateAlunoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
