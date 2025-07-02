import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import DevicesIcon from '@mui/icons-material/Devices';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const skills = [
  {
    title: 'Software Development',
    icon: <CodeIcon fontSize="large" />,
    items: ['C++', 'Python', 'Java', 'Object-Oriented Programming'],
  },
  {
    title: 'Web Technologies',
    icon: <DevicesIcon fontSize="large" />,
    items: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Database Management',
    icon: <StorageIcon fontSize="large" />,
    items: ['MySQL'],
  },
  {
    title: 'Data Analytics',
    icon: <BarChartIcon fontSize="large" />,
    items: ['PowerBI'],
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(58, 134, 255, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
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
              background: 'linear-gradient(45deg, #3a86ff 30%, #10b981 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
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
                      background: 'linear-gradient(45deg, #3a86ff 30%, #10b981 90%)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <SchoolIcon sx={{ fontSize: 30, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h5" gutterBottom sx={{ mb: 0 }}>
                      Education
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={{ color: 'text.primary', fontSize: '1.1rem', fontWeight: 500 }}>
                    Bachelor of Technology in Computer Science Engineering
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                    Aditya Institute of Technology And Management, Tekkali
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                    August 2021 - May 2025
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'primary.main',
                      mt: 2,
                      display: 'inline-block',
                      background: 'rgba(58, 134, 255, 0.1)',
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                    }}
                  >
                    CGPA: 9.33/10.0
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
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
                      background: 'linear-gradient(45deg, #10b981 30%, #3a86ff 90%)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <WorkspacePremiumIcon sx={{ fontSize: 30, color: 'secondary.main', mr: 2 }} />
                    <Typography variant="h5" gutterBottom sx={{ mb: 0 }}>
                      Professional Development
                    </Typography>
                  </Box>
                  <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                    {[
                      'Completed Java Full Stack course in Wipro milestone',
                      'Participated in WebCombat And CodeFiesta competitions',
                      'Participated in AITAM AVISHKAAR 2.0 a 48 hours Hackathon',
                      'Completed Advanced coding using C++ in Geeks for Geeks',
                      'Attended “Data Analysis Using Python” and “Web Development Using Django” workshop conducted by .Andhra Pradesh State Skill Development Corporation',
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            mb: 2,
                            color: 'text.secondary',
                            '&::marker': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          {item}
                        </Typography>
                      </motion.li>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Typography 
            variant="h3" 
            sx={{ 
              mt: 12, 
              mb: 6, 
              textAlign: 'center',
              background: 'linear-gradient(45deg, #10b981 30%, #3a86ff 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Skills
          </Typography>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 3,
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        color: 'primary.main',
                        background: 'rgba(58, 134, 255, 0.1)',
                        p: 2,
                        borderRadius: '50%',
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
                      {skill.title}
                    </Typography>
                    {skill.items.map((item, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 1,
                          '&:last-child': { mb: 0 },
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 
