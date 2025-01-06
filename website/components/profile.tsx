"use client";

import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from '@/utils/client';

export const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const supabase = createClient();
        
        // Get current session
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user) {
          setLoading(false);
          return;
        }

        // Fetch user profile from users table
        const { data, error } = await supabase
          .from('users')
          .select('name, email')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.log('Error fetching user profile:', error);
          // Fallback to session email if profile fetch fails
          setUserProfile({
            name: session.user.email?.split('@')[0] || 'User',
            email: session.user.email || ''
          });
        } else {
          setUserProfile({
            name: data.name || session.user.email?.split('@')[0] || 'User',
            email: data.email || session.user.email || ''
          });
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg animate-pulse">
        <div className="h-10 w-10 rounded-full bg-gray-700" />
        <div className="space-y-2">
          <div className="h-4 w-20 bg-gray-700 rounded" />
          <div className="h-3 w-32 bg-gray-700 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
      <User className="h-10 w-10 text-white rounded-full bg-gray-700 p-2" />
      <div>
        <p className="text-sm font-medium">{userProfile.name}</p>
        <p className="text-xs text-gray-400">{userProfile.email}</p>
      </div>
    </div>
  );
};