import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, XIcon } from "lucide-react";
import Link from "next/link";

export default function SuccessRoute() {
  return (
    <div className="w-full min-h-[80vh] m-auto flex items-center jusify-center">
      <Card className="w-[350px] m-auto">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <Check className="w-12 h-12 rounded-full bg-green-500/30 text-green-500 p-2" />
          </div>

          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-lg leading-6 font-medium">
              Payment successful
            </h3>
            <p className="max-w-sm mx-auto my-3 text-base lg:text-md text-neutral-500">
              Your premium plan has started.
            </p>
          </div>

          <div className="mt-5 justify-center flex sm:mt-6 w-full">
            <Button className="bg-secondary" asChild>
              <Link href="/dashboard">Continue to Dashboard</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
