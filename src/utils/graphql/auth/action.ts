"use server";
import { fetchGraphQLMutation } from "..";
import { SIGN_IN_MUTATION } from "./query";
import { SignInInput, SignInResponse } from "@/lib/types";

export const signInAction = async ({
  variables,
}: {
  variables: { input: SignInInput };
}): Promise<SignInResponse> => {
  const res = await fetchGraphQLMutation<SignInResponse>(
    SIGN_IN_MUTATION,
    variables,
  );
  return res as SignInResponse;
};
