import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CartService } from '../cart/cart.component';

//import { EventService } from '../../event.service';
// import {} from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.css'
})
export class SpecialEventsComponent implements OnInit{
  // vegetableItems =[
  //   {
  //     id: "SEE001",
  //     name:"GRAPE SEED",
  //     price:600,
  //   },
  //   {
  //     id: "SEE011",
  //     name:"APRICOT SEED",
  //     price:600,
  //   },
  //   {
  //     id: "SEE101",
  //     name:"CARAWAY SEEDS",
  //     price:600,
  //   },
  //   {
  //     id: "SEE122",
  //     name:"FLAX SEEDS",
  //     price:600,
  //   },
  //   {
  //     id: "SEE231",
  //     name:"PUMPKIN SEEDS",
  //     price:600,
  //   }
  // ];
  public productlist:any;

  constructor(private cart:CartService){ }
  ngOnInit(): void {


      // .subscribe((res: any) => {
      //   this.productlist=res;
      // })

  }
}
