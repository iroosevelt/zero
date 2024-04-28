import { SubmitButton } from "@/app/components/SubmitButtons";
import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function NewGoalRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  async function postData(formData: FormData) {
    "use server";

    if (!user) {
      throw new Error("Not authorized");
    }

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    await prisma.note.create({
      data: {
        userId: user.id,
        description: description,
        title: title,
      },
    });

    return redirect("/dashboard");
  }

  return (
    <Card className="bg-transparent">
      <form action={postData}>
        <CardHeader>
          <CardTitle>New Goal</CardTitle>
          <CardDescription>Create a new goal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="gap-y-2 flex flex-col">
            <Label>Title</Label>
            <Input
              required
              type="text"
              name="title"
              placeholder="Title your goal"
            />
          </div>

          <div className="flex flex-col gap-y-2 mt-6">
            <Label>Description</Label>
            <Textarea
              name="description"
              placeholder="Describe your goal"
              required
            />
          </div>
        </CardContent>

        <CardFooter className="flex gap-x-3">
          <SubmitButton title="Save Goal" />
          <Button asChild variant="secondary">
            <Link href="/dashboard">Cancel</Link>
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
