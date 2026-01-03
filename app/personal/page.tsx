"use cache";
import React from "react";

export default async function Page() {
  return (
    <div className="min-h-screen text-white bg-linear-to-r from-black via-red-900 to-black py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Personal Training <span className="text-red-500">FEATURES</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover why personal training is the ultimate choice for achieving
            your fitness goals with expert guidance and personalized attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Personalized Programs</h3>
            <p className="text-gray-300">
              Get custom workout plans tailored specifically to your goals,
              fitness level, and schedule. No more generic routines that don't
              work for you.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
            <p className="text-gray-300">
              Work with certified trainers who provide real-time feedback,
              proper form correction, and motivation to keep you on track.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Faster Results</h3>
            <p className="text-gray-300">
              Achieve your fitness goals faster with dedicated one-on-one
              attention and programs designed for maximum efficiency.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">Injury Prevention</h3>
            <p className="text-gray-300">
              Learn proper techniques and receive personalized modifications to
              prevent injuries and ensure safe, effective training.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">Accountability</h3>
            <p className="text-gray-300">
              Stay motivated and accountable with regular check-ins, progress
              tracking, and a trainer who cares about your success.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
            <div className="text-red-500 text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
            <p className="text-gray-300">
              Train at times that work for your busy lifestyle. Sessions can be
              scheduled around your availability for maximum convenience.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our personal training program and experience the difference
            that expert, personalized guidance can make in achieving your goals.
          </p>
        </div>
      </div>
    </div>
  );
}
