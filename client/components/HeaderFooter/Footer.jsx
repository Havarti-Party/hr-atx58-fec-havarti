import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            align="center"
          >
            <CopyrightIcon fontSize="small" /> 2021 Havarti Party, LLC | Privacy Policy | Terms of Use | Careers | Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
