import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { ProfileService } from "./profile/profile.service";
import {ChipsModule} from 'primeng/primeng';




//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { DateConverterPipe } from './date-converter.pipe';


const appRoutes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "profile-detail/:id", component: ProfileDetailComponent },
  { path: "profile-edit", component: ProfileEditComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileDetailComponent,
    ProfileEditComponent,
    DateConverterPipe,

  ],
 imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ChipsModule,
    
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
