// import { Box, Container, Typography, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import React from 'react';


// const Hero = () => {
//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: '#ffffff',
//         paddingTop: '64px',
//       }}
//     >
//       {/* Background Gradient */}
//       <div
//         style={{
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '100%',
//           background: 'linear-gradient(135deg, rgba(58, 134, 255, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
//           zIndex: 0,
//         }}
//       />

//       <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1, width: '100%' }}>
//         <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '32px', alignItems: 'center' }}>
//           {/* Left Column - Content */}
//           <div>
//             <div style={{ maxWidth: '100%' }}>
//               <h1
//                 style={{
//                   fontWeight: 'bold',
//                   background: 'linear-gradient(45deg, #3a86ff 30%, #10b981 90%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   marginBottom: '24px',
//                   fontSize: '3.5rem',
//                   lineHeight: 1.1,
//                   margin: 0,
//                 }}
//               >
//                 CHOWDARI HASWANTH
//               </h1>

//               <h2
//                 style={{
//                   color: '#1a1a1a',
//                   fontWeight: 500,
//                   marginBottom: '24px',
//                   fontSize: '2.125rem',
//                   lineHeight: 1.2,
//                   margin: '24px 0',
//                 }}
//               >
//                 B.Tech Student from Computer Science Background
//               </h2>

//               <p
//                 style={{
//                   color: '#666',
//                   fontSize: '1.1rem',
//                   lineHeight: 1.8,
//                   marginBottom: '32px',
//                   maxWidth: '600px',
//                 }}
//               >
//                 Aspiring AI/ML engineer with a passion for building user-friendly and efficient web solutions. Driven by strong technical skills and problem-solving abilities. Currently seeking opportunities in Artificial Intelligence and Machine Learning to apply my knowledge, learn new technologies, and contribute to impactful, innovative projects through collaboration and continuous growth.
//               </p>

