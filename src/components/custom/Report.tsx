import { Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

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
            <CardContent className="grid grid-cols-6 gap-5">
              <div>
                <Label>Blah</Label>
                <Input />
              </div>
              <div>
                <Label>Blah</Label>
                <Input />
              </div>
              <div>
                <Label>Blah</Label>
                <Input />
              </div>
              <div>
                <Label>Blah</Label>
                <Input />
              </div>
              <div>Bunch of checkbox</div>
              <div>
                <Button>Bruhhh</Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default Report;
