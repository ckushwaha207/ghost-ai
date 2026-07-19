import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Ghost AI</h1>
      <Button className="ml-4" variant="default">
        Get Started
      </Button>
    </div>
  );
}
