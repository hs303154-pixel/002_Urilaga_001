import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface BoardPost {
  id: string;
  nickname: string;
  password?: string;
  content: string;
  createdAt: any;
}

export function useBoard() {
  const [posts, setPosts] = useState<BoardPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BoardPost[];
      setPosts(newPosts);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching posts:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addPost = async (nickname: string, password: string | undefined, content: string) => {
    await addDoc(collection(db, 'posts'), {
      nickname: nickname || '익명',
      password: password || '',
      content,
      createdAt: serverTimestamp()
    });
  };

  return { posts, loading, addPost };
}
