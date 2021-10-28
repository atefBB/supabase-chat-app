import { supabaseClient } from "../service/supabase";

const useAuth = () => {
  const signIn = (email: string, password: string) =>
    supabaseClient.auth.signIn({ email, password });

  const signUp = (email: string, password: string) =>
    supabaseClient.auth.signUp({ email, password });

  const getSession = () => {
    const session = supabaseClient.auth.session();
    return session;
  };

  return {
    signUp,
    signIn,
    getSession,
  };
};

export default useAuth;
