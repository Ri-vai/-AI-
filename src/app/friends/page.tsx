"use client"

import FriendList from '@/components/FriendList';

export default function FriendsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">我的好友</h1>
          <p className="text-gray-500">管理您的联系人，随时保持联系</p>
        </header>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm p-4 sm:p-6 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-xl font-medium text-gray-800 mb-1">好友列表</h2>
            <p className="text-sm text-gray-500">您共有 {/* Cursor提示: "计算并显示好友数量" */} 个联系人</p>
          </div>
          
          <FriendList />
          
          <div className="mt-8 border-t border-gray-100 pt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Cursor AI 功能演示提示</h3>
            <div className="text-xs space-y-2 text-gray-500">
              <p>• <strong>跨文件代码生成</strong>：尝试 "@index.tsx 计算并在 @page.tsx  显示好友数量"</p>
              <p>• <strong>技术方案分析</strong>：尝试 "@index.tsx @FriendItem.tsx 如果我要在这个列表使用虚拟列表，你帮我分析一下有哪些方案可以实现，先不用写出代码"</p>
              <p>• <strong>生成假数据</strong>：尝试 "@friendService.ts  请给好友列表增加10个随机好友数据，包含边界条件验证"</p>
              <p>• <strong>检测代码问题</strong>：尝试 "@index.tsx 检查FriendList组件中的代码是否存在什么问题，有什么可以优化的地方"</p>
              <p>• <strong>代码库智能检索</strong>：尝试 "@Codebase 这个项目的搜索框代码在哪"</p>
              <p>• <strong>新人上手指导</strong>：尝试 "@Codebase 我是一个新人，请你给我介绍一下好友列表的数据流"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Cursor提示: "帮我在页面中添加一个快捷操作栏，包含添加好友和批量操作功能" 