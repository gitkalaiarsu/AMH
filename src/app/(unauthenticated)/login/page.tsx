"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/ui/loader";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    const handleLogin = () => {
      const clientId = process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID;
      const tenantId = process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID;
      const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URL ?? "";
      const scope = process.env.NEXT_PUBLIC_AZURE_SCOPE ?? "";

      if (!clientId || !tenantId) {
        console.error("Azure AD config missing");
        return;
      }

      const queryParams = new URLSearchParams({
        client_id: clientId,
        response_type: "code",
        redirect_uri: redirectUri,
        scope: scope,
        response_mode: "query",
      });

      const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?${queryParams.toString()}`;

      globalThis.window.location.href = authUrl;
    };

    if (!error) {
      handleLogin();
    }
  }, [error]);

  if (error) {
    console.log(error, "Error message");
  }

  return <Loading />;
}