import { NextResponse } from 'next/server';

// 임시 데이터 저장소
let posts = [
  {
    id: 1,
    title: '첫 번째 포스트',
    content: '안녕하세요! 첫 번째 포스트입니다.',
    author: '관리자',
  },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request) {
  const body = await request.json();
  const newPost = {
    id: posts.length + 1,
    ...body,
    author: '관리자', // TODO: 실제 사용자 인증 구현
  };
  posts.push(newPost);
  return NextResponse.json(newPost);
} 