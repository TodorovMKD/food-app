import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const RANDOM_FOOD_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const FOOD_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FOOD_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='


@Injectable({
  providedIn: 'root'
})
export class ApiFoodService {

  private http = inject(HttpClient)

  constructor() { }

  getRandomFood() {
    return this.http.get(RANDOM_FOOD_URL)
  }

  getFoodURL(search: string) {
    return this.http.get(FOOD_URL + search)
  }

  getFoodByID(idMeal: number) {
    return this.http.get(FOOD_ID + idMeal)
  }
}
