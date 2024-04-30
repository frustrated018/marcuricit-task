import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const salesData = [
  {
    name: "Michael Johnson",
    email: "michael@gmail.com",
    img: "https://source.unsplash.com/blue-and-green-abstract-painting-pfX-GsJMtDY",
    amount: 754,
  },
  {
    name: "Emily Rodriguez",
    email: "emily@gmail.com",
    img: "https://source.unsplash.com/blue-and-orange-smoke-wQLAGv4_OYs",
    amount: 632,
  },
  {
    name: "Christopher Nguyen",
    email: "christopher@gmail.com",
    img: "https://source.unsplash.com/northern-lights-3l3RwQdHRHg",
    amount: 892,
  },
  {
    name: "Jennifer Lee",
    email: "jennifer@gmail.com",
    img: "https://source.unsplash.com/sea-of-clouds-fHXP17AxOEk",
    amount: 421,
  },
  {
    name: "Michelle Brown",
    email: "michelle@gmail.com",
    img: "https://source.unsplash.com/brown-cardboard-box-with-yellow-light-d2w-_1LJioQ",
    amount: 654,
  },
];

export function RecentSales() {
  return (
    <div className="space-y-8">
      {salesData.map((sale) => (
        <div className="flex items-center" key={sale.email}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.img} alt="Avatar" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">+${sale.amount}</div>
        </div>
      ))}
    </div>
  );
}
