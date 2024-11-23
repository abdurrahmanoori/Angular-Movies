import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Layer, tileLayer } from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'; // Correct ngx-leaflet library
import { Coordinate } from './Coordinate.models';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map-component.html',
  styleUrls: ['./map-component.css']
})
export class MapComponent implements OnInit {


  @Input()
  initialCoordinate: Coordinate[] = [];

  @Output()
  coordinateSelected = new EventEmitter<Coordinate>();

  ngOnInit(): void {
    this.layers = this.initialCoordinate.map(value => {
      return marker([value.latitude, value.longitude], this.markerOptions);
    })
  }

  markerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
      })
    ],
    zoom: 14,
    center: latLng(18.46993069205838, -69.93949640287083)
  };

  // Change the type of `layers` to `Layer[]`
  layers: Layer[] = [];

  handleClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;

    console.log({ latitude, longitude });

    // Clear existing layers and add the new marker
    // this.layers = [
    //   marker([latitude, longitude], this.markkerOptions)
    // ];

    this.layers = [];
    this.layers.push(marker([latitude, longitude], this.markerOptions));

    this.coordinateSelected.emit({ longitude, latitude });

    // const coord: Coordinate = {
    //   latitude: 10,
    //   longitude: 10
    // };

    // this.coordinateSelected.emit(coord);
  }
}
