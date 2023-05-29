import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentNonInjectableService } from '../services/parent.service';
import { ChildNonInjectableService } from '../services/child.service';

@Component({
  selector: 'so-lazy',
  standalone: true,
  imports: [CommonModule],
  providers: [ParentNonInjectableService, ChildNonInjectableService],
  template: `
    <p>
      lazy works!
    </p>
    <hr />
    {{ parentService.getMessage('Lazy') }}
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponent {

  constructor(
    public parentService: ParentNonInjectableService
  ) {}
}
