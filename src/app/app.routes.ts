import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from './components/login/login.component';
import { PeliculaComponent } from "./components/pelicula/pelicula.component";

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "login", component: LoginComponent},
  { path: "pelicula/:id", component: PeliculaComponent },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "**", pathMatch: "full", redirectTo: "login" }
];
