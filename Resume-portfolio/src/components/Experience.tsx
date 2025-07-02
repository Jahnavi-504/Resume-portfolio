import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

interface Experience {
  title: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  type: 'work' | 'education';
}

const experiences: Experience[] = [
  {
    title: 'UI/UX Design Intern',
    company: 'Infini Tech Soft',
    duration: 'April 2024 - May 2024',
    location: 'Hyderabad, India',
    description: [
      'Gained hands-on experience in designing and developing a functional e-commerce website using WordPress.',
      'Installed and configured WordPress along with the WooCommerce plugin for managing online store features.',
      'Created and customized product pages to enhance user experience and showcase items effectively.',
      'Learned the basics of web development and content management within the WordPress ecosystem.',
    ],
    type: 'work',
  },
  {
    title: 'Certifications & Achievements',
    company: 'Various Institutions',
    duration: '2021 - Present',
    description: [
      'Python For Data Science (NPTEL) from IIT Madras',
      'Data Mining (NPTEL) from IIT Kharagpur',
      'Introduction To Machine Learning (NPTEL) from IIT Kharagpur',
      'Certificate of course completion in  “Data analysis with Python” from IBM in Coursera platform.',

    ],
    type: 'education',
  },
];

const Experience = () => {
  const getIcon = (type: 'work' | 'education') => {
    switch (type) {
      case 'work':
        return <WorkIcon />;
      case 'education':
        return <SchoolIcon />;
      default:
        return <WorkIcon />;
    }
  };

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(58, 134, 255, 0.05) 100%)',
      }}
    >
      <Container>
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
              background: 'linear-gradient(45deg, #10b981 30%, #3a86ff 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Experience & Education
          </Typography>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  mb: 4,
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: experience.type === 'work' 
                      ? 'linear-gradient(45deg, #10b981 30%, #3a86ff 90%)'
                      : 'linear-gradient(45deg, #3a86ff 30%, #10b981 90%)',
                  },
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          mr: 2,
                          p: 1,
                          borderRadius: '50%',
                          background: experience.type === 'work'
                            ? 'rgba(16, 185, 129, 0.1)'
                            : 'rgba(58, 134, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {getIcon(experience.type)}
                      </Box>
                      <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {experience.title}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, ml: 1 }}>
                      <BusinessIcon sx={{ fontSize: 20, color: 'secondary.main', mr: 1 }} />
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {experience.company}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, ml: 1 }}>
                      <DateRangeIcon sx={{ fontSize: 20, color: 'secondary.main', mr: 1 }} />
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {experience.duration}
                      </Typography>
                    </Box>

                    {experience.location && (
                      <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 20, color: 'secondary.main', mr: 1 }} />
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                          {experience.location}
                        </Typography>
                      </Box>
                    )}
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <Box component="ul" sx={{ pl: 2, mt: { xs: 2, md: 0 } }}>
                      {experience.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                            {experience.type === 'education' && (
                              <WorkspacePremiumIcon 
                                sx={{ 
                                  fontSize: 18, 
                                  color: 'primary.main',
                                  mr: 1,
                                  mt: 0.5,
                                }} 
                              />
                            )}
                            <Typography
                              variant="body1"
                              sx={{
                                color: 'text.secondary',
                                '&::marker': {
                                  color: experience.type === 'work' ? 'primary.main' : 'secondary.main',
                                },
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        </motion.li>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 