"use cache";

export default async function Page() {
  return (
    <div className="min-h-screen text-white bg-linear-to-r from-black via-red-900 to-black py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Group Training <span className="text-red-500">Benefits</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the power of community-driven fitness with our dynamic
            group training sessions designed for motivation, fun, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-3">Community Support</h3>
            <p className="text-gray-300">
              Train with like-minded individuals who share your goals. Build
              lasting friendships and create a support network that keeps you
              motivated.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-bold mb-3">Fun & Engaging</h3>
            <p className="text-gray-300">
              Enjoy high-energy workouts with music, games, and team challenges
              that make exercise feel like play while getting amazing results.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">Cost Effective</h3>
            <p className="text-gray-300">
              Get professional training at a fraction of the cost of personal
              sessions. Quality instruction with the added benefit of group
              dynamics.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3">Competitive Edge</h3>
            <p className="text-gray-300">
              Push your limits with friendly competition. The group's energy
              drives everyone to perform better and achieve more together.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold mb-3">Regular Schedule</h3>
            <p className="text-gray-300">
              Stay consistent with structured class times. Regular attendance
              becomes a habit, leading to better long-term results and
              consistency.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-3">Learn from Others</h3>
            <p className="text-gray-300">
              Observe different techniques and approaches. Group settings
              provide opportunities to learn new exercises and training methods.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Fitness Community Today!
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of a supportive group that celebrates every victory, pushes
            through challenges together, and creates lasting healthy habits.
          </p>
        </div>
      </div>
    </div>
  );
}
