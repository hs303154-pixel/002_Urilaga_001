import React from 'react';
import { BoardPost } from '../hooks/useBoard';

interface Props {
  post: BoardPost;
  index: number;
  onClick: () => void;
}

export function BoardItem({ post, index, onClick }: Props) {
  const formattedDate = post.createdAt?.toDate ? 
    post.createdAt.toDate().toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' }) : '';

  return (
    <div 
      onClick={onClick}
      className="group flex items-center justify-between w-full p-3 sm:p-4 rounded-2xl border-2 border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-3 sm:gap-4 overflow-hidden flex-1">
        {/* Number */}
        <span className="text-white/70 font-bold text-sm sm:text-base min-w-[1.5rem]">
          {String(index).padStart(2, '0')}
        </span>
        
        {/* Divider */}
        <div className="w-px h-4 bg-white/20 mx-1 sm:mx-2" />
        
        {/* Content Area */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <span className="text-sm sm:text-base font-bold text-white/90 shrink-0">{post.nickname}</span>
          <p className="text-sm sm:text-base text-white/70 truncate flex-1">
            {post.content}
          </p>
          <span className="text-xs text-white/40 shrink-0 hidden sm:block ml-auto">{formattedDate}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 pl-3 shrink-0">
        <span className="text-white/20 group-hover:text-white/60 transition-colors hidden sm:block">
          &gt;
        </span>
      </div>
    </div>
  );
}
