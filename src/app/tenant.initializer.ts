import { inject } from "@angular/core";
import { Tenant } from "./services/tenant";

export function initTenant() {
  return () => {
    const tenantService = inject(Tenant);

    const host = window.location.hostname;
    const subdomain = host.split('.')[0];

    tenantService.setTenant(subdomain);
  };
}