//               <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
//                 <button
//                   style={{
//                     padding: '12px 32px',
//                     fontSize: '1.1rem',
//                     backgroundColor: '#3a86ff',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     boxShadow: '0 4px 14px 0 rgba(58, 134, 255, 0.39)',
//                     transition: 'all 0.3s ease',
//                     fontWeight: 500,
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = 'translateY(-2px)';
//                     e.target.style.boxShadow = '0 6px 20px rgba(58, 134, 255, 0.39)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = 'translateY(0)';
//                     e.target.style.boxShadow = '0 4px 14px 0 rgba(58, 134, 255, 0.39)';
//                   }}
//                 >
//                   View Projects
//                 </button>
//                 <button
//                   style={{
//                     padding: '12px 32px',
//                     fontSize: '1.1rem',
//                     backgroundColor: 'transparent',
//                     color: '#3a86ff',
//                     border: '2px solid #3a86ff',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                     fontWeight: 500,
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = 'translateY(-2px)';
//                     e.target.style.backgroundColor = '#3a86ff';
//                     e.target.style.color = 'white';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = 'translateY(0)';
//                     e.target.style.backgroundColor = 'transparent';
//                     e.target.style.color = '#3a86ff';
//                   }}
//                 >
//                   Contact Me
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Photo */}
//           <div>
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <div
//                 style={{
//                   width: '350px',
//                   height: '350px',
//                   borderRadius: '50%',
//                   border: '6px solid #3a86ff',
//                   boxShadow: '0 20px 60px rgba(58, 134, 255, 0.3)',
//                   transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   color: 'white',
//                   fontSize: '6rem',
//                   fontWeight: 'bold',
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = 'scale(1.05) rotate(2deg)';
//                   e.target.style.boxShadow = '0 25px 80px rgba(58, 134, 255, 0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = 'scale(1) rotate(0deg)';
//                   e.target.style.boxShadow = '0 20px 60px rgba(58, 134, 255, 0.3)';
//                 }}
//               >
//                 📸
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Responsive Layout */}
//         <style>
//           {`
//             @media (max-width: 768px) {
//               .hero-grid {
//                 grid-template-columns: 1fr !important;
//                 text-align: center;
//               }
//               .hero-title {
//                 font-size: 2.5rem !important;
//               }
//               .hero-subtitle {
//                 font-size: 1.5rem !important;
//               }
//               .hero-photo {
//                 width: 250px !important;
//                 height: 250px !important;
//                 font-size: 4rem !important;
//               }
//             }
//           `}
//         </style>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import myimg from '../assets/myimg.jpg'
const Hero = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        paddingTop: '64px',
      }}
    >
      {/* Background Gradient */}
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(135deg, rgba(58, 134, 255, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '32px', alignItems: 'center' }}>
          {/* Left Column - Content */}
          <div>
            <div style={{ maxWidth: '100%' }}>
              <h1
                style={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(60deg, #3a86ff 30%, #10b981 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '24px',
                  fontSize: '3.5rem',
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                CHOWDARI HASWANTH
              </h1>

              <h2
                style={{
                  color: '#1a1a1a',
                  fontWeight: 500,
                  marginBottom: '24px',
                  fontSize: '2.125rem',
                  lineHeight: 1.2,
                  margin: '24px 0',
                }}
              >
                B.Tech Student from Computer Science Background
              </h2>

              <p
                style={{
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                  maxWidth: '600px',
                }}
              >
                Aspiring AI/ML engineer with a passion for building user-friendly and efficient web solutions. Driven by strong technical skills and problem-solving abilities. Currently seeking opportunities in Artificial Intelligence and Machine Learning to apply my knowledge, learn new technologies, and contribute to impactful, innovative projects through collaboration and continuous growth.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  style={{
                    padding: '12px 32px',
                    fontSize: '1.1rem',
                    backgroundColor: '#3a86ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px 0 rgba(58, 134, 255, 0.39)',
                    transition: 'all 0.3s ease',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(58, 134, 255, 0.39)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 14px 0 rgba(58, 134, 255, 0.39)';
                  }}
                >
                  View Projects
                </button>
                <button
                  style={{
                    padding: '12px 32px',
                    fontSize: '1.1rem',
                    backgroundColor: 'transparent',
                    color: '#3a86ff',
                    border: '2px solid #3a86ff',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.backgroundColor = '#3a86ff';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#3a86ff';
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* Option 1: Replace with your actual photo */}
              <img
                src={myimg} // Replace with your photo path
                alt="Chowdari Haswanth"
                style={{
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  border: '6px solid #3a86ff',
                  boxShadow: '0 20px 60px rgba(58, 134, 255, 0.3)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  cursor: 'pointer',
                  objectFit: 'cover', // This ensures the image covers the circle properly
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05) rotate(2deg)';
                  e.target.style.boxShadow = '0 25px 80px rgba(58, 134, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 20px 60px rgba(58, 134, 255, 0.3)';
                }}
              />

              {/* Option 2: If you want to keep placeholder until you add photo, uncomment this:
              <div
                style={{
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  border: '6px solid #3a86ff',
                  boxShadow: '0 20px 60px rgba(58, 134, 255, 0.3)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '6rem',
                  fontWeight: 'bold',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05) rotate(2deg)';
                  e.target.style.boxShadow = '0 25px 80px rgba(58, 134, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 20px 60px rgba(58, 134, 255, 0.3)';
                }}
              >
                CH
              </div>
              */}
            </div>
          </div>
        </div>

        {/* Mobile Responsive Layout */}
        <style>
          {`
            @media (max-width: 768px) {
              .hero-grid {
                grid-template-columns: 1fr !important;
                text-align: center;
              }
              .hero-title {
                font-size: 2.5rem !important;
              }
              .hero-subtitle {
                font-size: 1.5rem !important;
              }
              .hero-photo {
                width: 250px !important;
                height: 250px !important;
                font-size: 4rem !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Hero;