export default function SkeletonCard() {
    return (
      <div className="p-4 border rounded-lg shadow animate-pulse">
        <div className="h-40 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    );
  }
  