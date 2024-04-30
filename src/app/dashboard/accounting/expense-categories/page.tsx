import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { ExpenseCategories, columns } from "./columns";
import expenseData from "@/assets/expenseData.json";

// TODO: Add Breadcrumbs

async function getData(): Promise<ExpenseCategories[]> {
  // This is where I would fetch data
  return expenseData as ExpenseCategories[];
}

const ExpenseCategoriesPage = async () => {
  const data = await getData();

  return (
    <section className="bg-secondary min-h-screen py-5">
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
};

export default ExpenseCategoriesPage;
