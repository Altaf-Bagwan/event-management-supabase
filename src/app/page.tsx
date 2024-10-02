import Events from "@/components/events/events";
import Header from "@/components/header/header";

export default async function Home() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <Events />
      </div>
    </div>
  );
}
