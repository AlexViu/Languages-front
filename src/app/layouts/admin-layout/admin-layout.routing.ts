import { Routes } from '@angular/router';

import { ContainerComponent } from '../../pages/container/container.component';
import { TranslateComponent } from '../../pages/translate/translate.component';
import { LanguageComponent } from '../../pages/language/language.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'container',  component: ContainerComponent },
    { path: 'translate',  component: TranslateComponent },
    { path: 'language',  component: LanguageComponent }
];
