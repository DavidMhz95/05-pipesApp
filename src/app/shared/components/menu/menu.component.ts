import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  public menuItems: MenuItem[] | undefined;



  ngOnInit() {
      this.menuItems = [
         {
          label: 'Pipes from Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Text and Dates',
              icon: 'pi pi-align-left',
              routerLink:'/'
            },
            {
              label: 'Numbers',
              icon: 'pi pi-dollar',
              routerLink:'numbers'
            },
            {
              label: 'Not commons',
              icon: 'pi pi-globe',
              routerLink:'uncommon'
            },
          ]
         },
         {
          label: 'Pipes custom',
          icon: 'pi pi-cog',
          items:[
            {
              label: 'Other',
              icon: 'pi pi-cog'
            }
          ]
         }
      ];
  }
}
