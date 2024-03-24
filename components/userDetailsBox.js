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
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
      <UserDetailsSheetMainContent/>
    </SheetHeader>
  )
}

export default UserDetailsBox