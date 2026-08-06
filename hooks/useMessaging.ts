'use client';

import { useEffect } from 'react';
import { useMessaging as useMessagingContext } from '@/contexts/MessagingContext';

export default function useMessaging() {
  const { receiveMessage } = useMessagingContext();

  // No auto-messages - removed simulation
  useEffect(() => {
    // Intentionally empty - no auto-messages
  }, [receiveMessage]);
}
