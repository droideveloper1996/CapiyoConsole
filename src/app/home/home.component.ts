import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { Router } from '@angular/router';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items
  constructor(private afMessaging: AngularFireMessaging,
    public afAuth: AngularFireAuth,
    private router: Router, private db: AngularFirestore,
  ) {
  }

  ngOnInit() {
    this.items = this.db.collection('items').valueChanges();
    console.log(this.items)
    this.db.collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "America"
    });

    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          console.log('Permission granted! Save to the server!', token);
          //this.updateToken(this._UID, token)
        },
        (error) => { console.error(error); },
      );
  }

}
