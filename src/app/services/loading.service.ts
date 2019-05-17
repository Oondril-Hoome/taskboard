import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  private _isLoading =  true;
  private _loadingText = 'H<h6>∞</h6>me<br/>';

  constructor() { }

  get loadingText(): string {
    return this._loadingText;
  }

  set loadingText(value: string) {
    this._loadingText = value;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
  }

}
