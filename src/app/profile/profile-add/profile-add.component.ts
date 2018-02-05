import { Component, OnInit } from '@angular/core';
import {RouterStateSnapshot, Router } from '@angular/router';
import { Profile } from '../profile';
import { ProfileService } from "../profile.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.css']
})
export class ProfileAddComponent implements OnInit {
profile: Profile;
  constructor(private profileService: ProfileService, private location: Location, private router: Router) { }

  ngOnInit() {
  }


  addProfile(data): void {  
      this.profileService.addProfile(data)
      .subscribe(() => {
      	console.log("Profile Added");
      	 this.goDashboard();
      })
  }

  goDashboard(): void {
    this.router.navigate(['/dashboard']);
  }  

  submitForm(value: any) {   
  	this.addProfile(value);
  }

}
