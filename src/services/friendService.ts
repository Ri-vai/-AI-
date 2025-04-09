import { Friend } from '@/types/friends';

// 假数据生成
// Cursor提示: "请帮我生成更多样化的假数据来测试不同状态下的界面表现"
export const getFriends = async (): Promise<Friend[]> => {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: '王小明',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          status: 'online',
          lastActive: '刚刚',
          email: 'xiaoming@example.com',
          phone: '138****1234',
          location: '上海',
          isFavorite: true
        },
        {
          id: '2',
          name: '李华',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          status: 'offline',
          lastActive: '3小时前',
          email: 'lihua@example.com',
          phone: '139****5678',
          location: '北京',
          isFavorite: false
        },
        {
          id: '3',
          name: '张三',
          avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          status: 'away',
          lastActive: '1天前',
          email: 'zhangsan@example.com',
          phone: '137****9012',
          location: '广州',
          isFavorite: true
        },
        {
          id: '4',
          name: '赵小红',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          status: 'busy',
          lastActive: '刚刚',
          email: 'xiaohong@example.com',
          phone: '136****3456',
          location: '深圳',
          isFavorite: false
        },
      ]);
    }, 800);
  });
};

// Cursor提示: "检测并优化API请求性能"
// Cursor提示: "添加错误处理逻辑" 