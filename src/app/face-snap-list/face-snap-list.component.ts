import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  /*Pour pouvoir utiliser un service dans un component, il faut utiliser le système 
  d'injection de dépendances (dependency injection ou DI) que vous fournit Angular.
  C'est très simple : vous passez un argument du type du service au constructor du 
  component, et Angular vous mettra à disposition la bonne instance du service.
  Nota : On préfère généralement  private  pour les injections de service, 
  car ça empêche le template du component d'y accéder directement. 
  Donner au template accès aux injections serait un anti-pattern Angular – autrement dit,
   une approche plus que déconseillée, souvent pour des raisons qui ne sont 
   pas flagrantes au premier abord.*/
  constructor(private faceSnapsService: FaceSnapsService) {

  }
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    
  }
}