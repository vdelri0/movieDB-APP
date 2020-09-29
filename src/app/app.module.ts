import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { FechaPipe } from './pipes/fecha.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    LoadingComponent,
    PeliculaComponent,
    TarjetasComponent,
    NavbarComponent,
    PeliculaImagenPipe,
    FechaPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
