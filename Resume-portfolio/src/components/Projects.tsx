import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Blockchain Based Decentralized Voting System',
    description: 'Designed a secure and transparent election system using blockchain technology. Implemented facial verification using DeepFace model (VGG16) and developed Ethereum smart contracts for handling conditions.',
    technologies: ['Blockchain', 'Ethereum', 'DeepFace', 'Smart Contracts'],
  },
  {
    title: 'InDepth AI Learning Platform',
    description: 'Developed a modular video generation system using Python, integrated Gemini API for content generation, and implemented dual-source knowledge retrieval from Wikipedia and DuckDuckGo.',
    technologies: ['Python', 'FastAPI', 'MoviePy', 'Gemini API', 'TTS', 'Web Scraping'],
  },
  {
    title: 'LMS Platform',
    description: 'Developed a comprehensive learning management system with course management features and user-friendly interface.',
    technologies: ['WordPress', 'MySQL', 'HTML', 'CSS'],
  },
  {
    title: 'E-Commerce Platform',
    description: 'Built an online shopping platform with product listings and checkout functionality using modern web technologies.',
    technologies: ['WordPress', 'MySQL', 'HTML', 'CSS'],
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        bgcolor: 'background.default',
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
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
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
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 3,
                          lineHeight: 1.7,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mt: 'auto' }}>
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              mr: 1,
                              mb: 1,
                              bgcolor: 'rgba(58, 134, 255, 0.1)',
                              color: 'primary.main',
                              '&:hover': {
                                bgcolor: 'rgba(58, 134, 255, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 