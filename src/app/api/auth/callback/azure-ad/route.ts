import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  // Handle error from Azure AD
  if (error) {
    let userMessage = errorDescription || "Authentication failed";

    if (error === "access_denied") {
      userMessage = "You denied access to the application";
    } else if (error === "invalid_client") {
      userMessage = "Application configuration error";
    }

    return NextResponse.redirect(
      new URL(
        `/login?error=${error}&message=${encodeURIComponent(userMessage)}`,
        request.url
      )
    );
  }

  // Check if code exists
  if (!code) {
    return NextResponse.redirect(
      new URL(
        "/login?error=NoCode&message=No authorization code received from Microsoft",
        request.url
      )
    );
  }
}