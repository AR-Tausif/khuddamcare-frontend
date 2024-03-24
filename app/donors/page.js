import { PathCrumb } from "@/components/pathCrumb";
import { Button } from "@/components/ui/button";
import UsersTable from "@/components/usersTable";
import { Mail } from "lucide-react";

export default function Donors() {

    return(
        

          <div className="bg-white rounded-sm border border-gray-300 min-h-full p-5 mt-14">
            <div className="">
            <UsersTable/>
            </div>
          </div>
      
    )

}