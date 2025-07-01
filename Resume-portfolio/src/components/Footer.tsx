import { Box, Container, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 3,
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Haswanth Chowdari. All rights reserved.
          </Typography>
          
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <IconButton
              href="https://www.linkedin.com/in/haswanth-chowdari-639b22281"
              target="_blank"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:chowdarihaswanth01@gmail.com"
              color="inherit"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 