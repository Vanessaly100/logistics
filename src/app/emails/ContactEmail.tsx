import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Img,
  Button,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  fullName: string;
  email: string;
  message: string;
}

const LOGO_URL = "https://via.placeholder.com/120x60.png?text=Logistics+Logo";

export const ContactEmail = ({ fullName, email, message }: ContactEmailProps) => (
  <Html>
    <Body style={{ fontFamily: "Arial", backgroundColor: "#f6f9fc", padding: "30px" }}>
      <Container style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.05)"
      }}>
        
        {/* Header */}
        <Section style={{ textAlign: "center", marginBottom: "30px" }}>
          <Img src={LOGO_URL} alt="Logistics Logo" width="120" />
          <Heading style={{ marginTop: "20px", fontSize: "20px", color: "#333" }}>
            📦 New Contact Form Submission
          </Heading>
        </Section>

        {/* Contact details */}
        <Section>
          <Text><strong>Full Name:</strong> {fullName}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          <Text><strong>Message:</strong></Text>
          <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
        </Section>

        {/* Reply Button */}
        <Section style={{ marginTop: "30px", textAlign: "center" }}>
          <Button
            href={`mailto:${email}`}
            style={{
              backgroundColor: "#1a73e8",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Reply to Sender
          </Button>
        </Section>

        {/* Footer */}
        <Section style={{ marginTop: "40px", fontSize: "12px", color: "#888", textAlign: "center" }}>
          <Text>Logistics Company • info@yourdomain.com</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
