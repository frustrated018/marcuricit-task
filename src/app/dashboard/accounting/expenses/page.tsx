import { Input } from "@/components/ui/input";
import { Expenses, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import expenseData from "@/assets/expenseData.json";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

async function getData(): Promise<Expenses[]> {
  // This is where I would fetch data
  return expenseData as Expenses[];
}

// TODO: Add record should lead to a form

export default async function ExpensesPage() {
  const data = await getData();

  return (
    <section className="bg-secondary min-h-screen py-5">
      <div className="container mb-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Accounting</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Expenses</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
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
