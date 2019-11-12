import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule, MatSelectModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { ErrorComponent } from './error/error.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RequestComponent } from './request/request.component';
import { ComplainComponent } from './complain/complain.component';
import { PaymentComponent } from './payment/payment.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HelpComponent } from './help/help.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubscriptionComponent } from './subscription/subscription.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    AccountComponent,
    WildcardComponent,
    ErrorComponent,
    PagenotfoundComponent,
    RequestComponent,
    ComplainComponent,
    PaymentComponent,
    SidebarComponent,
    HelpComponent,
    NavbarComponent,
    SubscriptionComponent
  ],
  imports: [
    NgbModule,
    AngularFontAwesomeModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(environment.firebaseConfig, "CapiyooWebApp"),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireMessagingModule,
    AppRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account', component: AccountComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'notfound', component: PagenotfoundComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'request', component: RequestComponent },
      { path: 'report-bug', component: ComplainComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'help', component: HelpComponent },
      { path: 'subscription', component: SubscriptionComponent },

      { path: '*', component: WildcardComponent }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
