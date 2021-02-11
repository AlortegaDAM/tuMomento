import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private myCollection:AngularFirestoreCollection<any>;

  constructor(private fire:AngularFirestore) { 
    this.myCollection=fire.collection<any>(environment.productosCollection);
  }

  addProduct(newProduct:Product):Promise<any>{
    return this.myCollection.add(newProduct);
  }
  productById(id:any):Observable<any>{
    return this.myCollection.doc(id).get();
  }
  updateProduct(id:any,newProduct:Product):Promise<void>{
    console.log(newProduct)
    return this.myCollection.doc(id).update({name:newProduct.name});
  }
  deleteProduct(id:any):Promise<void>{
    return this.myCollection.doc(id).delete();
  }
  loadProducts():Observable<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>{
    return this.myCollection.get();
  }
}
