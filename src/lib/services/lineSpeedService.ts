// Placeholder service returning synthetic data for early UI dev.
// Replace with Supabase queries after tables are created.

export async function getLineSpeedSeries(plant: string) {
  const lines = ['Line 1', 'Line 2', 'Line 3'];
  const now = Date.now();
  const toPoint = (t: number, base: number) => ({
    ts: new Date(now - t * 60_000).toISOString(),
    value: Math.max(0, Math.round(base + (Math.sin(t/5) * 60) + (Math.random()*80 - 40)))
  });
  return lines.map((name, idx) => ({
    name: `${plant} · ${name}`,
    data: Array.from({ length: 60 }, (_, i) => toPoint(60 - i, 600 + idx*40))
  }));
}
