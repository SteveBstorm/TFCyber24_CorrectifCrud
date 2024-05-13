import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { UpdateComponent } from './components/update/update.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {path : '', redirectTo : "list", pathMatch : "full"},
  {path : "detail/:id", component : DetailComponent},
  {path : "update/:id", component : UpdateComponent},
  {path : "list", component : ListComponent},
  {path : "create", component : CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
