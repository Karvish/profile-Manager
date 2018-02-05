import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from "../profile.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
 @Input() profile: Profile;
 @Output()
 doneEdit: EventEmitter<Boolean> = new EventEmitter<Boolean> ();

  constructor( private profileService: ProfileService,    private location: Location) {


   }


  ngOnInit() {
    

  }

  goBack(): void {
    this.location.back();
  }   
    

  updateProfile(event, data): void {
      const id = this.profile._id.$oid;
      const showEdit =  true;
      this.profileService.updateProfile(data, id)
      .subscribe(() => this.doneEdit.emit(showEdit))
  }


  submitForm(event, value: any) {   
  	this.updateProfile(event, value);
  }

}


