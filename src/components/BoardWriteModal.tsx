import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nickname: string, password: string | undefined, content: string) => Promise<void>;
}

export function BoardWriteModal({ isOpen, onClose, onSubmit }: Props) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }
    setIsSubmitting(true);
    try {
      await onSubmit(nickname, password, content);
      setNickname('');
      setPassword('');
      setContent('');
      onClose();
    } catch (error) {
      console.error(error);
      alert("글 등록에 실패했습니다. Firebase 권한을 확인해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-xl font-bold text-white mb-6">글쓰기</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-3">
            <input 
              type="text" 
              placeholder="닉네임 (선택)" 
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
              maxLength={10}
            />
            <input 
              type="password" 
              placeholder="비밀번호 (선택)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
            />
          </div>
          
          <textarea 
            placeholder="우리아가의 소중한 정보를 공유해보세요!" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-32 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 resize-none"
            required
          />
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full mt-2 bg-white text-black font-bold py-3.5 rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : '등록하기'}
          </button>
        </form>
      </div>
    </div>
  );
}
