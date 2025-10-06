'use client';

import { Card, CardContent, Typography } from '@mui/material';

export default function KpiTile({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="overline" color="text.secondary">{label}</Typography>
        <Typography variant="h5">{value}</Typography>
        {delta && <Typography variant="caption" color="text.secondary">{delta} vs prior</Typography>}
      </CardContent>
    </Card>
  );
}
