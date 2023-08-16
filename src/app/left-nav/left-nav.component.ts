import { Component, OnInit } from '@angular/core';
import { MenuItem } from './_models/menu-item.model';


@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
})
export class LeftNavComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = this.getMenuItems();
  }

  /**
   * Fetch the menu items
   */
  private getMenuItems(): MenuItem[] {
    return [
      { label: 'People API', route: ['people-api'], icon: 'list' },
      { label: 'Booking API', route: ['booking-api'], icon: 'login' },
      { label: 'Web App Info', route: ['web-app-info'], icon: 'info_outline' }
    ]
  }

}
