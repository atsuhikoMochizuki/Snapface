import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

const TEXT_BUTTON_FOR_SNAP_EQUALS_0: string = "📸 Snap la photo!";
const TEXT_BUTTON_FOR_SNAP_EQUALS_1: string = 'Oops, unSnap!';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.buttonText = TEXT_BUTTON_FOR_SNAP_EQUALS_0;
    /* this.faceSnap.snaps = 0; */
    const snapId = +this.route.snapshot.params['id'];
    console.log(snapId);
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
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
}
