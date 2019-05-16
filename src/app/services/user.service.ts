import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/Rx';
import { User } from '../models/User';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private PATH = 'userProfile/';

    constructor(
        private db: AngularFireDatabase,
        private firestore: AngularFirestore
    ){}

    get(key: string): Promise<User> {     
        return new Promise((resolve, reject) =>{
            this.firestore
                .collection("userProfile")
                .doc(key)
                .get()
                .toPromise().then(doc => {
                    if (!doc.exists) {
                        resolve(null);
                    } else {
                        let user: User = {
                            admin: doc.data().admin ? doc.data().admin : false,
                            email: doc.data().email,
                            name: doc.data().name,
                            premiumAccount: doc.data().premiumAccount ? doc.data().premiumAccount : false,
                            key: doc.data().key
                        };
                        resolve(user);
                    }
                  }, err => {
                            console.log(err)
                          });
        });        
      }

    list(): Observable<any[]>
    {
        return this.firestore.collection("userProfile").snapshotChanges();
    }

    addUpdate(user: User): Promise<string>
    {
        return new Promise((resolve, reject) =>{
            this.firestore
                .collection("userProfile")
                .doc(user.key)
                .set(user)
                .then(() => {resolve()}, err => reject(err));
        });
    }

    delete(user: User): Promise<string>
    {
        return new Promise((resolve, reject) =>{
            this.firestore
                .collection("userProfile")
                .doc(user.key)
                .delete()
                .then(() => {resolve()}, err => reject(err));
        });
    }
}

