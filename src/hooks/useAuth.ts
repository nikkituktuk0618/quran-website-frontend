// src/hooks/useAuth.ts
import { useState, useEffect } from "react";

type Role = "admin" | "user" | "";

const useAuth = (): Role => {
  const [role, setRole] = useState<Role>("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token){
        setRole("")
        return;
    } ;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const { exp, role } = payload;

      if (Date.now() < exp * 1000) {
        setRole(role);
      }
    } catch (e) {
      console.error("Invalid token", e);
    }
  }, []);

  return role;
};

export default useAuth;
