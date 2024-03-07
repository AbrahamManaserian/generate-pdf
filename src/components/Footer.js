import { Box, Grid, Typography } from '@mui/material';

export default function () {
  return (
    <Grid sx={{ minHeight: '43px', bgcolor: 'black', p: '10px' }} alignItems="center" item xs={12} container>
      <Grid item container xs sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' } }}>
        <Typography
          sx={{ fontSize: 'clamp(11px, 1vw, 16px)', fontWeight: 700, color: 'white', textAlign: 'center' }}
        >
          E3 Strategic Solutions
        </Typography>
      </Grid>
      <Grid xs={12} sm={12} md={'auto'} item container sx={{ justifyContent: 'flex-end' }}>
        <Grid p="5px" item container alignItems="center" justifyContent="center" xs={6} sm={6} md={'auto'}>
          <Typography
            sx={{
              mx: '10px',
              fontSize: 'clamp(11px, 1vw, 16px)',
              gap: '10px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '1.6px',
            }}
          >
            Terms of Use
          </Typography>
        </Grid>
        <Grid p="5px" item container alignItems="center" justifyContent="center" xs={6} sm={6} md={'auto'}>
          <Typography
            sx={{
              letterSpacing: '1.6px',
              mx: '15px',
              fontSize: 'clamp(11px, 1vw, 16px)',
              fontWeight: 700,
              color: 'white',
            }}
          >
            Privacy
          </Typography>
        </Grid>
        <Grid p="5px" justifyContent="center" alignItems="center" item container xs={6} sm={6} md={'auto'}>
          <Typography
            sx={{
              letterSpacing: '1.6px',
              mx: '15px',
              fontSize: 'clamp(11px, 1vw, 16px)',
              fontWeight: 700,
              color: 'white',
            }}
          >
            Contact
          </Typography>
        </Grid>
        <Grid p="5px" justifyContent="center" alignItems="center" item container xs={6} sm={6} md={'auto'}>
          <a
            target="tab"
            href="https://www.pmdaybreak.com"
            style={{
              letterSpacing: '1.6px',
              margin: '0 15px',
              fontWeight: 700,
              fontSize: 'clamp(12px, 1vw, 16px)',
              color: 'white',
            }}
          >
            Web Design: PM Daybreak Designs
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
