'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: API 호출로 포스트 목록 가져오기
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('포스트를 불러오는데 실패했습니다:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">포스트 목록</h2>
        <Link href="/posts/new" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          새 포스트 작성
        </Link>
      </div>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.content}</p>
            <div className="mt-4 flex justify-end space-x-2">
              <Link href={`/posts/${post.id}/edit`} className="text-blue-500 hover:text-blue-600">
                수정
              </Link>
              <button
                onClick={() => {
                  // TODO: 삭제 기능 구현
                }}
                className="text-red-500 hover:text-red-600"
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 