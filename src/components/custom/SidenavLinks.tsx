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

const collapsibleLinks = [
  { href: "/dashboard/accounting/expenses", label: "Expenses" },
  { href: "/dashboard/accounting/expense-categories", label: "Expense Categories" },
  { href: "/dashboard", label: "Income" },
  { href: "/dashboard", label: "Income Categories" },
  { href: "/dashboard/accounting/accounting-report", label: "Accounting Report" },
  { href: "/dashboard", label: "Doctor Report" },
  { href: "/dashboard", label: "Contractors Report" },
  { href: "/dashboard", label: "Summary" },
];

const SidenavLinks = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-3">
      <Link href={"/dashboard"}>
        <Button
          className={cn("items-center gap-2 justify-start w-full", {
            "text-blue-600 hover:text-blue-500": pathname === "/dashboard",
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
            "text-blue-600 hover:text-blue-500": pathname === "/dashboard/profile",
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
            <Link key={item.label} href={item.href}>
              <Button
                className={cn("items-center gap-2 justify-start w-full", {
                  "text-blue-600 hover:text-blue-500": pathname === item.href,
                })}
                variant={"ghost"}
              >
                <CircleIcon className="size-2" />
                {item.label}
              </Button>
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Button
        className="items-center gap-2 justify-start w-full"
        variant={"ghost"}
      >
        <ScrollText className="size-5" />
        Invoice
      </Button>
      <Link href="/">
        <Button
          className="items-center gap-2 justify-start w-full"
          variant={"ghost"}
        >
          <LogOut className="size-5" />
          Log Out
        </Button>
      </Link>
    </section>
  );
};

export default SidenavLinks;
