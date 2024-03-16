import Navbar from "@/components/navbar";
import { PathCrumb } from "@/components/pathCrumb";
import { Button } from "@/components/ui/button";
import UsersTable from "@/components/usersTable";
import { Mail } from "lucide-react";
import { Bungee_Outline } from "next/font/google";



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#e7e3ff] min-h-screen">

        <span className="text-[#ff790e] text-[#34a853] md:text-[#1bdb8a] sm:text-[#a5aa85]" />
        <div className="px-20 py-10">
          <div className="flex justify-between items-center">
            <div>
              <PathCrumb/>
              <h4 className="text-2xl mt-2 font-semibold">
                <span className="text-[#ff790e] font-bold">MKA-BD<span /></span> Blood Donours.
              </h4>
            </div>
            <div className="space-x-3">
              <Button className="border border-[#ff790e] text-[0.795rem]" variant="ghost">
                <Mail className="mr-2 h-3.5 w-3.5" /> Login with Email
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-sm border border-gray-300 min-h-full p-5 mt-14">
            <div className="">
            <UsersTable/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
