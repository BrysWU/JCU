import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";

const WEB3FORMS_KEY = "18d45aee-e6fa-4c0b-a751-8b5a33210dd8"; //

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, success: null, error: null });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });
    const data = {
      access_key: WEB3FORMS_KEY,
      subject: "New Quote Request",
      ...form,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus({ submitting: false, success: "Message sent! We'll get back to you as soon as possible.", error: null });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch (err) {
      setStatus({ submitting: false, success: null, error: err.message });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
          Request a quote, ask a question, or schedule a mobile pickup—serving all of Volusia County!
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" color="primary" gutterBottom>
              Send Us a Message
            </Typography>
            <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={5}
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  disabled={status.submitting}
                  sx={{ py: 1.5 }}
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                </Button>
                {status.success && <Alert severity="success">{status.success}</Alert>}
                {status.error && <Alert severity="error">{status.error}</Alert>}
              </Stack>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Card elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Contact Information
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      Call or Text
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      (386) 555-1234
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      Email
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      justinscanvasupholstery@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FacebookIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      Facebook
                    </Typography>
                    <Link href="https://www.facebook.com/kingofcanvas" target="_blank" rel="noopener" underline="hover">
                      Justin's Marine Canvas and Upholstery
                    </Link>
                  </Box>
                </Box>
              </Stack>
            </Card>

            <Card elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Service Areas
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="body1" fontWeight="bold">
                  Volusia County, Florida
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ pl: 4 }}>
                New Smyrna Beach<br/>
                Daytona Beach<br/>
                Port Orange<br/>
                Edgewater<br/>
                And surrounding areas
              </Typography>
            </Card>

            <Card elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Business Hours
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="body1" fontWeight="bold">
                  Flexible Scheduling
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ pl: 4 }}>
                Monday - Friday: 8:00 AM - 6:00 PM<br/>
                Saturday: 9:00 AM - 4:00 PM<br/>
                Sunday: By appointment<br/>
                Emergency repairs available
              </Typography>
            </Card>
          </Stack>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Why Choose Our Mobile Service?
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <DirectionsBoatIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="body2" color="textSecondary">
                Free pickup & delivery
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <LocalCarWashIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="body2" color="textSecondary">
                On-site consultations
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="body2" color="textSecondary">
                Flexible scheduling
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="body2" color="textSecondary">
                Quick response times
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;