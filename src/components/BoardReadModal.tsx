import React from 'react';
import { X } from 'lucide-react';
import { BoardPost } from '../hooks/useBoard';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  post: BoardPost | null;
}

export function BoardReadModal({ isOpen, onClose, post }: Props) {
  if (!isOpen || !post) return null;

  const formattedDate = post.createdAt?.toDate ? 
    post.createdAt.toDate().toLocaleDateString('ko-KR', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    }) : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="mb-6 pb-6 border-b border-white/10 pr-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{post.nickname}</h2>
          <p className="text-sm text-white/40 font-mono">{formattedDate}</p>
        </div>
        
        <div className="min-h-[300px] max-h-[70vh] overflow-y-auto custom-scrollbar bg-[#f5f5f5] rounded-xl p-4 sm:p-6 mt-4 border border-black/5 shadow-inner">
          <p className="text-black font-medium leading-relaxed whitespace-pre-wrap text-base sm:text-lg">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
}
