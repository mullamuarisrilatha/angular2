import { Component, OnInit } from '@angular/core';
import { User }        from '../models/index';
import { UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  currentUser: User;
  zoom: number = 5;
  event: string;
  mapHide: boolean = true;
  mapShow: boolean = false;
  map: any;
  lat: number = 17.3460612;
  lng: number = 78.5085392;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    this.mapHide = true;
  }

  ngOnInit() {
    this.togg1();
    this.togg2();
  }

  togg1(){
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([78.5085392, 17.3460612]),
        zoom: 5
      })
    });
}

   togg2(){

    var key = 'ApAiX6oRi3w26IEzUiTBm73OX9oVZ8N84xKf-gWtjGSEEL6VfCDZ-1mi1wp1ywu0';
          var imagery = new ol.layer.Tile({
            source: new ol.source.BingMaps({key: key, imagerySet: 'Aerial'})
          });

          this.map = new ol.Map({
            layers: [imagery],
            target: 'map1',
            view: new ol.View({
              center: ol.proj.fromLonLat([78.5085392,17.3460612 ]),
              zoom: 5
            })
          });

      //   this.map.render();

}
  toggle1() {
    var raster = document.getElementById('myCheck1')['value'];
    var currentvalue = document.getElementById('myCheck')['value'];
if(raster =="off" && currentvalue == "on" ){

  document.getElementById("myCheck")['value']="off";
  document.getElementById('map').style.display = 'block';

}else{
  document.getElementById("myCheck")['value']="on";
  document.getElementById('map').style.display = 'none';
  this.mapHide=false;
}

  }
  toggle2(){

      var tileoff = document.getElementById('myCheck')['value'];
      var currentvalue = document.getElementById('myCheck1')['value'];
        if (tileoff == "on" && currentvalue =="off") {
           this.togg2();
            document.getElementById("myCheck1")['value']="on";
            document.getElementById('map1').style.display = 'block';

        } else {
            document.getElementById("myCheck1")['value']="off";
            document.getElementById('map1').style.display = 'none';

        }

}


}
