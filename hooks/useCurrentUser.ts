'use client';

import { useState, useEffect } from 'react';
import { authService } from '@/lib/services/auth';

export function useCurrentUser() {
  const [user, setUser] = useState(() => authService.getCurrentUser());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(authService.getCurrentUser());
    setIsLoading(false);
  }, []);

  return { user, isLoading };
}
