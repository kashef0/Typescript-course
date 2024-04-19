import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  images: { url: string, description: string }[] = [
    { url: "assets/images/image.jpg", description: "En fantastisk vy av solens strålar genom träden." },
    { url: "assets/images/image1.jpg", description: "En imponerande skog och berg i slutet av vägen." },
    { url: "assets/images/image3.jpg", description: "Bilden av en imponerande syn av ett aktivt vulkanutbrott," },
    { url: "assets/images/image2.jpg", description: "En slingrande bergsväg tar dig genom majestätiska bergslandskap med hisnande utsikter." }
  ];
  

}
