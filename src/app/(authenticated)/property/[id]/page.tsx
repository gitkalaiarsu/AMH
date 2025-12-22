import DetailedProperty from "@/components/property-detailed";

interface PageProps {
  params: Promise<{ id: string }>;
}

const PropertyDetailedPage = async (props: PageProps) => {
  const params = props.params;
  return <DetailedProperty params={params} />;
};

export default PropertyDetailedPage;
