import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '**', redirectTo: 'alunos'},
  { path: 'professores', loadChildren: () => import('src/app/components/professores/professores.module').then(m => m.ProfessoresModule)},
  { path: 'alunos', loadChildren: () => import('src/app/components/alunos/alunos.module').then(m => m.AlunosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
