import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Interactive AI Task Gamifier</h1>
        <p className="text-lg text-gray-600 mt-2">Gamify your productivity with AI-powered task breakdowns and visual progress!</p>
      </header>
      <main>
        {/* TODO: Add Task Input, Gamified Progress, and Visualization Components */}
        <div className="p-8 bg-white rounded shadow text-center opacity-70">
          <p className="text-gray-500">🚧 Main features coming soon. Stay tuned! 🚧</p>
        </div>
      </main>
      <footer className="mt-10 text-gray-400">© 2025 [Your Name]. All rights reserved.</footer>
    </div>
  );
};

export default App;
