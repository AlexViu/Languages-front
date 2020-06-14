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




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ContainerComponent,
    LanguageComponent,
    TranslateComponent,
    ModalLanguageComponent,


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
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
