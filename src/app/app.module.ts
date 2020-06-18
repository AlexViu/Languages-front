import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ContainerComponent } from './pages/container/container.component';
import { LanguageComponent } from './pages/language/language.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { ModalLanguageComponent } from './pages/language/modal-language/modal-language.component';
import { ModalContainerComponent } from './pages/container/modal-container/modal-container.component';
import { ModalTranslateComponent } from './pages/translate/modal-translate/modal-translate.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableLanguageComponent } from './pages/language/table-language/table-language.component';
import {MatCardModule} from '@angular/material/card';

 
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ContainerComponent,
    LanguageComponent,
    TranslateComponent,
    ModalLanguageComponent,
    ModalContainerComponent,
    ModalTranslateComponent,
    TableLanguageComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
