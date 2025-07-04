
import { Metadata } from "next";
import AirDeliveryClient from "./AirDeliveryClient"; 

export const metadata: Metadata = {
  title: "Air Delivery Services | YourCompany",
  description: "Fast and secure air cargo delivery for global logistics and express shipping.",
};

export default function AirPage() {
  return <AirDeliveryClient />;
}
