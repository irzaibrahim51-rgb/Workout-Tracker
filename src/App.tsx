
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

function App() {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState(0);

  const exerciseInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = `Workout: ${sets} Sets`;
  }, [sets]);

  const completeSet = () => {
    setSets((prev) => prev + 1);
  };

  const removeSet = () => {
    setSets((prev) => Math.max(0, prev - 1));
  };

  const resetWorkout = () => {
    setSets(0);
  };

  const focusExerciseInput = () => {
    exerciseInputRef.current?.focus();
  };

  const getWorkoutMessage = () => {
    if (sets === 0) return "Start your workout!";
    if (sets <= 4) return "Keep going! 💪";
    return "Great workout! 🔥";
  };

  const progress = Math.min(sets * 20, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-100 px-4 py-3">

      <div className="mx-auto max-w-5xl">

        {/* TOP NAVBAR */}
        <div className="mb-3 flex items-center justify-between rounded-2xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-purple-600 px-5 py-3 shadow-lg">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-pink-100">
              Fitness Studio
            </p>

            <h1 className="mt-0.5 text-lg font-black text-white sm:text-xl">
              Workout Tracker 🏋️
            </h1>
          </div>

          <div className="rounded-xl bg-white px-4 py-1.5 text-center shadow">
            <p className="text-[9px] font-bold uppercase text-purple-600">
              Sets
            </p>

            <p className="text-lg font-black leading-5 text-pink-600">
              {sets}
            </p>
          </div>

        </div>

        {/* MAIN CARD */}
        <Card className="overflow-hidden rounded-3xl border-0 bg-white shadow-[0_15px_45px_rgba(168,85,247,0.14)]">

          {/* HEADER */}
          <CardHeader className="border-b border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50 px-6 py-4">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-500">
                  Training Session
                </p>

                <CardTitle className="mt-0.5 text-xl font-black text-purple-950 sm:text-2xl">
                  Build Your Strength
                </CardTitle>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-xl shadow">
                🏋️
              </div>

            </div>

          </CardHeader>

          <CardContent className="p-4 sm:p-6">

            <div className="grid gap-4 lg:grid-cols-2">

              {/* LEFT SIDE */}
              <div className="space-y-4">

                {/* INPUT */}
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-purple-950">
                    Exercise Name
                  </label>

                  <div className="flex gap-2">

                    <Input
                      ref={exerciseInputRef}
                      value={exerciseName}
                      onChange={(e) => setExerciseName(e.target.value)}
                      placeholder="e.g. Squats, Push Ups..."
                      className="h-10 border-pink-200 bg-pink-50/40 focus-visible:ring-pink-500"
                    />

                    <Button
                      variant="outline"
                      onClick={focusExerciseInput}
                      className="h-10 border-pink-200 font-bold text-purple-800 hover:bg-pink-50"
                    >
                      Focus
                    </Button>

                  </div>
                </div>

                {/* EXERCISE CARD */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-fuchsia-900 p-5 text-white">

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-pink-500/30 blur-2xl" />

                  <div className="relative">

                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-fuchsia-500 text-xl shadow">
                      ⚡
                    </div>

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-300">
                      Current Exercise
                    </p>

                    <h2 className="mt-1.5 text-xl font-black">
                      {exerciseName || "Your Exercise"}
                    </h2>

                    <p className="mt-1.5 text-xs leading-5 text-purple-200">
                      Focus on your form, complete every set and keep
                      pushing forward.
                    </p>

                  </div>

                </div>

                {/* MOTIVATION */}
                <div className="rounded-2xl border border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50 p-3">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-sm text-white shadow">
                      💪
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-pink-500">
                        Motivation
                      </p>

                      <p className="text-sm font-black text-purple-950">
                        {getWorkoutMessage()}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-4">

                {/* SET COUNTER */}
                <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-white to-purple-50 p-5 shadow-sm">

                  <div className="flex items-start justify-between gap-2">

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                        Completed Sets
                      </p>

                      <p className="mt-0.5 text-5xl font-black text-purple-950">
                        {sets}
                      </p>
                    </div>

                    {sets >= 5 && (
                      <Badge className="border-0 bg-gradient-to-r from-pink-500 to-purple-600 px-2.5 py-1.5 text-xs font-black text-white shadow">
                        🏆 Goal Completed
                      </Badge>
                    )}

                  </div>

                  {/* PROGRESS */}
                  <div className="mt-4">

                    <div className="mb-1.5 flex justify-between text-[10px]">
                      <span className="font-semibold text-purple-400">
                        Workout Progress
                      </span>

                      <span className="font-black text-pink-600">
                        {progress}%
                      </span>
                    </div>

                    <div className="h-2.5 overflow-hidden rounded-full bg-purple-100">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300"
                        style={{
                          width: `${progress}%`,
                        }}
                      />

                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="mt-5 grid grid-cols-2 gap-2.5">

                    <Button
                      onClick={completeSet}
                      className="h-10 bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-black text-white shadow hover:from-pink-600 hover:to-purple-700"
                    >
                      + Complete Set
                    </Button>

                    <Button
                      variant="outline"
                      onClick={removeSet}
                      disabled={sets === 0}
                      className="h-10 border-pink-200 text-sm font-bold text-purple-900 hover:bg-pink-50"
                    >
                      − Remove Set
                    </Button>

                  </div>

                </div>

                {/* STATUS */}
                <div className="rounded-2xl bg-gradient-to-r from-purple-950 to-fuchsia-900 p-4 text-white shadow">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-pink-300">
                        Workout Status
                      </p>

                      <p className="mt-0.5 text-base font-black">
                        {getWorkoutMessage()}
                      </p>
                    </div>

                    <span className="text-2xl">
                      {sets >= 5 ? "🔥" : sets > 0 ? "💪" : "🎯"}
                    </span>

                  </div>

                </div>

                {/* RESET */}
                <Button
                  variant="outline"
                  onClick={resetWorkout}
                  className="h-9 w-full border-pink-200 text-sm font-bold text-purple-900 hover:bg-pink-50"
                >
                  ↻ Reset Workout
                </Button>

              </div>

            </div>

          </CardContent>
        </Card>

        <p className="mt-2 text-center text-[10px] font-medium text-purple-400">
          Train smart • Stay consistent • Get stronger
        </p>

      </div>
    </div>
  );
}

export default App;

