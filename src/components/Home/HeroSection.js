import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const TextContent = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0.3, x: 90 }}
      animate={isTextInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <Box sx={{ maxWidth: "500px", textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="H54px" my={2} color="textPrimary">
          Hello,
          <br />
          I'm Elif
          <br />
        </Typography>
        <Typography variant="H38px" my={2} color="textPrimary">
          Software Engineer
        </Typography>
        <Typography color="textSecondary" my={3}>
          A Software Engineer passionate about crafting innovative, user-focused solutions. With expertise in both <b>frontend</b> and <b>backend development</b>, I specialize in building modern interfaces and scalable systems. I thrive on solving real-world problems through clean, efficient, and high-quality code.
        </Typography>
        <Button
          onClick={() => scrollToSection("contact")}
          key={"contact"}
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
          <Typography>Learn More</Typography>
          <style>
            {`
              @keyframes lightBorder {
                0% {
                  left: -150%;
                }
                100% {
                  left: 150%;
                }
              }
            `}
          </style>
        </Button>

      </Box>
    </motion.div>
  );
};

const ImageContent = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <motion.div
      ref={imageRef}
      initial={{ opacity: 0.3, y: 90 }}
      animate={isImageInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          height: { xs: "350px", md: "350px" },
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/elif_pic.jpg"
          alt="Elif Toraman"
          sx={{
            objectFit: "cover",
            width: "90%",
            height: "80%",
            borderRadius: "10px",
          }}
        />
      </Box>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: { xs: 5, md: 0 },
        backgroundColor: "#FFFFF",
        padding: { xs: "35px", md: "50px" },
      }}
    >
      <TextContent />
      <ImageContent />
    </Box>
  );
};

export default HeroSection;
