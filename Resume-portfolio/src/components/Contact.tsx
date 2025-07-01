import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'haswanthchowdari@gmail.com',
      link: 'mailto:haswanthchowdari@gmail.com',
    },
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/haswanth-chowdari',
      link: 'https://linkedin.com/in/haswanth-chowdari',
    },
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      value: 'github.com/haswanth',
      link: 'https://github.com/haswanth',
    },
    {
      icon: <WhatsAppIcon />,
      title: 'WhatsApp',
      value: '+91 9515277246',
      link: 'tel:+919515277246',
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      value: 'Tekkali, Andhra Pradesh, India',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(58, 134, 255, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 8,
              background: 'linear-gradient(45deg, #3a86ff 30%, #10b981 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get in Touch
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: index === contactInfo.length - 1 ? 0 : 3,
                    p: 2,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(58, 134, 255, 0.1)',
                      transform: 'translateX(10px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      mr: 3,
                      p: 1.5,
                      borderRadius: '50%',
                      background: 'rgba(58, 134, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      transition: 'all 0.3s ease',
                      '& svg': {
                        fontSize: 24,
                      },
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 0.5,
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}
                    >
                      {info.title}
                    </Typography>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 500,
                            transition: 'color 0.3s ease',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          {info.value}
                        </Typography>
                      </a>
                    ) : (
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.primary',
                          fontWeight: 500,
                        }}
                      >
                        {info.value}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 