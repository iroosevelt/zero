import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XIcon } from "lucide-react";
import Link from "next/link";

export default function CancelledRoute() {
  return (
    <div className="w-full min-h-[80vh] m-auto flex items-center jusify-center">
      <Card className="w-[350px] m-auto">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <XIcon className="w-12 h-12 rounded-full bg-red-500/30 text-red-500 p-2" />
          </div>

          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-lg leading-6 font-medium">Payment failed</h3>
            <p className="max-w-sm mx-auto my-3 text-base lg:text-md text-neutral-500">
              Please try again
            </p>
          </div>

          <div className="mt-5 justify-center flex sm:mt-6 w-full">
            <Button asChild>
              <Link href="/dashboard">Go back to Dashboard</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
