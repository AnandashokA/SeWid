// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   // private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
//   // cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

//   constructor(private http:HttpClient) { }
//   getProduct(){
//     return this.http.get<any>("https://fakestoreapi.com/products")
//     .pipe(map((res:any)=>{
//       return res;
//     }))
//   }
// //   addToCart(item: CartItem): void {
// //     const currentCartItems = this.cartItemsSubject.getValue();
// //     const existingItem = currentCartItems.find((i) => i.id === item.id);
// //     if (existingItem) {
// //       existingItem.quantity++;
// //     } else {
// //       currentCartItems.push({ ...item, quantity: 1 });
// //     }

// //     this.cartItemsSubject.next([...currentCartItems]);
// //   }
// //   removeFromCart(itemId: number): void {
// //     const currentCartItems = this.cartItemsSubject.getValue();
// //     const updatedCartItems = currentCartItems.filter((item) => item.id !== itemId);
// //     this.cartItemsSubject.next([...updatedCartItems]);
// //   }

// //   getCartItems(): CartItem[] {
// //     return this.cartItemsSubject.getValue();
// //   }
// // }

// // export interface CartItem {
// //   id: number;
// //   name: string;
// //   price: number;
// //   quantity: number;
// }


// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<string[]>([]);
  cartItems$: Observable<string[]> = this.cartItemsSubject.asObservable();

  addToCart(item: string): void {
    const currentCart = this.cartItemsSubject.value;
    const updatedCart = [...currentCart, item];
    this.cartItemsSubject.next(updatedCart);
  }
}
