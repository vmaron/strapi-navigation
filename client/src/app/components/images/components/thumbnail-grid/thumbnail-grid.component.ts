import {Component, Input, OnInit} from '@angular/core';
import {ImageDTO} from "../../../../../core/navigation/navigation.model";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-thumbnail-grid',
  templateUrl: './thumbnail-grid.component.html',
  styleUrls: ['./thumbnail-grid.component.scss']
})
export class ThumbnailGridComponent implements OnInit {

  @Input() thumbnails: ImageDTO[] = [];
  host: string;


  constructor() {
    this.host = environment.host;
  }

  ngOnInit(): void {
  }

}
