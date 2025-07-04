
import Script from "next/script";

interface StructuredDataProps {
  data: object;
  id?: string;
}

export const StructuredData = ({ data, id = "structured-data" }: StructuredDataProps) => (
  <Script
    id={id}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
