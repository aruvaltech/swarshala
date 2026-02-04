export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        {/* Animated music note loader */}
        <div className="flex justify-center items-end gap-1 mb-4">
          <div
            className="w-2 h-8 bg-gold rounded-full animate-pulse"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-12 bg-gold rounded-full animate-pulse"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-6 bg-gold rounded-full animate-pulse"
            style={{ animationDelay: "300ms" }}
          />
          <div
            className="w-2 h-10 bg-gold rounded-full animate-pulse"
            style={{ animationDelay: "450ms" }}
          />
          <div
            className="w-2 h-4 bg-gold rounded-full animate-pulse"
            style={{ animationDelay: "600ms" }}
          />
        </div>
        <p className="text-text-secondary font-medium">Loading...</p>
      </div>
    </div>
  );
}
