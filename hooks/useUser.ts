import { useEffect, useState } from "react";
import { authService } from "@/lib/services/auth";
import type { User } from "@/lib/services/auth";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    try {
      const userData = authService.getCurrentUser();
      setUser(userData);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return user;
}

export async function getUserServer() {
  try {
    return authService.getCurrentUser();
  } catch {
    return null;
  }
}
