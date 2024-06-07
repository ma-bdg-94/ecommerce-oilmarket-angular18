import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'navbar-buttons',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './navbar-buttons.component.html',
  styleUrl: './navbar-buttons.component.scss'
})
export class NavbarButtonsComponent {

}
