import { Input } from "@/components/ui/input";
import { Expenses, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

async function getData(): Promise<Expenses[]> {
  // This is where I would fetch data
  return [
    {
      id: "1",
      category: "Food",
      date: "2024-04-01",
      amount: 25.99,
    },
    {
      id: "2",
      category: "Transportation",
      date: "2024-04-05",
      amount: 15.75,
    },
    {
      id: "3",
      category: "Entertainment",
      date: "2024-04-10",
      amount: 50.0,
    },
    {
      id: "4",
      category: "Utilities",
      date: "2024-04-15",
      amount: 80.5,
    },
    {
      id: "5",
      category: "Groceries",
      date: "2024-04-20",
      amount: 40.25,
    },
    {
      id: "6",
      category: "Dining Out",
      date: "2024-04-25",
      amount: 35.0,
    },
    {
      id: "7",
      category: "Shopping",
      date: "2024-04-02",
      amount: 120.75,
    },
    {
      id: "8",
      category: "Healthcare",
      date: "2024-04-08",
      amount: 75.0,
    },
    {
      id: "9",
      category: "Travel",
      date: "2024-04-12",
      amount: 200.0,
    },
    {
      id: "10",
      category: "Education",
      date: "2024-04-18",
      amount: 150.5,
    },
    {
      id: "11",
      category: "Rent",
      date: "2024-04-22",
      amount: 1000.0,
    },
    {
      id: "12",
      category: "Insurance",
      date: "2024-04-28",
      amount: 120.0,
    },
    {
      id: "13",
      category: "Charity",
      date: "2024-04-30",
      amount: 50.0,
    },
  ];
}

// TODO: Add record should lead to a form

export default async function ExpensesPage() {
  const data = await getData();

  return (
    <section className="bg-secondary min-h-screen py-10">
      <div className="flex justify-between items-center container">
        <Button>
          Add record
          <Plus />
        </Button>
        <Input
          type="text"
          placeholder="Search..."
          className=" bg-background max-w-[180px]"
        />
      </div>
      <div className="container mx-auto mt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
