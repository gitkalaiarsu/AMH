import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldAlert, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-background font-[family-name:var(--font-satoshi)]">
      <Card className="w-full max-w-[90%] sm:max-w-md text-center bg-[#12121a] border-[#1e1e2e] shadow-2xl p-4 sm:p-6">
        <CardHeader className="gap-3 p-0">
          <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1a1a25] flex items-center justify-center border border-[#2a2a3a]">
            <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-[#2F6FED]" />
          </div>
          <CardTitle className="text-xl font-semibold text-white sm:text-2xl">
            Page Not Found
          </CardTitle>
          <CardDescription className="text-[#8b8b9e] text-sm sm:text-base">
            The page you are looking for doesn&apos;t exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 pt-1 sm:pt-1">
          <Button
            asChild
            className="bg-[#2F6FED] text-white font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-colors text-sm sm:text-base"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4 text-white" />
              Go to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
