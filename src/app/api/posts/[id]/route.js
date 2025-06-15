import { NextResponse } from 'next/server';

// 임시 데이터 저장소 (실제로는 데이터베이스 사용)
let posts = [
  {
    id: 1,
    title: '첫 번째 포스트',
    content: '안녕하세요! 첫 번째 포스트입니다.',
    author: '관리자',
  },
];

export async function GET(request, { params }) {
  const post = posts.find((p) => p.id === parseInt(params.id));
  if (!post) {
    return NextResponse.json({ error: '포스트를 찾을 수 없습니다.' }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  const body = await request.json();
  const index = posts.findIndex((p) => p.id === parseInt(params.id));
  if (index === -1) {
    return NextResponse.json({ error: '포스트를 찾을 수 없습니다.' }, { status: 404 });
  }
  posts[index] = { ...posts[index], ...body };
  return NextResponse.json(posts[index]);
}

export async function DELETE(request, { params }) {
  const index = posts.findIndex((p) => p.id === parseInt(params.id));
  if (index === -1) {
    return NextResponse.json({ error: '포스트를 찾을 수 없습니다.' }, { status: 404 });
  }
  const deletedPost = posts[index];
  posts = posts.filter((p) => p.id !== parseInt(params.id));
  return NextResponse.json(deletedPost);
} 