import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import { AppRoutes } from './app.routing';
import { TranslateService } from './shared/services/translate.service';
import { ProductModule } from './layouts/product/product.module';
import { UserModule } from './layouts/user/user.module';


/* to load and set en.json as the default application language */
export function setupTranslateFactory(service: TranslateService): Function {
	return () => service.use('en');
}

@NgModule({
	declarations: [ 
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		IndexModule,
		ProductModule,
		UserModule,
		SharedModule,
		AppRoutingModule
		// RouterModule.forRoot(AppRoutes)
	],
	providers: [
		TranslateService,
		{
			provide: APP_INITIALIZER,
			useFactory: setupTranslateFactory,
			deps: [ TranslateService ],
			multi: true
		}
	],
	bootstrap: [ AppComponent ],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
