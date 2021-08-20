import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private selectedSegment: string = 'lojas';

  constructor() {}

  ngOnInit(){
  }

  segmentChanged(event: any){
    const valorSegmento = event.detail.value;
    this.selectedSegment = event.target.value;
    console.log(valorSegmento);
  }

}
