import { NextResponse } from 'next/server';

// 임시 데이터 저장소 (실제로는 데이터베이스 사용)
let comments = [
  {
    id: 1,
    postId: 1,
    content: '첫 번째 댓글입니다.',
    author: '사용자1',
  },
];

export async function GET(request, { params }) {
  const postComments = comments.filter((c) => c.postId === parseInt(params.id));
  return NextResponse.json(postComments);
}

export async function POST(request, { params }) {
  const body = await request.json();
  const newComment = {
    id: comments.length + 1,
    postId: parseInt(params.id),
    ...body,
    author: '사용자1', // TODO: 실제 사용자 인증 구현
  };
  comments.push(newComment);
  return NextResponse.json(newComment);
}

export async function PUT(request, { params }) {
  const body = await request.json();
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  if (index === -1) {
    return NextResponse.json({ error: '댓글을 찾을 수 없습니다.' }, { status: 404 });
  }
  comments[index] = { ...comments[index], ...body };
  return NextResponse.json(comments[index]);
}

export async function DELETE(request, { params }) {
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  if (index === -1) {
    return NextResponse.json({ error: '댓글을 찾을 수 없습니다.' }, { status: 404 });
  }
  const deletedComment = comments[index];
  comments = comments.filter((c) => c.id !== parseInt(params.id));
  return NextResponse.json(deletedComment);
} 