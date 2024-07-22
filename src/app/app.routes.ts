import { Routes } from '@angular/router';
import { ResultCardComponent } from './search/result-card/result-card.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { SearchIngredientsComponent } from './search/search-ingredients/search-ingredients.component';

export const routes: Routes = [
    { path: 'result-card-component', component: ResultCardComponent },
    { path: '**', component: HomeComponent },
    { path: 'test', component: TestComponent },
    { path: 'details/:idMeal', component: ResultCardComponent },

];
