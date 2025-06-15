import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Next.js 과제</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/posts" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">포스트</h2>
          <p className="text-gray-600">포스트 목록을 확인하고 작성할 수 있습니다.</p>
        </Link>
        <Link href="/comments" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">댓글</h2>
          <p className="text-gray-600">댓글을 작성하고 관리할 수 있습니다.</p>
        </Link>
      </div>
    </div>
  );
} 