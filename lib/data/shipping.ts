export interface ShippingRecord {
  metric: string;
  value: string | number;
}

/**
 * Placeholder function to fetch shipping-related data.
 * Replace this with a real implementation (e.g. call external APIs or
 * databases) to return actual metrics such as Baltic Exchange rates,
 * vessel utilisations, etc.
 */
export async function getShippingData(): Promise<ShippingRecord[]> {
  return [
    { metric: 'BDI (Baltic Dry Index)', value: '1 200' },
    { metric: 'VLGC Rate', value: '$40k/day' },
    { metric: 'Fleet Utilisation', value: '85%' },
  ];
}
