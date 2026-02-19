import { ApplicationConfig, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initTenant } from './tenant.initializer';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { tenantInterceptor } from './tenant-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(initTenant()),
    provideHttpClient(
      withFetch(),
      withInterceptors([tenantInterceptor])
    )
  ]
};
