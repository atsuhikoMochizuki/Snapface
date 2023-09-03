import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public mySnap!: FaceSnap ;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      "Gertrude",
      "c'est ma meilleur amie",
      new Date(2023, 0o2, 12), 0, "https://lorem.picsum/500/400"
    );
  }

}
