interface MatchingPropertyProps {
  totalResults: number;
}

const MatchingProperty = ({
  totalResults,
}: Readonly<MatchingPropertyProps>) => {
  return (
    <div className="w-full bg-[#427EFF] rounded-[10px] min-h-13.25 px-4 md:px-6 mb-6 flex items-center justify-between">
      <div className="flex flex-col justify-center h-full py-1">
        <h2 className="text-[18px] md:text-[20px] text-white capitalize leading-none font-satoshi">
          Matching properties
        </h2>
        <div className="flex items-center gap-1 mt-1 text-white text-[10px] md:text-xs font-medium font-satoshi">
          <span>Lake Dallas, TX</span>
          <div className="w-1 h-1 bg-white rounded-full" />
          <span>Pool</span>
          <div className="w-1 h-1 bg-white rounded-full" />
          <span>Vacant</span>
        </div>
      </div>

      <div className="text-[32px] md:text-[42px] font-medium text-white tracking-[-0.02em] leading-[70%] font-satoshi">
        {totalResults}
      </div>
    </div>
  );
};

export default MatchingProperty;
