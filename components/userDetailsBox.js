import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import UserDetailsSheetMainContent from "./userDetailsSheetMainContent"
  

const UserDetailsBox = ({details}) => {
  return (
    <SheetHeader>
      <SheetTitle>{details.name}</SheetTitle>
      <SheetDescription>
        Comming Soon This Features...
      </SheetDescription>
      <UserDetailsSheetMainContent/>
    </SheetHeader>
  )
}

export default UserDetailsBox