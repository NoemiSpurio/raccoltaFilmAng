import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistaListComponent } from './regista-list/regista-list.component';
import { RegistaCreateComponent } from './regista-create/regista-create.component';
import { FormsModule } from '@angular/forms';
import { RegistaService } from './regista.service';

const routes: Routes = [
  {
    path: 'list',
    component: RegistaListComponent
  },
  {
    path: 'create',
    component: RegistaCreateComponent
  },
  {
    path: 'edit/:id',
    component: RegistaCreateComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    RegistaCreateComponent,
    RegistaListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistaModule { }
