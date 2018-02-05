import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from '../profile/profile';
import { ProfileService } from "../profile/profile.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    profiles: Profile[] = [];
    private totalProfiles;
   
  constructor( private router: Router,
    private profileService: ProfileService) { 

  }


  ngOnInit() : void  {  
   this.getProfiles(); 

  }

  //Get All Profiles From Server
  getProfiles(){
     this.profileService.getProfiles()
      .subscribe((profiles)=>{
         this.profiles = profiles;
         this.getTotalProfiles(profiles);
      }, (error: any) => {
        console.log("Error Loading profiles " + error);
      });
  }

  getTotalProfiles(profiles){
    this.totalProfiles = profiles.length || 0;
  }

  


}

