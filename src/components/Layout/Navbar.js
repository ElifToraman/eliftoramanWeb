import React, { useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box, Link} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFFFF", boxShadow: "none", paddingTop: 1.5 }}>
      <Toolbar sx={{ justifyContent: { xs: "space-between", md: "space-around" } }}>
        <Link href="/" underline="none">
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              height: { xs: '30px', sm: '40px' },
              borderRadius: "10px",
              cursor: "pointer" 
            }}
          />
        </Link>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {[
            { label: "Home", id: "hero" },
            { label: "About", id: "about" },
            { label: "Background", id: "experience" },
            { label: "Services", id: "services" },
          ].map((item) => (
            <Typography
              key={item.id}
              variant="H24px"
              color="textPrimary"
              onClick={() => scrollToSection(item.id)}
              sx={{ cursor: "pointer" }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
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
          <Typography>Hire Me</Typography>
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
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ color: "#6bb08b", fontSize: "35px" }} />
        </IconButton>
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Background", id: "experience" },
                { label: "Services", id: "services" },
              ].map((item) => (
                <ListItem button key={item.id} onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
            <Box textAlign="center" mt={2}>
              <Button
                onClick={() => scrollToSection("contact")}
                key={"contact"}
                variant="contained"
                sx={{
                  backgroundColor: "#6bb08b",
                  color: "white",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#e04e4e" },
                }}
              >
               <Typography variant="body1">Hire Me</Typography> 
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;