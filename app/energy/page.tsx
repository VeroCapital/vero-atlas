import React from 'react';
import { getEnergyData } from '../../lib/data/energy';
export const dynamic = 'error';


export default async function EnergyPage() {
  const records = await getEnergyData();
  return (
    <div>
      <h2>Energy Metrics</h2>
      <p>This page presents key metrics for the energy market.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Metric</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {records.map((row) => (
            <tr key={row.metric}>
              <td style={{ padding: '0.25rem 0' }}>{row.metric}</td>
              <td style={{ padding: '0.25rem 0' }}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
