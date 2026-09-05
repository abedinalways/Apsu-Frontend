'use client';

import { useState } from 'react';
import { authService } from '@/lib/services/auth';

export function useCurrentUser() {
  const [user] = useState(() => authService.getCurrentUser());

  return { user, isLoading: false };
}
