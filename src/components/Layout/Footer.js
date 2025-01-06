import React from "react";
import { Box, Link, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

const Footer = () => {
  const handleScrollToTop = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#444",
        color: "#fff",
        textAlign: "center",
        py: 3,
        mt: "auto",
      }}
    >
      <Box
        sx={{ mb: 2, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={handleScrollToTop}
      >
        Back to Top
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 2 }}>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/elif-toraman/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#fff",
            color: "#0077b5",
            "&:hover": { backgroundColor: "#e0f2fe" },
            width: "50px",
            height: "50px",
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com/ElifToraman"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            "&:hover": { backgroundColor: "#e0e0e0" },
            width: "50px",
            height: "50px",
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          component={Link}
          href="mailto:eliftoraman99@gmail.com"
          sx={{
            backgroundColor: "#fff",
            color: "#d93025",
            "&:hover": { backgroundColor: "#fdecea" },
            width: "50px",
            height: "50px",
          }}
        >
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
