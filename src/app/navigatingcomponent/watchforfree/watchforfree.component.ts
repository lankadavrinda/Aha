import { Component } from '@angular/core';
import { WatchforfreeService } from '../services/watchforfree.service';

@Component({
  selector: 'app-watchforfree',
  templateUrl: './watchforfree.component.html',
  styleUrls: ['./watchforfree.component.css']
})
export class WatchforfreeComponent {
  Images:any;
  constructor(private service: WatchforfreeService) { }
  ngOnInit() {
    this.service.onsubmit().subscribe(data=>this.Images=data);
  }

}
