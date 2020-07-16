import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *appMyNgIf=condition>
      Loading...
    </div>
    <button (click)="condition = !condition">Show/Hide</button>
  `,
})
export class AppComponent {
  condition = true;
}
