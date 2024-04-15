import { Component } from '@angular/core';
@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss'
})
export class NavmenuComponent {
  isNavActive: boolean = false;

  toggleNav(): void {
    this.isNavActive = !this.isNavActive;
  }
}
