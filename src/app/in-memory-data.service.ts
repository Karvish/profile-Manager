
export class InMemoryDataService {
  createDb() {
    const profiles = [
      {
      id: 1,    
     emp_id: 267690,
     first_name: 'Karthick' ,
     last_name: 'Kuppusamy' ,
      location: 'Coimbatore' ,
     email: 'Karthick.Kuppusamy@cognizant.com',
     company: 'Cognizant',
      phone: 9585529320,
      release_date: "20/12/2017",
      experience: 10,
     summary: 'Around 10+ years of extensive programming experience in developing Web based applications ',
     technology: ['HTML', 'JavaScript', 'CSS'],
     post_date: "25/12/2017",
     isAvailable: true
      },


      {
      id: 2,    
     emp_id: 464305,
     first_name: 'Harivenkata' ,
     last_name: 'Krishnan' ,
      location: 'Chennai' ,
     email: 'Harivenkata.Krishnan@cognizant.com',
     company: 'Cognizant',
      phone: 925658650,
      release_date: "20/12/2017",
      experience: 6,
     summary: 'Solid experience in AngularJS for creating single page web apps utilizing MVC frameworks',
     technology: ['HTML', 'JavaScript', 'CSS', 'Angular'],
     post_date: "24/12/2017",
     isAvailable: false
      },


      {
      id: 3,    
     emp_id: 267690,
     first_name: 'Ponnusamy' ,
     last_name: 'Singayagoundempudur' ,
      location: 'Banagalore' ,
     email: 'Ponnusamy.Singayagoundempudur@cognizant.com',
     company: 'Cognizant',
      phone: 9884400766,
      release_date: "01/01/2018",
      experience: 9,
     summary: 'Around 10+ years of extensive programming experience in developing Web based applications ',
     technology: ['HTML', 'JavaScript', 'CSS', 'Agile', 'Management'],
     post_date: "23/12/2017",
     isAvailable: true
      },


      {
      id: 4,    
     emp_id: 247603,
     first_name: 'Deepa' ,
     last_name: 'Nagarajan' ,
      location: 'Coimbatore' ,
     email: 'Deepa.Nagarajan@cognizant.com',
     company: 'Cognizant',
      phone: 958565321,
      release_date: "30/12/2017",
      experience: 10,
     summary: 'Around 10+ years of extensive programming experience in developing Web based applications ',
     technology: ['HTML', 'JavaScript', 'CSS'],
     post_date: "26/12/2017",
     isAvailable: true
      }
    ];
    return { profiles };
  }
}