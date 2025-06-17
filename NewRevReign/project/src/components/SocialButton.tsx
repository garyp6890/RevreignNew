import React from 'react';
import { Share2, MessageSquare } from 'lucide-react';

interface SocialButtonProps {
  platform: 'tiktok' | 'instagram' | 'youtube';
  username: string;
  followers: string;
  url: string;
  icon: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ platform, username, followers, url, icon }) => {
  const platformColors = {
    tiktok: 'bg-black hover:bg-gray-900',
    instagram: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600',
    youtube: 'bg-red-600 hover:bg-red-700'
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Follow ${username} on ${platform}`,
        url: url
      }).catch(error => console.log('Error sharing', error));
    } else {
      window.open(`https://twitter.com/intent/tweet?text=Check out ${username} on ${platform}&url=${url}`, '_blank');
    }
  };

  const handleMessage = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-md bg-rev-dark rounded-xl overflow-hidden shadow-xl mx-auto mb-8">
      <div className={`${platformColors[platform]} p-5 text-white flex items-center`}>
        <div className="mr-4">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{username}</h3>
          <p className="text-sm opacity-80">{followers}</p>
        </div>
      </div>
      
      <div className="p-4 bg-rev-light">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-4 rounded-lg w-full block text-center mb-3 transition-colors"
        >
          Follow
        </a>
        
        <div className="flex space-x-2">
          <button 
            onClick={handleMessage}
            className="flex-1 bg-rev-brown hover:bg-rev-dark text-white font-medium py-2 px-3 rounded-lg flex items-center justify-center transition-colors"
          >
            <MessageSquare size={16} className="mr-2" />
            Message
          </button>
          <button 
            onClick={handleShare}
            className="flex-1 bg-rev-brown hover:bg-rev-dark text-white font-medium py-2 px-3 rounded-lg flex items-center justify-center transition-colors"
          >
            <Share2 size={16} className="mr-2" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialButton;