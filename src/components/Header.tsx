import React, { useState } from "react";
import { Layout } from "antd";
import { User } from "@supabase/supabase-js";

import { supabaseClient } from "../service/supabase";

import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const { Header: AntHeader } = Layout;

const Header = ({ user }: { user: User | null }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const onLogout = () => supabaseClient.auth.signOut();

  return (
    <React.Fragment>
      <LoginModal
        isModalOpen={loginModal}
        onClose={() => setLoginModal(false)}
      />
      <SignUpModal
        isModalOpen={signUpModal}
        onClose={() => setSignUpModal(false)}
      />

      <AntHeader
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <div style={{ display: "flex" }}>
          {!user ? (
            <React.Fragment>
              <div
                style={{
                  color: "white",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => setLoginModal(true)}
              >
                Login
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: ".9rem",
                  padding: "0 1em",
                }}
              >
                or
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => setSignUpModal(true)}
              >
                Sign Up
              </div>
            </React.Fragment>
          ) : (
            <div
              style={{ color: "white", fontSize: "1rem", cursor: "pointer" }}
              onClick={onLogout}
            >
              ({user.email}) - Logout
            </div>
          )}
        </div>
      </AntHeader>
    </React.Fragment>
  );
};

export default Header;
