import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map-component.html',
  styleUrls: ['./map-component.css']
})
export class MapComponent {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom: 14,
    center: latLng(18.46993069205838, -69.93949640287083)
  };
}
