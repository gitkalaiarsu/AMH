import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { FeatureCardType } from "@/types/property-search";
import FeatureCard from "./feature-card";

interface PropertyFeaturesProps {
  featureCards: FeatureCardType[];
}

const PropertyFeatures = ({
  featureCards,
}: Readonly<PropertyFeaturesProps>) => {
  const { isSidebarOpen } = useAppSelector((state: RootState) => state.layout);

  return (
    <div
      className={`grid gap-3 w-full ${
        isSidebarOpen
          ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {featureCards.map((card) => (
        <FeatureCard key={card?.id} card={card} />
      ))}
    </div>
  );
};

export default PropertyFeatures;