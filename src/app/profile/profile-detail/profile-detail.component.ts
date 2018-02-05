import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { AnonymousSubscription } from "rxjs/Subscription";

import { Profile } from '../profile';
import { ProfileService } from "../profile.service";


@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],

})
export class ProfileDetailComponent implements OnInit, OnDestroy {

	  profile: Profile;
    private showEdit =  false;
    private timerSubscription: AnonymousSubscription;
    private postsSubscription: AnonymousSubscription;

constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit(): void {
  	 this.getProfile();   	
  }

 ngOnDestroy(): void {
    if (this.postsSubscription) {   
      this.postsSubscription.unsubscribe();
    }
    if (this.timerSubscription) {    
      this.timerSubscription.unsubscribe();
    }
  }

  subscribeToData(): void {

    this.timerSubscription = Observable.timer(500)
      .subscribe(() => this.getProfile());
  }

  getProfile(): void {
    const id = this.route.snapshot.paramMap.get('id');
      this.postsSubscription = this.profileService.getProfile(id)
      .subscribe((profile) =>{
          this.profile = profile;
          this.subscribeToData();
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log("complete");
      })

  }


 goBack(): void {
    this.location.back();
  }

  editProfile(): void{
    (this.showEdit == false) ? this.showEdit = true : this.showEdit = false
  }

  doneEditProfile = function(showEdit){  
    this.showEdit = showEdit;
    this.editProfile();

  }


}
