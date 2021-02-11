import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private myCollection:AngularFirestoreCollection<any>;

  constructor(private fire:AngularFirestore) { 
    this.myCollection=fire.collection<any>(environment.usuariosCollection);
  }

  addUser(newUser:User):Promise<any>{
    return this.myCollection.add(newUser);
  }
  userById(id:any):Observable<any>{
    return this.myCollection.doc(id).get();
  }
  updateUser(id:any,newUser:User):Promise<void>{
    console.log(newUser)
    return this.myCollection.doc(id).update({name:newUser.name,avatar:newUser.avatar});
  }
  deleteUser(id:any):Promise<void>{
    return this.myCollection.doc(id).delete();
  }
  //FIN CRUD BASICO
  /*leeNotasPorCriterio(titulo:string):Observable<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>>{
    return this.myCollection.doc(titulo).get();
  }*/
}
