import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Opinion } from '../model/opinion';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService {
  private myCollection:AngularFirestoreCollection<any>;

  constructor(private fire:AngularFirestore) { 
    this.myCollection=fire.collection<any>(environment.opinionesCollection);
  }
  addOpinion(newOpinion:Opinion):Promise<any>{
    return this.myCollection.add(newOpinion);
  }
  opinionById(id:any):Observable<any>{
    return this.myCollection.doc(id).get();
  }
  updateOpinion(id:any,newOpinion:Opinion):Promise<void>{
    console.log(newOpinion)
    return this.myCollection.doc(id).update({multimedia:newOpinion.multimedia});
  }
  deleteOpinion(id:any):Promise<void>{
    return this.myCollection.doc(id).delete();
  }
  loadOpinions():Observable<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>{
    return this.myCollection.get();
  }
}
