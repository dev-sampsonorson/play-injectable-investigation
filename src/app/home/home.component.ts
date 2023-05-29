import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentNonInjectableService } from '../services/parent.service';
import { ChildNonInjectableService } from '../services/child.service';

@Component({
  selector: 'so-home',
  standalone: true,
  imports: [CommonModule],
  providers: [ParentNonInjectableService, ChildNonInjectableService],
  template: `
    <p>
      home works!
    </p>
    <hr />
    {{ parentService.getMessage('Home') }}
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EagerComponent {

  constructor(
    public parentService: ParentNonInjectableService
  ) {}

}
