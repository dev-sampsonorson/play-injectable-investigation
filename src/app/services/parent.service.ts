import { inject } from "@angular/core";
import { ChildNonInjectableService } from "./child.service";

export class ParentNonInjectableService {
  /**
   * A default constructor (implicit or explicit) is required for
   * this class to be injectable.
   *
   * If there was an `@Injectable()` marked on this class, then we
   * the default constructor is not required.
   *
   * The decorator provides information about the class such as
   * constructor parameters required for non-default constructors.
   *
   * In additiona, the decorator primarily help helps with knowing
   * how to construct the service by knowing the constructor dependencies.
   *
   * If a service is manually constructed or created with a `useFactory`
   * provider, you might omit the `@Injectable()` decorator.
   */
  // constructor() {}

  // NOTE: Multiple constructor implementations are not supported
  /* constructor(
    public childService: ChildNonInjectableService
  ) {} */

  // However, with the inject function, this service doesn't need
  // to be marked with the `@Injectable()` decorator.
  // If there is a mix of constructor and inject function
  // dependencies, then the decorator would be need.
  childService = inject(ChildNonInjectableService);

  getMessage(from: string) {
    return "NonInjectableService Message " + from;
  }
}
