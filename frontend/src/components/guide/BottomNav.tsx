interface BottomNavProps {
  level: number;
  totalSteps: number;
  goToLevel: (level: number) => void;
}

const BottomNav = ({ level, totalSteps, goToLevel }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Back button */}
      <button
        disabled={level === 0}
        onClick={() => goToLevel(level - 1)}
        className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
      >
        Back
      </button>

      {/* Step indicators */}
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }).map((_, step) => (
          <button
            key={step}
            onClick={() => goToLevel(step)}
            className={`px-3 py-1 rounded ${
              step === level
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {step}
          </button>
        ))}
      </div>

      {/* Next button */}
      <button
        disabled={level === totalSteps - 1}
        onClick={() => goToLevel(level + 1)}
        className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default BottomNav;
