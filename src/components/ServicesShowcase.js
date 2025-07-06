import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";

const services = [
  {
    icon: <DirectionsBoatIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: "Marine Canvas & Upholstery",
    description: "Custom boat covers, bimini tops, enclosures, and complete marine upholstery restoration.",
    features: [
      "Boat covers & bimini tops",
      "Marine upholstery restoration",
      "Snap-in carpets & sunpads",
      "Enclosures & dodgers",
      "Cushion & seat repairs"
    ]
  },
  {
    icon: <LocalCarWashIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: "Auto Upholstery & Convertible Tops",
    description: "Complete automotive interior work including seats, convertible tops, headliners, and door panels.",
    features: [
      "Car & truck seat repair",
      "Convertible top replacement",
      "Headliner installation",
      "Door panel restoration",
      "Classic car restoration"
    ]
  },
  {
    icon: <HomeIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: "Custom Sewing & Home Projects",
    description: "From patio furniture to business awnings, we handle all types of custom sewing projects.",
    features: [
      "Patio cushions & covers",
      "Business & home awnings",
      "Pet beds & accessories",
      "Custom pillows & cushions",
      "Repairs & alterations"
    ]
  },
  {
    icon: <BuildIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: "Repairs & Restoration",
    description: "Expert repair services for damaged upholstery, canvas, and fabric items of all kinds.",
    features: [
      "Tear & hole repairs",
      "Zipper replacements",
      "Stitching & seam work",
      "Waterproofing treatments",
      "UV protection coatings"
    ]
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: "Mobile Service",
    description: "Convenient pickup and delivery service throughout Volusia County - we come to you!",
    features: [
      "Free pickup & delivery",
      "On-site consultations",
      "Emergency repairs",
      "Weekend appointments",
      "Same-day service available"
    ]
  },
  {
    icon: <StarIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: "Premium Quality Guarantee",
    description: "We stand behind our work with quality materials and expert craftsmanship on every project.",
    features: [
      "Marine-grade materials",
      "UV-resistant fabrics",
      "Weatherproof coatings",
      "Lifetime workmanship",
      "Free estimates"
    ]
  }
];

function ServicesShowcase() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Our Complete Service Lineup
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
          From marine canvas to auto upholstery, we handle it all with professional quality
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card 
              elevation={3} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                  '& .service-icon': {
                    transform: 'scale(1.1)',
                    color: 'secondary.main'
                  }
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                <Box 
                  className="service-icon"
                  sx={{ 
                    mb: 3,
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {service.icon}
                </Box>
                
                <Typography 
                  variant="h6" 
                  color="primary" 
                  gutterBottom
                  sx={{ fontWeight: 'bold', mb: 2 }}
                >
                  {service.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="textSecondary" 
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  {service.description}
                </Typography>
                
                <Box sx={{ textAlign: 'left' }}>
                  {service.features.map((feature, featureIndex) => (
                    <Typography 
                      key={featureIndex}
                      variant="body2" 
                      sx={{ 
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        '&::before': {
                          content: '"✓"',
                          color: 'secondary.main',
                          fontWeight: 'bold',
                          mr: 1,
                          fontSize: '1.2em'
                        }
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Don't see what you need?
        </Typography>
        <Typography variant="body1" color="textSecondary">
          We take on custom projects of all kinds. <strong>Contact us to discuss your specific needs!</strong>
        </Typography>
      </Box>
    </Container>
  );
}

export default ServicesShowcase; 