import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  year!: number;
  hour!: string;
  minute!: string;
  second!: string;

  constructor() {
    this.update_time();

    setInterval(() => {
      this.update_time();
    }, 1000);

  }

  update_time() {
    this.year = new Date().getFullYear();
    const currentTime =  new Date();
    this.hour = this.addZero(currentTime.getHours());
    this.minute = this.addZero(currentTime.getMinutes());
    this.second = this.addZero(currentTime.getSeconds());
  }

  public addZero(number: number): string {
    return number < 10 ? "0" + number: "" + number;
  }
}
