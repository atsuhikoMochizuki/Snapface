import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';

const TEXT_BUTTON_FOR_SNAP_EQUALS_0: string = "📸 Snap la photo!";
const TEXT_BUTTON_FOR_SNAP_EQUALS_1: string = "📷 UnSnap la photo!";

// Ce composant permet d'afficher un FaceSnap : un photo partagée et quelques informations la concernant
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;

  buttonText!:string;

 
  ngOnInit(): void {
    this.faceSnap.title = 'Archibald';
    this.faceSnap.description = 'Mon meilleur ami depuis tout petit !';
    this.faceSnap.createdDate = new Date();
    this.faceSnap.snaps = 0;
    this.faceSnap.imageUrl = "https://picsum.photos/600/300";
    this.buttonText = TEXT_BUTTON_FOR_SNAP_EQUALS_0;
  }

  onSnap() {
    if (! this.faceSnap.snaps) {
      this.buttonText = TEXT_BUTTON_FOR_SNAP_EQUALS_1;
      this.faceSnap.snaps = 1;
    }
    else {
      this.buttonText = TEXT_BUTTON_FOR_SNAP_EQUALS_0;
      this.faceSnap.snaps = 0;
      
    }

  }
}
