"use client";

import {
  BackpackIcon,
  CaretSortIcon,
  CircleIcon,
  DashboardIcon,
  FileIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const collapsibleLinks = [
  { href: "/bla", label: "Expenses" },
  { href: "/bla", label: "Expense Categories" },
  { href: "/bla", label: "Income" },
  { href: "/bla", label: "Income Categories" },
  { href: "/bla", label: "Accounting Report" },
  { href: "/bla", label: "Doctor Report" },
  { href: "/bla", label: "Contractors Report" },
  { href: "/bla", label: "Summary" },
];

const SidenavLinks = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-3">
      <Link href={"/"}>
        <Button
          className={cn("items-center gap-2 justify-start w-full", {
            "text-blue-600": pathname === "/dashboard",
          })}
          variant={"ghost"}
        >
          <DashboardIcon className="size-5" />
          Dashboard
        </Button>
      </Link>

      <Link href={"/dashboard/profile"}>
        <Button
          className={cn("items-center gap-2 justify-start w-full", {
            "text-blue-600": pathname === "/dashboard/profile",
          })}
          variant={"ghost"}
        >
          <PersonIcon className="size-5" />
          Profile
        </Button>
      </Link>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button
            className="items-center gap-2 justify-start w-full"
            variant={"ghost"}
          >
            <BackpackIcon className="size-5" />
            Accounting
            <CaretSortIcon className="size-5 ml-5" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {collapsibleLinks.map((item, index) => (
            <Button
              key={item.label}
              className="items-center gap-2 justify-start w-full"
              variant={"ghost"}
            >
              <CircleIcon className="size-2" />
              {item.label}
            </Button>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Button className="items-center gap-2 justify-start" variant={"ghost"}>
        <FileIcon className="size-5" />
        Invoice
      </Button>
    </section>
  );
};

export default SidenavLinks;
