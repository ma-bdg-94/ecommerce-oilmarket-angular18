import { Component } from '@angular/core';
import { NavbarMenuComponent } from '../navbar-menu/navbar-menu.component';
import { NavbarButtonsComponent } from '../navbar-buttons/navbar-buttons.component';


@Component({
  selector: 'navbar',
  standalone: true,
  imports: [NavbarMenuComponent, NavbarButtonsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
