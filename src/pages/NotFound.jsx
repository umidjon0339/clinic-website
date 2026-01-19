import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-teal-600 opacity-20">404</h1>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">Page Not Found</h2>
      <p className="text-slate-600 dark:text-slate-400 mt-2 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
        Back to Home
      </Link>
    </div>
  );
}