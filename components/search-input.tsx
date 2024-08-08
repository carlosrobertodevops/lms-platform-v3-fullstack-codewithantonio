"use client"

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {

  const [value, setValue] = useState("")


  return (
    <div className="relative">
      <Search
        className="w-4 h-4 text-slate-600 absolute top-3 left-3"
      />
      <Input
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-salte-200"
        placeholder="Search for a course"
      />
    </div>
  )
}