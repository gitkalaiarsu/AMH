import { gql, DocumentNode } from "@apollo/client";

export const SIGN_IN_MUTATION: DocumentNode = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      accessToken
      message
      refreshToken
      success
      token
      user {
        active_status
        avatar_path
        created_at
        email
        first_name
        id
        last_login_at
        last_name
        phone
        platform
        role
        updated_at
        profile {
          timezone
          session_description
          session_topic
          specialization
        }
      }
    }
  }
`;
