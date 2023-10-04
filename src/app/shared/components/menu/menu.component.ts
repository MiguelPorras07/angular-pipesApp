import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-fw pi-desktop',
              items: [
                  {
                      label: 'Textos y Fechas',
                      icon: 'pi pi-fw pi-align-justify',
                      routerLink: '/'
                  },
                  {
                      label: 'Números',
                      icon: 'pi pi-fw pi-dollar',
                      routerLink: 'numbers'
                  },
                  {
                      label: 'No comunes',
                      icon: 'pi pi-fw pi-globe',
                      routerLink: 'uncommon'
                  }
              ]
          },
          {
              label: 'Pipes Personalizados',
              icon: 'pi pi-fw pi-cog',
              items: [
                  {
                      label: 'Custom pipes',
                      icon: 'pi pi-fw pi-cog',
                      routerLink: 'custom'
                  },
              ]
          },
        ];



        // [
        //     {
        //         label: 'Pipes de Angular',
        //         icon: 'pi pi-desktop',
        //         items: [
        //           {
        //             label: 'Textos y Fechas',
        //             icon: 'pi pi-align-justify',
        //           },
        //           {
        //             label: 'Números',
        //             icon: 'pi pi-dollar',
        //           },
        //           {
        //             label: 'No comunes',
        //             icon: 'pi pi-globe',
        //           }
        //         ]
        //     },
        //     {
        //         label: 'Pipes personalizados',
        //         icon: 'pi pi-cog',
        //         items: [
        //           {
        //             label: 'Otro elemento',
        //             icon: 'pi pi-cog',
        //           }
        //       ]
        //     }
        // ];
      }
}
