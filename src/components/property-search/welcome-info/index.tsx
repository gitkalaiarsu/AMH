import Image from "next/image";

interface WelcomeInformationProps {
  username: string;
}
const WelcomeInformation = ({
  username,
}: Readonly<WelcomeInformationProps>) => {
  return (
    <div className="flex items-center justify-center w-full gap-1 mx-auto md:w-auto">
      <span className="text-xl md:text-[25.2px] leading-[100%] font-medium capitalize text-center bg-linear-to-r from-[#B5D9EF] to-[#1867D2] bg-clip-text text-transparent font-weight-500 font-satoshi">
        Hey {username}, I&apos;m Property Pulse
      </span>
      <Image
        src="/sparkles.svg"
        alt="sparkles"
        width={20}
        height={20}
        className="relative -top-3"
      />
    </div>
  );
};

export default WelcomeInformation;
