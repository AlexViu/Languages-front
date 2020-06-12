import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  { path: 'languages', component: LanguagesComponent },
  { path: 'containers', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
