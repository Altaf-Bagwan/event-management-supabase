import { Skeleton } from "@/components/ui/skeleton";

const EventCardSkeleton = () => {
  return (
    <div className="p-3 w-full border rounded">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-1">
          <Skeleton className="h-8 w-40 md:w-48 mb-2" /> {/* Event name */}
          <Skeleton className="h-4 w-full md:w-3/4" /> {/* Event description */}
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex gap-3">
            <Skeleton className="h-4 w-16 md:w-20" /> {/* Event date */}
            <Skeleton className="h-4 w-12 md:w-16" /> {/* Event time */}
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-6 w-6 md:h-8 md:w-8 rounded" />
            {/* Edit icon */}
            <Skeleton className="h-6 w-6 md:h-8 md:w-8 rounded" />
            {/* Delete icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;
