import { Component } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  restaurants: Restaurant[]= [];

  constructor( private httpClient:HttpClient){}

  ngOnInit(): void {
    const url= 'http://localhost:8080/restaurants';

    this.httpClient.get<Restaurant[]>(url).subscribe(restaurants =>{
      this.restaurants = restaurants
    });
    
  }

}
