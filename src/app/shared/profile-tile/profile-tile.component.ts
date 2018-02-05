import { Component, OnInit, Input} from '@angular/core';
import { Profile } from '../../profile/profile';
@Component({
  selector: 'app-profile-tile',
  templateUrl: './profile-tile.component.html',
  styleUrls: ['./profile-tile.component.css']
})
export class ProfileTileComponent implements OnInit {
 @Input() profile: Profile;
  constructor() { }

  ngOnInit() {
  }

}
