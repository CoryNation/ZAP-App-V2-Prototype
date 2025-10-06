'use client';

import * as React from 'react';
import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { getLineSpeedSeries } from '@/lib/services/lineSpeedService';

type SeriesPoint = { ts: string; value: number };
type Series = { name: string; data: SeriesPoint[] };

export default function LineSpeedPage() {
  const [plant, setPlant] = React.useState<string>('Plant A');
  const [series, setSeries] = React.useState<Series[]>([]);

  React.useEffect(() => {
    getLineSpeedSeries(plant).then(setSeries);
  }, [plant]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Line Speed (ft/min)</Typography>
      <FormControl size="small" sx={{ minWidth: 200 }}>
        <InputLabel>Plant</InputLabel>
        <Select label="Plant" value={plant} onChange={(e) => setPlant(e.target.value)}>
          <MenuItem value="Plant A">Plant A</MenuItem>
          <MenuItem value="Plant B">Plant B</MenuItem>
        </Select>
      </FormControl>

      <Box mt={2}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2" gutterBottom>Goal: 700 ft/min</Typography>
            <div id="chart-container" style={{ height: 320 }}>
              {/* Placeholder: integrate Recharts/ECharts in follow-up commit */}
              <Typography variant="body2" color="text.secondary">
                (Chart placeholder) {series.length} lines loaded. Integrate Recharts/ECharts to render multi-series line with a red goal line at 700.
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
