import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/translate',     title: 'Traducciones',      icon:'nc-world-2',    class: '' },
    { path: '/container',     title: 'Contenedores',      icon:'nc-world-2',    class: '' },
    { path: '/language',      title: 'Idiomas',           icon:'nc-world-2',    class: '' },
    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
