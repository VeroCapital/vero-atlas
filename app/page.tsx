import React from 'react';
import { getKPIs } from '../lib/kpis';
export const dynamic = 'error';


// The home page displays some high-level KPIs.
export default async function Page() {
  const kpis = await getKPIs();
  return (
    <div>
      <h2>Key Performance Indicators</h2>
      <ul>
        {kpis.map((kpi) => (
          <li key={kpi.id}>
            <strong>{kpi.label}:</strong> {kpi.value}
          </li>
        ))}
      </ul>
      <p>This is a simple starting point for the VERO Atlas dashboard.</p>
    </div>
  );
}
