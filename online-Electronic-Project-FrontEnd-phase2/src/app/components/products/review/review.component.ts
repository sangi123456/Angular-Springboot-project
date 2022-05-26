import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Review } from '../../../model/Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  posts! : Review;

  id : any;
  constructor(private http: HttpClient, ) {

  }

  ngOnInit(): void {

    
  }
  onSubmit(data: any){

    this.http.post('http://localhost:8080/api/v3/reviews/add', data)

    .subscribe((result) =>{

      console.warn("result", result)



      if (!data['results']['value'])

      return data;

    })

    console.warn(data);

  }

 
}
