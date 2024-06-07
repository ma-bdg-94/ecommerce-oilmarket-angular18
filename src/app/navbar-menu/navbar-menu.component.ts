import { Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  icon: string;
  link?: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: "Home Page", icon: "home" },
  { label: "The Catalog", icon: "shop" },
  { label: "About Us", icon: "business" },
  { label: "Our Partners", icon: "supervisor_account" },
  { label: "Contact Us", icon: "phone" },
];

@Component({
  selector: "navbar-menu",
  standalone: true,
  templateUrl: "./navbar-menu.component.html",
  styleUrl: "./navbar-menu.component.scss",
  imports: [MatIconModule, MatButtonModule, CommonModule],
})
export class NavbarMenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = MENU_ITEMS;
  }
}
