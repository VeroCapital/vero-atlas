export interface MetalsRecord {
  metric: string;
  value: string | number;
}

/**
 * Placeholder function to fetch metals-related data.
 * Replace this with real data sources to obtain metrics such as gold open
 * interest, silver inventories, lease rates, ETF flows and central
 * bank purchases.
 */
export async function getMetalsData(): Promise<MetalsRecord[]> {
  return [
    { metric: 'Gold Price', value: '$1 950/oz' },
    { metric: 'Silver Price', value: '$24/oz' },
    { metric: 'Gold Open Interest', value: '450 k contracts' },
  ];
}
