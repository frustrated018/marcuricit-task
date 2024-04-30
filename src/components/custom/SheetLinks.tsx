"use client";

import {
  BackpackIcon,
  CaretSortIcon,
  CircleIcon,
  DashboardIcon,
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
import { LogOut, ScrollText } from "lucide-react";
import { SheetTrigger } from "../ui/sheet";

const collapsibleLinks = [
  { href: "/dashboard/accounting/expenses", label: "Expenses" },
  {
    href: "/dashboard/accounting/expense-categories",
    label: "Expense Categories",
  },
  { href: "/dashboard/accounting/income", label: "Income" },
  {
    href: "/dashboard/accounting/income-categories",
    label: "Income Categories",
  },
  {
    href: "/dashboard/accounting/accounting-report",
    label: "Accounting Report",
  },
  { href: "/dashboard/accounting/doctor-report", label: "Doctor Report" },
  {
    href: "/dashboard/accounting/contractor-report",
    label: "Contractors Report",
  },
  { href: "/dashboard/accounting/summary", label: "Summary" },
];

const SheetLinks = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-3">
      <Link href={"/dashboard"}>
        <SheetTrigger asChild>
          <Button
            className={cn("items-center gap-2 justify-start w-full", {
              "text-blue-600 hover:text-blue-500": pathname === "/dashboard",
            })}
            variant={"ghost"}
          >
            <DashboardIcon className="size-5" />
            Dashboard
          </Button>
        </SheetTrigger>
      </Link>

      <Link href={"/dashboard/profile"}>
        <SheetTrigger asChild>
          <Button
            className={cn("items-center gap-2 justify-start w-full", {
              "text-blue-600 hover:text-blue-500":
                pathname === "/dashboard/profile",
            })}
            variant={"ghost"}
          >
            <PersonIcon className="size-5" />
            Profile
          </Button>
        </SheetTrigger>
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
            <Link key={item.label} href={item.href}>
              <SheetTrigger asChild>
                <Button
                  className={cn("items-center gap-2 justify-start w-full", {
                    "text-blue-600 hover:text-blue-500": pathname === item.href,
                  })}
                  variant={"ghost"}
                >
                  <CircleIcon className="size-2" />
                  {item.label}
                </Button>
              </SheetTrigger>
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <SheetTrigger asChild>
        <Button
          className="items-center gap-2 justify-start w-full"
          variant={"ghost"}
        >
          <ScrollText className="size-5" />
          Invoice
        </Button>
      </SheetTrigger>
      
      <Link href="/">
        <SheetTrigger asChild>
          <Button
            className="items-center gap-2 justify-start w-full"
            variant={"ghost"}
          >
            <LogOut className="size-5" />
            Log Out
          </Button>
        </SheetTrigger>
      </Link>
    </section>
  );
};

export default SheetLinks;
