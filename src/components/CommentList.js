'use client';

import { useState, useEffect } from 'react';

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // TODO: API 호출로 댓글 목록 가져오기
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/posts/${postId}/comments`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('댓글을 불러오는데 실패했습니다:', error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: 댓글 작성 API 호출
    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      });
      const data = await response.json();
      setComments([...comments, data]);
      setNewComment('');
    } catch (error) {
      console.error('댓글 작성에 실패했습니다:', error);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">댓글</h3>
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="댓글을 작성하세요..."
          rows="3"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          댓글 작성
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{comment.author}</p>
                <p className="text-gray-600 mt-1">{comment.content}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    // TODO: 댓글 수정 기능 구현
                  }}
                  className="text-blue-500 hover:text-blue-600"
                >
                  수정
                </button>
                <button
                  onClick={() => {
                    // TODO: 댓글 삭제 기능 구현
                  }}
                  className="text-red-500 hover:text-red-600"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 