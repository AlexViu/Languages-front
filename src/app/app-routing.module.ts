import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LanguageComponent } from './language/language.component';
import { TranslateComponent } from './translate/translate.component';

const routes: Routes = [
  { path: 'container', component: ContainerComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'translate', component: TranslateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
