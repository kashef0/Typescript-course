import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor() {
    this.update_time();

    setInterval(() => {
      this.update_time();
    }, 1000);

  }
  currentTime!: any;
  update_time() {
    this.currentTime =  new Date();
  }


}
