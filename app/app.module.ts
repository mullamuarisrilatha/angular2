import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './helpers/index';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AuthGuard }                          from './guards/index';
import { JwtInterceptor }                     from './helpers/index';
import { AuthenticationService, UserService } from './services/index';
import { HomeComponent }                      from './home/index';
import { LoginComponent }                     from './login/index';
import { RegisterComponent }                  from './register/index';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjXissLhtGAQOGn7wgkKhc5Ecfxkeq9oM'
    })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
