'use client';

import * as React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { listWorkRequests } from '@/lib/services/workRequestService';

export default function RequestsPage() {
  const [rows, setRows] = React.useState<any[]>([]);
  React.useEffect(() => { listWorkRequests().then(setRows); }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Work Requests</Typography>
      <Card>
        <CardContent>
          <Typography variant="body2" color="text.secondary">({rows.length}) requests loaded</Typography>
          {/* Replace with data grid / Kanban in later commit */}
        </CardContent>
      </Card>
    </Box>
  );
}
