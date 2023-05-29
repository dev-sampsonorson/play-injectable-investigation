export class ChildNonInjectableService {
  getMessage(from: string) {
    return "ChildNonInjectableService Message " + from;
  }
}
