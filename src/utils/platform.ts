import type { SocialLink } from '../types';

export function getPlatformIcon(platform: string): string {
  const platformMap: Record<string, string> = {
    tiktok: 'TikTok',
    instagram: 'Instagram',
    youtube: 'Youtube'
  };
  
  return platformMap[platform.toLowerCase()] || 'Share2';
}

export function getPlatformColors(platform: string): string {
  const colorMap: Record<string, string> = {
    tiktok: 'bg-black hover:bg-gray-900',
    instagram: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600',
    youtube: 'bg-red-600 hover:bg-red-700'
  };
  
  return colorMap[platform.toLowerCase()] || 'bg-gray-600 hover:bg-gray-700';
}

export function formatFollowerCount(count: string): string {
  return count.replace(/(\d+)([km])/i, (match, num, unit) => {
    return `${num}${unit.toUpperCase()}`;
  });
}