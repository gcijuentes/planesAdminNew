import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[]=[
    {titulo:'Dashboard',
      icono:'mdi mdi-gouge',
      submenu:[
        {titulo:'Main', url:'/'},
        //{titulo:'ProgressBar', url:'progress'},
        //{titulo:'Promesas', url:'promesas'},
        {titulo:'Planes', url:'planes'},
        {titulo:'Usuarios', url:'usuarios'},
      ]

    }
  ];
  constructor() { }
}
