import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        pt: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(135deg, rgba(58, 134, 255, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
          zIndex: 0,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box maxWidth="800px">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #3a86ff 30%, #10b981 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                }}
              >
                CHOWDARI HASWANTH
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                Computer Science Engineering Student
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: '600px',
                }}
              >
                Driven to apply my technical skills and problem-solving abilities to develop
                user-friendly web solutions that improve business efficiency. Committed to
                learning and adapting to new technologies while contributing to the company's
                growth through innovative solutions and collaborative teamwork.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#projects"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 14px 0 rgba(58, 134, 255, 0.39)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(58, 134, 255, 0.39)',
                    },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="mailto:chowdarihaswanth01@gmail.com"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 