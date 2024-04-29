import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BellIcon,
  ChevronDownIcon,
  CornersIcon,
  GearIcon,
  GlobeIcon,
  GridIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

// TODO: Dynamically change the img and user name

const Topnav = () => {
  return (
    <nav className="border-b w-full">
      <section className="flex items-center justify-between px-5 py-2.5">
        <div className="flex items-center gap-3">
          <Button variant={"ghost"} size={"sm"}>
            <HamburgerMenuIcon className="size-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="items-center gap-1" variant={"secondary"}>
                Create New <ChevronDownIcon className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Invoice</DropdownMenuItem>
              <DropdownMenuItem>Product</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-3">
          <Input placeholder="Search.." />
          <Button variant={"ghost"} size={"sm"}>
            <GridIcon className="size-5" />
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <CornersIcon className="size-5" />
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <GlobeIcon className="size-5" />
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <BellIcon className="size-5" />
          </Button>
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/83364195?v=4" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="items-center gap-1" variant={"secondary"}>
                User name <ChevronDownIcon className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant={"ghost"} size={"sm"}>
            <GearIcon className="size-5" />
          </Button>
        </div>
      </section>
    </nav>
  );
};

export default Topnav;
