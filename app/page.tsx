import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Header - Replace Next.js logo with your logo */}
      <header className="row-start-1 w-full flex justify-center">
        <Image
          src="/your-logo.svg" // Replace with your logo path
          alt="ML VisualLearn Logo"
          width={180}
          height={40}
          priority
        />
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-12 row-start-2 items-center text-center max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to ML VisualLearn
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Interactive machine learning education with visualizations and code editors.
          </p>
        </div>

        {/* Courses CTA */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/courses"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center"
          >
            Explore Topics
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors text-center"
          >
            Learn More
          </Link>
        </div>

        {/* Feature Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
          {['Interactive Visuals', 'Real-time Coding', 'AI Explanations'].map((feature) => (
            <div key={feature} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">{feature}</h3>
              <p className="text-sm text-gray-500">Experience hands-on {feature.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}