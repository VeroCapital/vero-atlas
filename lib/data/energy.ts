export interface EnergyRecord {
  metric: string;
  value: string | number;
}

/**
 * Placeholder function to fetch energy-related data.
 * Replace this with real APIs or sources to provide up-to-date figures
 * such as crude oil prices, crack spreads, natural gas indices and
 * hedge ratios.
 */
export async function getEnergyData(): Promise<EnergyRecord[]> {
  return [
    { metric: 'Brent Oil Price', value: '$85/bbl' },
    { metric: 'WTI Price', value: '$80/bbl' },
    { metric: 'Henry Hub Gas', value: '$3.20/MMBtu' },
  ];
}
