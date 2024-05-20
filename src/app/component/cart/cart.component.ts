import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
//   PRODUCTARRAY=[
//   {
//     img:"/src/assets/seeds/grape-seeds.jpeg",
//     amt:400,
//     qnt:1
//   },
//   {
//     img:"/src/assets/seeds/fig.jpeg",
//     amt:400,
//     qnt:1
//   },
//   {
//     img:"/src/assets/seeds/blackpepper.jpeg",
//     amt:400,
//     qnt:1
//   },
//   {
//     img:"/src/assets/seeds/flax.jpg",
//     amt:400,
//     qnt:1
//   },
// ];
}

// cart.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(item: CartItem): void {
    const currentCartItems = this.cartItemsSubject.getValue();
    const existingItem = currentCartItems.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentCartItems.push({ ...item, quantity: 1 });
    }

    this.cartItemsSubject.next([...currentCartItems]);
  }

  removeFromCart(itemId: number): void {
    const currentCartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = currentCartItems.filter((item) => item.id !== itemId);
    this.cartItemsSubject.next([...updatedCartItems]);
  }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.getValue();
  }
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

