import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  experiences: {
    name: string,
    fromTo: string,
    description: string,
    projects: {
      name: string,
      fromTo: string,
      quickDescription: string,
      longDescriptions: string[],
    }[],
    technologies: {
      imageLink: string,
      link: string,
      tooltip: string
    }[]
  }[];
  constructor() { }

  ngOnInit() {
    this.experiences = [
      {
        name: 'Cordant Group',
        fromTo: 'Nov. 2015 - Nowadays',
        description: 'Cordant Group is one of the top recruitment companies in UK. The main domains covered by the company are managed services (for clients as Tesco, Amazon), security, facility management, IT staff recruitment and other. The company employs about 3 000 people in its core, and 50 000 overall.',
        projects: [{
          name: 'Cordant Connect',
          fromTo: 'Sep. 2016 - Nowadays',
          quickDescription: 'Collection of micro services developped with cutting edge technologies, to ease the journey of candidates.',
          longDescriptions: [
            'Cordant Connect is a set of applications developped since late 2016 as microservices, to numerize and automate the work of Cordant Group employees, and to ease the journey of the candidates. It starts from the first contact the candidates have with the company (a call, an appointment in a branch), and goes all along the colleague\'s life in the company. The project, composed of 5 apps so far, has been a success quickly acepted by both branch staff and candidates.',
            'From a technical point of view, the project started as a PoC (front end developped in HTML + jQuery / Google Spreadsheet database), and has now a fully grown technical stack, taking advantage of the latest technologies as for instance Angular 4, AWS Lambda, Serverless, PostgresSQL Database, AWS DynamoDB (NoSQL database)...'
          ],
        },
        {
          name: 'Legacy applications and Spirit',
          fromTo: 'Nov. 2015 - Mar. 2017',
          quickDescription: 'Support and maintenance of the legacy systems, and development of a new system for workers management.',
          longDescriptions: [
            'My first assignment at Cordant Group was to work on the legacy systems that are still woring nowadays, as well as working on a new project that was being developped. The legacy systems cover a large spectrum of Microsoft applications, as for example C# applications, ASP websites, SSIS, SSRS, SQL Server databases, as well as off the shelf products, as for instance RoleCall.',
            'My second assignment was a project called Spirit, developped on ISIS Papyrus\'s proprietary platform, to create in the first place an application to onboard candidates, and in the second place a candidate management system.'
          ],
        }],
        technologies: [{
          imageLink:'assets/images/angular.png',
          link: 'https://angular.io',
          tooltip: 'Angular'
        },{
          imageLink:'assets/images/google.png',
          link: 'https://developers.google.com/',
          tooltip: 'Google'
        },
        {
          imageLink:'assets/images/aws.png',
          link: 'https://aws.amazon.com/fr/free/',
          tooltip: 'AWS Services'
        },
        {
          imageLink:'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/logos/serverless-logo.svg',
          link: 'https://serverless.com/',
          tooltip: 'Serverless'
        },
        {
          imageLink:'assets/images/postgres.png',
          link: 'https://www.postgresql.org/',
          tooltip: 'Postgres'
        },
        {
          imageLink:'assets/images/npm.png',
          link: 'https://www.npmjs.com/',
          tooltip: 'npm'
        },
        {
          imageLink:'assets/images/git.png',
          link: 'https://github.com/',
          tooltip: 'GitHub'
        }]
      },
      {
        name: 'CGI',
        fromTo: 'Apr. 2011 - Sep 2015',
        description: 'CGI is an information technology and business process outsourcing company, strong of about 70 000 IT professionals. I worked in this company for about 4 years and a half, first as an intern, and then as an analyst developper. I spent all this time working on 2 projects for Dalkia, a client managing heating and air conditioning systems in France and Italy.',
        projects: [{
          name: 'Sigma Liss',
          fromTo: 'Mar. 2012 - Sep. 2015',
          quickDescription: 'Field journey scheduler.',
          longDescriptions: [
            'This project started some years before I joined the company, and wasn\'t quite used until the team changed. It became one of the main projects for Dalkia, as the cost reduction policy pointed out that the time spend on the field wasn\'t optimized. The idea for our team was to implement a part of the ARM solution developped by CGI U.S. and adapt it to Dalkia\'s context. The main challenge being the communication with Dalkia\'s other applications, the interface was a really critical subject, and was monitored hourly, with tools we developped inhouse.',
            'From a technology point of view, the software was based on C++ code we couldn\'t act on, comunicating with an Oracle 10 database. The monitoring application was first based on Excel VBA macros, and has been moved slowly to a HTML / jQuery / Bootstrap front end, plugged to an Oracle Database.'
          ],
        },
        {
          name: 'Energy',
          fromTo: 'Apr. 2011 - Mar. 2017',
          quickDescription: 'Heating and air conditioning systems management.',
          longDescriptions: [
            'This project was a monster web application, managing the consumptions and budgeting of the heating and air conditioning systems Dalkia was working on. It had at the time about 250 users, with 50 working live. It was one of Dalkia\'s main applications, as holder of the information used for the invoicing process. It was though comunicating with about 20 other applications, and had about 25 Oracle batches running at night, and a 24 hours budget closure batch day at the end of the year.',
            'Concerning technologies, it was a complicated super layered ASP.Net application, that we moved from .Net 2.0 to .Net 4.0, comunicating with an Oracle 10 Database. It used a Microsoft Silverlight component that I developped during my internship, to edit the technical schema of the systems.'
          ],
        }],
        technologies :[{
          imageLink:'assets/images/asp.png',
          link: 'https://www.asp.net/',
          tooltip:'ASP.Net'
        },
        {
          imageLink:'assets/images/jquery.png',
          link: 'https://jquery.com/',
          tooltip:'jQuery'
        },
        {
          imageLink:'assets/images/bootstrap.png',
          link: 'http://getbootstrap.com/',
          tooltip:'Bootstrap'
        },
        {
          imageLink:'assets/images/oracle.png',
          link: 'https://www.oracle.com/index.html',
          tooltip:'Oracle'
        },
        {
          imageLink:'assets/images/microsoft.png',
          link: 'https://www.microsoft.com/',
          tooltip:'Microsoft'
        }]
      }
    ]
  }

}
