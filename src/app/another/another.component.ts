import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'so-another',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      another works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnotherComponent {

}
