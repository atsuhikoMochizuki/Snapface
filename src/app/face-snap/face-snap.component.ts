import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

const TEXT_BUTTON_FOR_SNAP_EQUALS_0: string = "📸 Snap la photo!";
const TEXT_BUTTON_FOR_SNAP_EQUALS_1: string = 'Oops, unSnap!';

// Ce composant permet d'afficher un FaceSnap : un photo partagée et quelques informations la concernant
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
    private router: Router) {}

  ngOnInit(): void {
    this.buttonText = TEXT_BUTTON_FOR_SNAP_EQUALS_0;
    this.faceSnap.snaps = 0;
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unSnap');
      this.buttonText = 'Oh Snap!';
    }

  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
}
