import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async getLocalItem(title: string): Promise<string | null> {
    if (this.isBrowser) {
      const { localStorage } = await import(
        '../constants/browser-local-storage'
      );
      return localStorage.getItem(title);
    }
    return null;
  }

  async setLocalItem(title: string, storageData: any): Promise<void> {
    if (this.isBrowser) {
      const { localStorage } = await import(
        '../constants/browser-local-storage'
      );
      localStorage.setItem(title, storageData);
    }
  }
}
