'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Header - Replace Next.js logo with your logo */}
      <header className="row-start-1 w-full flex justify-center">
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-12 row-start-2 items-center text-center max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to ML VisualLearn
          </h1>
          <p className="text-lg text-muted-foreground">
            Interactive machine learning education with visualizations and code editors.
          </p>
        </div>

        {/* Courses CTA */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/courses"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center"
          >
            View All Topics
          </Link>
        </div>
      </main>
    </div>
  );
}

