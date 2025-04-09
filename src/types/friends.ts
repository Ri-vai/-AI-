export interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away' | 'busy';
  lastActive?: string;
  email?: string;
  phone?: string;
  location?: string;
  isFavorite: boolean;
}

// Cursor提示: 可以通过 @codebase 快速找到项目中所有类型定义
// 例如：@codebase 查找所有类型定义 