"use client";
import { AppDispatch } from "../store";
import { signInAction } from "@/utils/graphql/auth/action";
import { SignInInput } from "@/lib/types";

export const login = (form: SignInInput) => async (dispatch: AppDispatch) => {
  try {
    const res = await signInAction({ variables: { input: form } });
    if (res?.signIn?.success) {
      return res;
    }
    return res;
  } catch (err: any) {
    return {
      message: err.message as string,
      success: false,
    };
  }
};
