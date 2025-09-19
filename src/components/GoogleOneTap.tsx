import React, { useEffect } from 'react';
import { supabase } from '../lib/supabase';

const GoogleOneTap = ({ onSignIn }: { onSignIn?: (user: any) => void }) => {
  useEffect(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    if (!clientId) {
      console.error('Google Client ID is not set in environment variables.');
      return;
    }
    // Load Google One Tap script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.google && window.google.accounts && window.google.accounts.id) {
        // @ts-ignore
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: async (response: any) => {
            // Supabase sign in with Google One Tap
            const { data, error } = await supabase.auth.signInWithIdToken({
              provider: 'google',
              token: response.credential,
            });
            if (error) {
              console.error('Error signing in with Supabase:', error.message);
            } else {
              console.log('User signed in with Supabase:', data.user);
              if (onSignIn) onSignIn(data.user);
            }
          },
          auto_select: false,
          cancel_on_tap_outside: false,
        });
        // @ts-ignore
        window.google.accounts.id.prompt();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [onSignIn]);

  return null;
};

export default GoogleOneTap;
