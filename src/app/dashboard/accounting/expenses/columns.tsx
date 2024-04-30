"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

export type Expenses = {
  id: string;
  category: string;
  date: string;
  amount: number;
};

export const columns: ColumnDef<Expenses>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    header: "Actions",
    cell: () => {
      return (
        <div>
          <Button
            size="sm"
            variant="ghost"
            className="hover:text-emerald-500"
            onClick={() => {
              toast.info("Edit function is not available in demo.");
            }}
          >
            <Pencil />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="hover:text-red-500"
            onClick={() => {
              toast.info("Delete function is not available in demo.");
            }}
          >
            <Trash2 />
          </Button>
        </div>
      );
    },
  },
];
