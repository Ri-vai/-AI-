import { Friend } from '@/types/friends';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

interface FriendItemProps {
  friend: Friend;
  onToggleFavorite: (id: string) => void;
}

// Cursor提示: "优化这个组件的渲染性能"
export default function FriendItem({ friend, onToggleFavorite }: FriendItemProps) {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500'
  };

  const statusLabels = {
    online: '在线',
    offline: '离线',
    away: '离开',
    busy: '忙碌'
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 rounded-xl">
      <div className="relative mr-4">
        <Image
          src={friend.avatar}
          alt={friend.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${statusColors[friend.status]} border-2 border-white`} />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">{friend.name}</h3>
          <button 
            onClick={() => onToggleFavorite(friend.id)} 
            className="text-gray-400 hover:text-yellow-500 transition-colors"
            aria-label={friend.isFavorite ? "移除收藏" : "添加收藏"}
          >
            {friend.isFavorite ? (
              <StarIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <StarOutlineIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <span className="inline-flex items-center mr-3">
            <span className={`h-2 w-2 rounded-full ${statusColors[friend.status]} mr-1`}></span>
            {statusLabels[friend.status]}
          </span>
          {friend.lastActive && <span>{friend.lastActive}</span>}
        </div>
        
        {friend.location && (
          <p className="text-xs text-gray-400 mt-1">{friend.location}</p>
        )}
      </div>
    </div>
  );
}

// Cursor提示: "这个组件如何处理大头像加载失败的问题？" 