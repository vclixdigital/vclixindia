import { useEffect } from 'react';

export default function PortfolioPage() {
  useEffect(() => {
    window.location.href = 'https://vimalraj-digital-marketer.netlify.app/';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin w-12 h-12 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"></div>
        <p className="text-xl">Redirecting to portfolio...</p>
      </div>
    </div>
  );
}
