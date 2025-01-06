import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const TextSection = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0, x: -90 }}
      animate={isTextInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <Box sx={{ textAlign: { xs: "start" } }}>
        <Typography variant="H44px" color="textPrimary" sx={{ fontWeight: "bold" }}>
          Thriving on Challenges, Multitasking, and Global Perspectives
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            marginBottom: 4,
            marginTop: 2
          }}
        >
          A software engineer who thrives in dynamic environments where challenges fuel creativity. With a proven ability to manage multiple projects and deliver results under tight deadlines, I bring strong multitasking and time management skills to every endeavor.
          Having worked with global teams and experienced diverse cultures, I’m passionate about pushing boundaries, embracing new ideas, and continuously growing both personally and professionally. Whether it’s building innovative solutions or adapting to complex environments, I approach every opportunity with enthusiasm and resilience.
        </Typography>
        <Button
          onClick={() => scrollToSection("contact")}
          variant="contained"
          sx={{
            position: "relative",
            backgroundColor: "#6bb08b",
            color: "white",
            textTransform: "none",
            overflow: "hidden",
            "&:hover": { backgroundColor: "#46735b" },
            "::before": {
              content: '""',
              position: "absolute",
              top: 50,
              left: "150%",
              width: "300%",
              height: "100%",
              background: "linear-gradient(to right, transparent, rgba(255, 202, 202, 0.6), transparent)",
              zIndex: 1,
              transform: "rotate(45deg)",
              animation: "lightBorder 3.5s infinite",
            },
          }}
        >
          <Typography>Contact Me</Typography>
        </Button>
      </Box>
    </motion.div>
  );
};

const AboutMe = () => {
  return (
    <Box
      sx={{
        background: "url('/background.jpg') no-repeat center center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        justifyContent: "start",
        display: "flex",
        padding: { xs: "35px", md: "50px" },
      }}
    >
      <Box
        sx={{
     
          width: {xs: "90%", sm: "70%", md: "40%", lg: "40%" },
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(5px)",
          padding: { xs: "35px", md: "50px" },
          borderRadius: "8px",
          maxWidth: "900px",
          margin: "0 auto",    
        }}
      >
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextSection />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
