
import { Metadata } from "next";
import RoadDelivery from "./RoadDelivery";

export const metadata: Metadata ={
        title: "Road Freight Services | YourCompany",
        description:
          "Domestic and regional ground logistics using trucks and trailers. Road freight you can trust from YourCompany.",
        keywords: [
          "road freight",
          "truck delivery",
          "ground logistics",
          "regional shipping",
          "cargo transport"
        ],
        openGraph: {
          title: "Road Freight Services | YourCompany",
          description: "Dependable regional ground logistics and delivery services.",
          type: "website",
          url: "https://yourdomain.com/services/road",
          images: ["/assets/og-road-freight.jpg"]
        }
      };
      
  

export default function AirPage() {
  return <RoadDelivery />;
}
