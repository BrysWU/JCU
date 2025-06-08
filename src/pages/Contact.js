import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";

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
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
        Request a quote, ask a question, or schedule a mobile pickup—serving all of Volusia County!
      </Typography>
      <Box component="form" autoComplete="off" onSubmit={handleSubmit} sx={{ mb: 4 }}>
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
          >
            {status.submitting ? "Sending..." : "Send Message"}
          </Button>
          {status.success && <Alert severity="success">{status.success}</Alert>}
          {status.error && <Alert severity="error">{status.error}</Alert>}
        </Stack>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          Prefer direct contact?
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <PhoneIcon color="primary" />
          <Typography variant="body2">Call or Text: <strong>(386) 555-1234</strong></Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 1 }}>
          <EmailIcon color="primary" />
          <Typography variant="body2">Email: <strong>justinscanvasupholstery@gmail.com</strong></Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 1 }}>
          <FacebookIcon color="primary" />
          <Link href="https://www.facebook.com/JustinsMarineCanvasAndUpholstery" target="_blank" rel="noopener" underline="hover">
            Justin's Marine Canvas and Upholstery on Facebook
          </Link>
        </Stack>
      </Box>
      <Typography variant="caption" color="textSecondary">
        We proudly serve New Smyrna Beach, Daytona Beach, Port Orange, Edgewater, and all of Volusia County, FL.
      </Typography>
    </Container>
  );
}

export default Contact;