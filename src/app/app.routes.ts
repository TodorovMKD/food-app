import { Routes } from '@angular/router';
import { ResultCardComponent } from './search/result-card/result-card.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

export const routes: Routes = [
    { path: 'result-card-component', component: ResultCardComponent },
    { path: 'test', component: TestComponent },
    { path: 'details/:idMeal', component: ShowDetailsComponent },
    { path: '**', component: HomeComponent },
];
