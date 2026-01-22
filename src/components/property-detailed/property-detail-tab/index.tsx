"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "./section-header";
import { FeatureList } from "./feature-list";
import type { PropertyFeatures } from "@/types/property";

interface PropertyFeaturesTabProps {
  features: PropertyFeatures;
}

export function PropertyFeaturesTab({
  features,
}: Readonly<PropertyFeaturesTabProps>) {
  return (
    <div className="rounded-[10px] bg-[color:var(--features-bg)] shadow-[var(--features-shadow)] lg:col-span-3 text-base lg:text-[18px] font-satoshi h-auto lg:h-127.5 overflow-hidden transition-colors duration-300">
      <Tabs defaultValue="futures" className="flex flex-col w-full h-full">
        {/* Tab Headers Container */}
        <div className="w-full shrink-0 bg-[color:var(--features-header-bg)] rounded-[10px] p-2 sm:p-3 border-b border-white/5 transition-colors duration-300">
          <TabsList className="grid w-full h-auto grid-cols-3 gap-2 p-0 bg-transparent sm:gap-4 lg:gap-6">
            {["futures", "internal", "details"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="
                  px-2 sm:px-4 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base font-medium transition-all duration-200 cursor-pointer
                  border-b-2 rounded-none
                  
                  data-[state=active]:bg-transparent 
                  data-[state=active]:text-[color:var(--tab-text-active)] 
                  data-[state=active]:border-b-[color:var(--tab-border-active)]
                  
                  data-[state=inactive]:bg-transparent 
                  data-[state=inactive]:text-[color:var(--tab-text-inactive)] 
                  data-[state=inactive]:border-b-[color:var(--tab-border-inactive)]
                  
                  hover:data-[state=inactive]:text-[color:var(--tab-text-active)]
                "
              >
                <span className="capitalize sm:hidden">{tab}</span>
                <span className="hidden capitalize sm:inline">
                  {tab === "futures" ? "Property Futures" : `${tab} Details`}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent
          value="futures"
          className="flex-1 px-4 py-4 mt-0 overflow-y-auto sm:px-6 sm:py-5 lg:px-10 lg:py-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Passed variant instead of icon path */}
              <SectionHeader variant="house" title="Property Futures" />

              <FeatureList
                title="Garage & Parking"
                items={features.garageAndParking}
              />
              <FeatureList
                title="Yard & Exterior"
                items={features.yardAndExterior}
              />
            </div>

            <div className="flex flex-col gap-6 lg:gap-8">
              <SectionHeader variant="interior" title="Internal Features" />

              <FeatureList title="Kitchen" items={features.kitchen} />
              <FeatureList
                title="Bedroom & Bath"
                items={features.bedroomAndBath}
              />
              <FeatureList
                title="Flooring & Finish"
                items={features.flooringAndFinish}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="internal"
          className="flex-1 px-4 py-4 mt-0 overflow-y-auto sm:px-6 sm:py-5 lg:px-10 lg:py-6"
        >
          <p className="text-(--features-text-secondary)">
            Internal details content coming soon...
          </p>
        </TabsContent>

        <TabsContent
          value="details"
          className="flex-1 px-4 py-4 mt-0 overflow-y-auto sm:px-6 sm:py-5 lg:px-10 lg:py-6"
        >
          <p className="text-(--features-text-secondary)">
            Property details content coming soon...
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}