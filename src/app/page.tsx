import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import KpiTile from '@/components/common/KpiTile';

export default function HomePage() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Executive Overview</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}><KpiTile label="Avg Line Speed" value="645 ft/min" delta="+3.4%" /></Grid>
        <Grid item xs={12} md={3}><KpiTile label="Goal Attainment" value="58%" delta="+6 pts" /></Grid>
        <Grid item xs={12} md={3}><KpiTile label="Downtime (24h)" value="2.4h" delta="-0.3h" /></Grid>
        <Grid item xs={12} md={3}><KpiTile label="Open Requests" value="17" delta="+2" /></Grid>
      </Grid>

      <Box mt={3}>
        <Card>
          <CardContent>
            <Typography variant="subtitle1">Welcome</Typography>
            <Typography variant="body2" color="text.secondary">
              Use the drawer to navigate. This is a minimal MVP scaffold wired for Supabase and ready for modules.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
