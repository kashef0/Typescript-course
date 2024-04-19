import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss'
})
export class NavmenuComponent {
  isNavActive: boolean = false;

  toggleNav(): void {
    this.isNavActive = !this.isNavActive;
  }

}
