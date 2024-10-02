"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-5">
      <h1 className="text-3xl font-bold">Events</h1>
      <Button onClick={() => router.push("/add-events")}>Add Event</Button>
    </div>
  );
}
export default Header;
