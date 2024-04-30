"use client";
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
} from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMediaQuery } from "@/lib/use-media-query";
import SidenavLinks from "./SidenavLinks";
import SheetLinks from "./SheetLinks";

// TODO: Dynamically change the img and user name

const Topnav = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <nav className="border-b w-full">
      <section className="flex items-center justify-between px-5 py-2.5">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"sm"} disabled={isDesktop}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="mb-5">
                <SheetTitle>MarcuricIt</SheetTitle>
              </SheetHeader>
              <SheetLinks />
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="items-center gap-1 hidden xl:flex"
                variant={"secondary"}
              >
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
          <Button className="hidden lg:block" variant={"ghost"} size={"sm"}>
            <GridIcon className="size-5" />
          </Button>
          <Button className="hidden lg:block" variant={"ghost"} size={"sm"}>
            <CornersIcon className="size-5" />
          </Button>
          <Button className="hidden lg:block" variant={"ghost"} size={"sm"}>
            <GlobeIcon className="size-5" />
          </Button>
          <Button className="hidden lg:block" variant={"ghost"} size={"sm"}>
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
          <Button className="hidden lg:block" variant={"ghost"} size={"sm"}>
            <GearIcon className="size-5" />
          </Button>
        </div>
      </section>
    </nav>
  );
};

export default Topnav;
