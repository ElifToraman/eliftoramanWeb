import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { motion, useInView } from "framer-motion";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const TimelineItemWithAnimation = ({ item, isLast }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TimelineItem
      sx={{
        "&::before": {
          content: '""',
          width: isSmallScreen ? "0px" : "unset",
          position: isSmallScreen ? "absolute" : "unset",
          left: isSmallScreen ? "calc(50% - 1px)" : "unset",
        }
      }}
    >
      <TimelineSeparator>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <TimelineDot
            color="primary"
            sx={{
              padding: "20px",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={item.iconImage}
              alt={item.title}
              style={{ width: "50px", height: "50px" }}
            />
          </TimelineDot>
        </a>
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 90 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            {item.title}
          </Typography>
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "18px",
                color: "#002f63",
                fontWeight: "500",
                mb: 0.5,
              }}
            >
              {item.company || item.institution}
            </Typography>
          </a>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              color: "#9e9e9e",
              fontStyle: "italic",
              mb: 1,
            }}
          >
            {item.period}
          </Typography>
          {Array.isArray(item.description) ? (
            <Box sx={{ color: "#6d6d6d" }}>
              {item.description.map((desc, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{ marginBottom: "6px" }}
                >
                  {desc}
                </Typography>
              ))}
            </Box>
          ) : (
            <Typography
              variant="body2"
              sx={{
                fontSize: "15px",
                color: "#4f4f4f",
                lineHeight: 1.6,
                textAlign: "justify",
              }}
            >
              {item.description}
            </Typography>
          )}
        </motion.div>
      </TimelineContent>
    </TimelineItem>
  );
};


const Background = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const experiences = [
    {
      category: 'WORK EXPERIENCE',
      items: [
        {
          title: 'Full-Stack Developer',
          company: 'Pokamind',
          period: '07/2023 - 09/2024',
          description: [
            "Built modern, interactive user interfaces with React.js, Next.js, and Material UI.",
            "Developed scalable backend APIs using Python/Flask and deployed on Google Cloud Platform (GCP).",
            "Collaborated with a cross-functional team to deliver high-quality web applications.",
          ],
          link: 'https://www.pokamind.com/',
          iconImage: '/pokamind-logo.svg'
        },
        {
          title: 'Web Developer Intern',
          company: 'Candidate Select GmbH',
          period: '03/2023 - 06/2023',
          description: [
            "Developed and designed components using ReactJS, React Hooks, Redux, TypeScript, and Bootstrap.",
            "Enhanced functionality and user experience by contributing to new feature development.",
            "Collaborated with the marketing team to improve the corporate website's design and performance."
          ],
          link: 'https://www.candidate-select.de/en',
          iconImage: '/case-logo.png'
        },
        {
          title: 'Frontend Developer',
          company: 'OSF Digital',
          period: '08/2021 - 08/2022',
          description: [
            "Developed features for e-commerce projects using Salesforce Commerce Cloud, JavaScript, ReactJS, and TypeScript.",
            "Ensured smooth project functionality by resolving bugs and implementing fixes.",
            "Collaborated with clients to manage expectations and deliver user-friendly web applications."
          ],
          link: 'https://osf.digital/',
          iconImage: '/osf-logo.png'
        },
      ],
    },
    {
      category: 'EDUCATION',
      items: [
        {
          title: "Master's Degree - Informatics",
          institution: 'University of Klagenfurt',
          period: '10/2024 - Current',
          link: "https://www.aau.at/en/studien/master-informatics/",
          iconImage: '/aau-logo.png'
        },
        {
          title: "Bachelor's Degree - Computer Engineering",
          institution: 'Cukurova University',
          link: "https://bmb.cu.edu.tr/",
          period: '09/2018 - 06/2023',
          iconImage: '/cu-logo.svg'
        },
        {
          title: "Bachelor's Degree - Information Engineering (Exchange Semester)",
          institution: "University POLITEHNICA of Bucharest",
          link: "https://upb.ro/en/faculties/the-faculty-of-electronics-telecommunications-and-information-technology/",
          period: "09/2021 – 02/2022",
          iconImage: '/erasmus-logo.png'
        }
      ],
    },
  ];

  return (
    <Box sx={{ padding: { xs: "35px", md: "50px", backgroundColor: "#F5FFFA" } }}>
      <Typography variant="H44px" align="center" color="textPrimary">
        My Professional Evolution
      </Typography> 
      {experiences.map((section, index) => (
        <Box key={index} mb={4} mt={3}>
          <Typography
            fontWeight={900}
            variant="H24px"
            color="textSecondary"
            borderRadius={"5px"}
            width={"fit-content"}
            justifySelf={"center"}
            padding={1}
          >
            {section.category}
          </Typography>
          <Timeline
            position={isSmallScreen ? "unset" : "alternate"}
            sx={{
              "&::before": {
                content: '""',
                width: isSmallScreen ? "0px" : "unset",
                position: isSmallScreen ? "absolute" : "unset",
                left: isSmallScreen ? "calc(50% - 1px)" : "unset",
              },
            }}
          >
          {section.items.map((item, i) => (
            <TimelineItemWithAnimation
              key={i}
              item={{
                ...item,
                description: Array.isArray(item.description) ? (
                  <div style={{ color: "#6d6d6d" }}>
                    {item.description.map((desc, idx) => (
                      <Box
                        key={idx}
                        display="flex"
                        alignItems="center"
                        sx={{ marginBottom: "6px" }}
                      >
                        <CircleOutlinedIcon
                          fontSize="xssmall"
                          sx={{ marginRight: "8px", color: "#6d6d6d" }}
                        />
                        <Typography textAlign={{xs: "start", md: "unset"}} variant="body2">{desc}</Typography>
                      </Box>
                    ))}
                  </div>
                ) : (
                  <Typography variant="body2">{item.description}</Typography>
                ),
              }}
              isLast={i === section.items.length - 1}
            />
          ))}
          </Timeline>
        </Box>
      ))}
    </Box>
  );
};

export default Background;
