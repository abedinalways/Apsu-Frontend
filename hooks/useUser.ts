import { useState } from "react";
import { authService } from "@/lib/services/auth";
import type { User } from "@/lib/services/auth";

export function useUser() {
  const [user] = useState<User | null>(() => authService.getCurrentUser());

  return user;
}

export async function getUserServer() {
  try {
    return authService.getCurrentUser();
  } catch {
    return null;
  }
}
