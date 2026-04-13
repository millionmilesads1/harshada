import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 text-center">
      <h1 className="text-6xl font-heading font-bold mb-4">404</h1>
      <h2 className="text-2xl font-serif mb-8">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-12">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button size="lg" className="rounded-full px-12">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
