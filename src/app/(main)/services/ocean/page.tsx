
import { Metadata } from "next";
import OceanDelivery from "./OceanDelivery";

export const metadata: Metadata ={
    title: "Ocean Freight Shipping | YourCompany",
    description:
      "Cost-effective international shipping through sea freight. YourCompany handles full container loads, documentation & customs.",
    keywords: [
      "ocean freight",
      "sea shipping",
      "international logistics",
      "FCL shipping",
      "LCL shipping"
    ],
    openGraph: {
      title: "Ocean Freight Shipping | YourCompany",
      description: "Reliable ocean cargo transport for global logistics.",
      type: "website",
      url: "https://yourdomain.com/services/ocean",
      images: ["/assets/og-ocean-freight.jpg"]
    }
  };
  

export default function AirPage() {
  return <OceanDelivery />;
}
