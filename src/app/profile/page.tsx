import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloudIcon } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-secondary p-5">
      <Card className="">
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="space-y-3">
            <div>
              <Label>Username</Label>
              <Input placeholder="John Doe" type="text" required />
            </div>
            <div>
              <Label>Email address</Label>
              <Input placeholder="John@example.com" type="email" required />
            </div>
            <div>
              <Label>Passwrod</Label>
              <Input placeholder="******" type="password" required />
            </div>
            <div>
              <Label>Confirm Password</Label>
              <Input placeholder="******" type="password" required />
            </div>

            <div>
              <Label>Upload Signature</Label>
              <div className="flex flex-col items-center p-10 border-4 border-dashed">
                <UploadCloudIcon className="size-10" />
                <h3>Drag and drop the file you want to upload</h3>
                <h5>
                  This is a demo dropzone. That&apos;s why you can&apos;t upload
                  anything.
                </h5>
              </div>
            </div>
          </section>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end w-full gap-5">
            <Button className="bg-blue-600 hover:bg-blue-500">Submit</Button>
            <Button>Cancel</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfilePage;
