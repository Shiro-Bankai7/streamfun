export interface User {
  id: string;
  email: string;
  username: string;
  avatar_url?: string;
  bio?: string;
  tokens: number;
  total_donated: number;
  total_received: number;
  follower_count: number;
  following_count: number;
  created_at: string;
  is_streamer: boolean;
  stream_key?: string;
  badges: Badge[];
}

export interface Stream {
  id: string;
  streamer_id: string;
  title: string;
  description: string;
  category: string;
  is_live: boolean;
  viewer_count: number;
  started_at: string;
  ended_at?: string;
  thumbnail_url?: string;
  donation_goal?: number;
  current_donations: number;
  subathon_active: boolean;
  subathon_end_time?: string;
  subathon_base_duration: number;
  chat_delay: number;
  subscriber_only_chat: boolean;
}

export interface ChatMessage {
  id: string;
  stream_id: string;
  user_id: string;
  username: string;
  message: string;
  timestamp: string;
  is_moderator: boolean;
  is_subscriber: boolean;
  badges: Badge[];
  tokens_burned?: number;
}

export interface Donation {
  id: string;
  stream_id: string;
  donor_id: string;
  donor_username: string;
  amount: number;
  message?: string;
  timestamp: string;
  is_anonymous: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  requirements?: string;
}

export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  type: 'earned' | 'burned' | 'gifted';
  description: string;
  stream_id?: string;
  timestamp: string;
}

export interface Achievement {
  id: string;
  user_id: string;
  type: string;
  title: string;
  description: string;
  unlocked_at: string;
  badge_id?: string;
}