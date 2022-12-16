import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmCreateComponent } from './film-create/film-create.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmService } from './film.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: FilmListComponent
  },
  {
    path: 'create',
    component: FilmCreateComponent
  },
  {
    path: 'edit/:id',
    component: FilmCreateComponent
  },
  {
    path: 'detail/:id',
    component: FilmDetailComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    FilmCreateComponent,
    FilmDetailComponent,
    FilmListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmModule { }
