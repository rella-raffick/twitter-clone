import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-nav',
  templateUrl: './explore-nav.component.html',
  styleUrls: ['./explore-nav.component.scss']
})
export class ExploreNavComponent implements OnInit {

  active:string = "foryou";
  classForyou : Boolean = true ;
  classCovid: Boolean = false;
  classTrending : Boolean = false ;
  classNews: Boolean = false;
  classSports : Boolean = false ;
  classEntertainment: Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  forYou(){
    
  this.classForyou  = true ;
  this.classCovid= false;
  this.classTrending= false ;
  this.classNews= false;
  this.classSports= false ;
  this.classEntertainment= false;
  this.active = "foryou";
  }

    covid(){
    
      this.classForyou  = false ;
      this.classCovid= true;
      this.classTrending= false ;
      this.classNews= false;
      this.classSports= false ;
      this.classEntertainment= false;
      this.active = "covid";
      }

      trending(){
    
        this.classForyou  = false ;
        this.classCovid= false;
        this.classTrending= true ;
        this.classNews= false;
        this.classSports= false ;
        this.classEntertainment= false;
        this.active = "trending";
        }

        news(){
    
          this.classForyou  = false ;
          this.classCovid= false;
          this.classTrending= false ;
          this.classNews= true;
          this.classSports= false ;
          this.classEntertainment= false;
          this.active = "news";
          }

          sports(){
    
            this.classForyou  = false ;
            this.classCovid= false;
            this.classTrending= false ;
            this.classNews= false;
            this.classSports= true ;
            this.classEntertainment= false;
            this.active = "sports";
            }

            entertainment(){
    
              this.classForyou  = false ;
              this.classCovid= false;
              this.classTrending= false ;
              this.classNews= false;
              this.classSports= false ;
              this.classEntertainment= true;
              this.active = "entertainment";
              }

}
