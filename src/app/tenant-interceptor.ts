import { HttpInterceptorFn } from '@angular/common/http';
import { Tenant } from './services/tenant';
import { inject } from '@angular/core';

export const tenantInterceptor: HttpInterceptorFn = (req, next) => {
  const tenantService = inject(Tenant);
  const tenant = tenantService.getTenant();

  if (!tenant) {
    return next(req);
  }

  const cloned = req.clone({
    setHeaders: {
      'X-Tenant': tenant
    }
  });

  return next(cloned);
};
