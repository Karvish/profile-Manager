
export class Profile {
  _id: { $oid:any};
   id: number; 
     emp_id: number;
     first_name: string ;
     last_name: string ;
      location: string ;
     email: string;
     company: string;
      phone: number;
      release_date: Date;
      experience: number;
     summary: string;
     technology: Array<any>;
     post_date: Date;
     isAvailable: Boolean;
     designation: string;
     gender: string;
     current_project: string;


}