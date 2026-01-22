import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/ui/property-card";
import { useRouter } from "next/navigation";
import { PRIVATE_PATH } from "@/utils/constant";
import { SavedPropertyType } from "@/types/property";

interface SavedPropertyProps {
  savedProperties: SavedPropertyType[];
}
const SavedProperty = ({ savedProperties }: Readonly<SavedPropertyProps>) => {
  console.log(savedProperties, "SSSS");
  const router = useRouter();
  const handleViewAllClick = () => {
    router.push(PRIVATE_PATH.PROPERTY_DETAIL);
  };

  return (
    <div className="mb-8 w-full max-w-238.5 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Image
            src="/saved.svg"
            alt="saved"
            width={20}
            height={20}
            className="object-contain w-5 h-5"
          />
          <h2 className="text-lg font-satoshi bg-(image:--saved-title-bg) text-(--saved-title-color) bg-clip-text">
            Saved Property
          </h2>
        </div>
        <Button
          variant="link"
          className="h-auto p-0 underline text-primary hover:text-primary/80 font-satoshi"
          aria-label="View all saved properties"
          onClick={handleViewAllClick}
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {savedProperties?.map((saved) => (
          <PropertyCard
            key={saved?.property?.propertyId}
            property={saved?.property}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedProperty;
