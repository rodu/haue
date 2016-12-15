export class NumberPercentValueConverter {
  toView(input) {
    return Math.round(input * 100) + '%';
  }
}
