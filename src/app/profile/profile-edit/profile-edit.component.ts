import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
values: string[];
 @Input() profile: Profile;

  constructor() { }

  ngOnInit() {
  }


  submitForm(value: any) {
    console.log(value);
  }

}


