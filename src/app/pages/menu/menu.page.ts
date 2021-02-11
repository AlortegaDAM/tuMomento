import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public listProducts = [];

  constructor(private activatedRoute: ActivatedRoute,private productsS:ProductsService) {}

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.cargaDatos();
  }

  addProduct(){
    console.log("[ADD] Añadiendo producto");
    let data:Product={
      name:"Alba",
      price:"100000000000000000000002020202021020102102010201021",
      
    }
    this.productsS.addProduct(data);
  }
  public cargaDatos($event=null){
    try {
      this.productsS.loadProducts()
        .subscribe((info:firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
          //Ya ha llegado del servidor

          this.listProducts=[];
          info.forEach((doc)=>{
            let product={
              id:doc.id,
              ...doc.data()
            }
            this.listProducts.push(product);
          });
         // this.listaNotasCriterio=this.listaNotas;
          console.log(this.listProducts);
          if($event){
            $event.target.complete();
          }
        })
    } catch (err) {
      //Error
    }
  }
  addProductOrder(product:Product,quantity:any){
    product.quantity=quantity;
    console.log("Añadiendo producto al carrito"+product.id);
    //TO DO, LLAMAR A LA FUNCION AÑADIR A CARRITO
  }
  productOpinions(id:any){
    console.log("Consultando opiniones del producto...");
    //TO DO, LLAMAR A LA FUNCION DE LAS OPINIONES MULTIMEDIA DEL PRODUCTO
  }
}


