import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Grid } from "@mui/system";
import { motion, useInView, useAnimation } from "framer-motion";

const servicesData = [
  {
    title: "Web Development",
    description:
      "I design and develop tailor-made websites that reflect your vision and goals. Whether you need a minimalistic platform or a dynamic, feature-rich website, I create solutions from scratch to meet your specific requirements.",
    image: "/web_development.jpg",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "I help optimize your operations by designing scalable cloud solutions and automating workflows. With robust and secure infrastructure, I ensure your applications perform seamlessly and adapt to your growing needs.",
    image: "/devops.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "I create intuitive and visually striking user experiences that captivate your audience. From wireframes to prototypes, I focus on blending functionality with aesthetics to make your digital presence truly stand out.",
    image: "/design.jpeg",
  },
];

const ServiceCard = ({ title, description, index, image }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const isInView = useInView(cardRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.9, delay: index * 0.5 },
      });
    };

    const intervalId = setInterval(() => {
      if (!hovered) {
        startAnimation();
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [controls, hovered, index]);

  return (
    
    <Grid size={{ xs: 12, sm: 5.5, md: 3.5, lg: 3 }} ref={cardRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: index * 0.3 }}
      >
        <motion.div animate={controls}>
          <Card
            sx={{
              backgroundColor: hovered ? "#00203b" : "transparent",
              p: 5,
              borderRadius: 5,
              border: "1px solid #6bb08b",
              boxShadow: "none",
              transition: "transform 0.3s, background-color 0.6s",
              position: "relative",
              height: 250,
              overflow: "hidden",
              "&:hover": { transform: "scale(1.02)" },
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${image})`,
                backgroundSize: hovered ? "160%" : "cover",
                backgroundPosition: "center",
                opacity: hovered ? 0 : 0.3,
                transition: "background-size 2s ease, opacity 0.6s ease",
                zIndex: 1,
              }}
            />
            {!hovered && (
              <CardContent
                sx={{
                  mt: 0,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" color="textPrimary" align="center" fontWeight={900}>
                  {title}
                </Typography>
              </CardContent>
            )}
            <motion.div
              style={{
                display: hovered ? "flex" : "none",
                zIndex: 2,
                textAlign: "center",
                alignItems: "center",
                height: "100%",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="body2"
                align="center"
                color="white"
                sx={{ margin: "auto" }}
              >
                {description}
              </Typography>
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>
    </Grid>
  );
};

const Services = () => {
  return (
    <Box sx={{ backgroundColor: "#FFFFF", padding: { xs: "50px", md: "100px 50px 100px 50px" },  }}>
      <Typography variant="h4" align="center" color="textPrimary">
        What Services I'm Providing
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={5} >
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
