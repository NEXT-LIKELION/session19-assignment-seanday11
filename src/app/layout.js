import './globals.css';

export const metadata = {
  title: 'Next.js Assignment',
  description: 'Next.js Session 19 Assignment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
} 