"use client"

import { useEffect, useState } from 'react';
import { Friend } from '@/types/friends';
import { getFriends } from '@/services/friendService';
import FriendItem from './FriendItem';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function FriendList() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFriends = async () => {
      try {
        setLoading(true);
        const data = await getFriends();
        setFriends(data);
        setFilteredFriends(data);
        setLoading(false);
      } catch (err) {
        setError('加载好友列表失败，请稍后重试');
        setLoading(false);
        console.error('Failed to load friends:', err);
      }
    };

    loadFriends();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredFriends(friends);
    } else {
      const filtered = friends.filter(friend => 
        friend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (friend.email && friend.email.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredFriends(filtered);
    }
  }, [searchTerm, friends]);

  const handleToggleFavorite = (id: string) => {
    setFriends(prevFriends => 
      prevFriends.map(friend => 
        friend.id === id 
          ? { ...friend, isFavorite: !friend.isFavorite } 
          : friend
      )
    );
  };

  // 按照收藏和在线状态排序
  const sortedFriends = [...filteredFriends].sort((a, b) => {
    // 先按收藏排序
    if (a.isFavorite && !b.isFavorite) return -1;
    if (!a.isFavorite && b.isFavorite) return 1;
    
    // 再按在线状态排序
    if (a.status === 'online' && b.status !== 'online') return -1;
    if (a.status !== 'online' && b.status === 'online') return 1;
    
    // 最后按名字排序
    return a.name.localeCompare(b.name);
  });

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索好友..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="max-h-[600px] overflow-y-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : sortedFriends.length > 0 ? (
          sortedFriends.map(friend => (
            <FriendItem 
              key={friend.id} 
              friend={friend} 
              onToggleFavorite={handleToggleFavorite} 
            />
          ))
        ) : (
          <div className="text-center p-8 text-gray-500">没有找到匹配的好友</div>
        )}
      </div>
    </div>
  );
}

// Cursor提示: "@codebase 查找项目中使用了哪些图标库"
// Cursor提示: "生成单元测试用例检测列表排序功能" 