import { Component } from '@angular/core';
import { MollywoodmoodsService } from '../service/mollywoodmoods.service';

@Component({
  selector: 'app-mollywoodmood',
  templateUrl: './mollywoodmood.component.html',
  styleUrls: ['./mollywoodmood.component.css']
})
export class MollywoodmoodComponent {
  images:any;
    constructor(private service:MollywoodmoodsService){}
    ngOnInit(){
      this.service.onSubmit().subscribe(data=>this.images=data);
}
}
