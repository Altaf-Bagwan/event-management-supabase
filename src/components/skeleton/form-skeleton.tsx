import { Skeleton } from "@/components/ui/skeleton";

const EventFormSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* Event Name */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" /> {/* Label Skeleton */}
        <Skeleton className="h-10 w-full" /> {/* Input Skeleton */}
      </div>
      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" /> {/* Label Skeleton */}
        <Skeleton className="h-24 w-full" /> {/* Textarea Skeleton */}
        <Skeleton className="h-4 w-64" /> {/* Description Skeleton */}
      </div>
      {/* Date */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" /> {/* Label Skeleton */}
        <Skeleton className="h-10 w-full" /> {/* Input Skeleton */}
        <Skeleton className="h-4 w-64" /> {/* Description Skeleton */}
      </div>
      {/* Time */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" /> {/* Label Skeleton */}
        <Skeleton className="h-10 w-full" /> {/* Input Skeleton */}
        <Skeleton className="h-4 w-64" /> {/* Description Skeleton */}
      </div>
      {/* Submit Button */}
      <Skeleton className="h-10 w-32" /> {/* Button Skeleton */}
    </div>
  );
};

export default EventFormSkeleton;
