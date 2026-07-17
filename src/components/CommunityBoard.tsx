import React, { useState } from 'react';
import { useBoard } from '../hooks/useBoard';
import { BoardItem } from './BoardItem';
import { BoardWriteModal } from './BoardWriteModal';
import { BoardReadModal } from './BoardReadModal';
import { PenSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const POSTS_PER_PAGE = 5;

export function CommunityBoard() {
  const { posts, loading, addPost } = useBoard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const getPageNumbers = () => {
    const pages = [];
    // Show up to 5 page numbers (e.g., 1 2 3 4 5)
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);
    
    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="w-full flex flex-col gap-6 mt-12">
      <div className="flex items-end justify-between mb-2">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest mb-1">반려동물 정보 교류 라운지</h2>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
        >
          <PenSquare size={16} />
          글쓰기
        </button>
      </div>

      {/* Board List */}
      <div className="flex flex-col gap-3 min-h-[400px]">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        ) : posts.length > 0 ? (
          currentPosts.map((post, idx) => (
            <BoardItem 
              key={post.id} 
              post={post} 
              index={startIndex + idx + 1} 
              onClick={() => setSelectedPost(post)}
            />
          ))
        ) : (
          <div className="text-center py-16 text-white/40 text-sm bg-white/5 rounded-2xl border border-white/5">
            아직 작성된 글이 없습니다. 첫 번째 글을 남겨주세요!
          </div>
        )}
      </div>

      {/* Pagination */}
      {posts.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/20 hover:text-white disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white/60 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          {getPageNumbers().map(pageNum => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${
                currentPage === pageNum 
                  ? 'bg-white text-black scale-110' 
                  : 'bg-white/5 text-white/60 hover:bg-white/20 hover:text-white'
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/20 hover:text-white disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-white/60 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      <BoardWriteModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          // When writing a new post, refresh logic happens in hook, 
          // optionally we could push user to page 1 to see their new post
          setCurrentPage(1);
        }} 
        onSubmit={addPost} 
      />

      <BoardReadModal 
        isOpen={!!selectedPost} 
        onClose={() => setSelectedPost(null)} 
        post={selectedPost} 
      />
    </div>
  );
}
