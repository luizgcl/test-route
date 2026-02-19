import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tenant {
  private tenant: string | null = null;

  setTenant(value: string) {
    this.tenant = value;
  }

  getTenant() {
    return this.tenant;
  }
}
