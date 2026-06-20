import { PeriodicElement } from './interfaces';

describe('PeriodicElement Interface', () => {
  it('should have the correct properties', () => {
    const element: PeriodicElement = {
      name: 'Hydrogen',
      position: 1,
      weight: 1.008,
      symbol: 'H',
      description: 'Hydrogen is a chemical element with symbol H and atomic number 1.',
    };
    expect(element.name).toBe('Hydrogen');
    expect(element.position).toBe(1);
    expect(element.weight).toBe(1.008);
    expect(element.symbol).toBe('H');
    expect(element.description).toBe(
      'Hydrogen is a chemical element with symbol H and atomic number 1.',
    );
  });
});
