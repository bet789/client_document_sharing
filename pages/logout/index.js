import React, { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("infoUsers");
    window.location.replace("/signin");
  }, []);
  return <div></div>;
}
