import React from 'react';
import { getShippingData } from '../../lib/data/shipping';

export default async function ShippingPage() {
  const records = await getShippingData();
  return (
    <div>
      <h2>Shipping Metrics</h2>
      <p>This page presents key metrics for the shipping market.</p>
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
