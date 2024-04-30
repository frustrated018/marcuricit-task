"use client";
import { Cog, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";

const Report = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Accounting Report</CardTitle>
        </CardHeader>

        <CardContent>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3">
                Filters <Filter />
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-7 gap-5">
              <div className="col-span-2">
                <Label>Date Range:</Label>
                <DatePickerWithRange />
              </div>
              <div>
                <Label>Accountant</Label>
                <Input />
              </div>
              <div>
                <Label>Audit</Label>
                <Input />
              </div>
              <div>
                <Label>Type</Label>
                <Input />
              </div>
              <section className="space-y-2">
                <Label>Show Details</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox />
                    <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Show group Tests
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox />
                    <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Show Expenses
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox />
                    <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Show profits
                    </Label>
                  </div>
                </div>
              </section>
              <div>
                <Button
                  onClick={() => {
                    toast.info("This function is not available in demo.");
                  }}
                >
                  <Cog />
                </Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default Report;
