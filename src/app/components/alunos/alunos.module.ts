import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAlunoComponent } from './pages/create-aluno/create-aluno.component';
import { ListAlunosComponent } from './pages/list-alunos/list-alunos.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { CardAlunoComponent } from './components/card-aluno/card-aluno.component';
import { FormCreateComponent } from './components/form-create/form-create.component';



@NgModule({
  declarations: [
    CreateAlunoComponent,
    ListAlunosComponent,
    CardAlunoComponent,
    FormCreateComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ]
})
export class AlunosModule { }
