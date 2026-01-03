"use client";

import React, { useState } from "react";
import { Search, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Exercise {
  name: string;
  type: string;
  muscle: string;
  equipments: string;
  difficulty: string;
  instructions: string;
  safety_info: string;
}

type MuscleGroup =
  | "abdominals"
  | "abductors"
  | "adductors"
  | "biceps"
  | "calves"
  | "chest"
  | "forearms"
  | "glutes"
  | "hamstrings"
  | "lats"
  | "lower_back"
  | "middle_back"
  | "neck"
  | "quadriceps"
  | "traps"
  | "triceps";

type Difficulty = "beginner" | "intermediate" | "expert";

export default function Exercises() {
  const [muscle, setMuscle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);

  const muscleGroups: MuscleGroup[] = [
    "abdominals",
    "abductors",
    "adductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps",
  ];

  const difficulties: Difficulty[] = ["beginner", "intermediate", "expert"];

  const fetchExercises = async (): Promise<void> => {
    if (!muscle || !difficulty) {
      setError("Please select both muscle group and difficulty level");
      return;
    }

    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const response = await fetch(
        `/api/exercises?muscle=${muscle}&difficulty=${difficulty}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exercises");
      }

      const data: Exercise[] = await response.json();
      setExercises(data);
    } catch (err) {
      setError("Failed to fetch exercises. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatMuscleLabel = (muscle: string): string => {
    return (
      muscle.replace("_", " ").charAt(0).toUpperCase() +
      muscle.slice(1).replace("_", " ")
    );
  };

  const formatDifficultyLabel = (diff: string): string => {
    return diff.charAt(0).toUpperCase() + diff.slice(1);
  };

  return (
    <div className="py-16 bg-linear-to-r from-black via-red-500/35  to-black">
      <h1 className="text-3xl font-extrabold mb-6 text-white text-center">
        FIND GYM EXERCISES
      </h1>
      <div className="bg-linear-to-r from-black via-red-500/35  to-black rounded-lg shadow-lg p-6 mb-6 ">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Muscle Group *
            </label>
            <select
              value={muscle}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setMuscle(e.target.value)
              }
              className="w-full px-4 py-2 text-white bg-[#1a1a1a] rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select muscle group</option>
              {muscleGroups.map((m: MuscleGroup) => (
                <option className="" key={m} value={m}>
                  {formatMuscleLabel(m)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Difficulty Level *
            </label>
            <select
              value={difficulty}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setDifficulty(e.target.value)
              }
              className="w-full px-4 py-2 text-white bg-[#1a1a1a] rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select difficulty</option>
              {difficulties.map((d: Difficulty) => (
                <option key={d} value={d}>
                  {formatDifficultyLabel(d)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button
          onClick={fetchExercises}
          disabled={loading || !muscle || !difficulty}
          className="w-full py-3 rounded-lg font-semibol disabled:bg-gray-400 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          {loading ? "Searching..." : "Find Exercises"}
        </Button>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-red-700">{error}</p>
          </div>
        )}
      </div>

      {searched && !loading && exercises.length === 0 && !error && (
        <div className="bg-linear-to-r from-black via-red-500/35  to-black rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-600">
            No exercises found for the selected criteria.
          </p>
        </div>
      )}

      {exercises.length > 0 && (
        <div className="space-y-4 px-5">
          <h2 className="text-2xl font-bold text-white px-6">
            Found {exercises.length} exercise{exercises.length !== 1 ? "s" : ""}
          </h2>
          {exercises.map((exercise: Exercise, idx: number) => (
            <div
              key={idx}
              className="bg-linear-to-r from-orange-950 via-black to-red-900 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-red-400 mb-2">
                {exercise?.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  {exercise?.muscle}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {exercise?.difficulty}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {exercise?.type}
                </span>
                {exercise.equipments !== "body_only" && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    {exercise?.equipments}
                  </span>
                )}
              </div>
              <p className="text-white leading-relaxed">
                {exercise?.instructions}
              </p>
              <br />
              <p className="text-white leading-relaxed">
                {exercise?.safety_info}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
