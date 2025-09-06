export interface KPI {
  id: string;
  label: string;
  value: string | number;
}

/**
 * Placeholder function that aggregates high-level KPIs across asset classes.
 * Modify this to fetch or compute metrics derived from your data sources.
 */
export async function getKPIs(): Promise<KPI[]> {
  return [
    { id: 'shipping_tce', label: 'Average TCE Rate', value: '$30k/day' },
    { id: 'energy_spread', label: 'Crack Spread', value: '$15/bbl' },
    { id: 'metals_ratio', label: 'Gold/Silver Ratio', value: '80' },
  ];
}
