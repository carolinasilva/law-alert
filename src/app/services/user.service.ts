import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'rxjs/Rx';
import { snapshotToObject } from '../models/SnapshotToObject';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private PATH = 'userProfile/';

    constructor(
        private db: AngularFireDatabase
    ){}

    get(key: string): Promise<User> {
        return new Promise(function(resolve, reject) {
            firebase.database().ref(this.PATH+key).once('value').then(function(snapshot) {
                console.log(snapshot);
                if(snapshot.val())
                {
                    let user: User = {
                        admin: snapshot.val().admin ? snapshot.val().admin : false,
                        email: snapshot.val().email,
                        name: snapshot.val().name,
                        premiumAccount: snapshot.val().premiumAccount ? snapshot.val().premiumAccount : false,
                        key: snapshot.val().key
                    };
                    resolve(user);
                }
                else
                    resolve(null);
            }).catch(err => {
                resolve(null);
            });
          });        
      }

    add(user: User): Promise<string>
    {
        return new Promise((resolve, reject) => {
            this.db.list(this.PATH).update(user.key, user).then(() => {resolve()});
          });
    }
}

