"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { CreateDonorFormZodSchema } from "@/lib/zodSchema"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { createDonor } from "@/lib/db.mutation"
import { Textarea } from "./ui/textarea"


const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
]





export function CreateDonorForm() {
    const form = useForm({
        resolver: zodResolver(CreateDonorFormZodSchema),
        defaultValues: {
            name: "",
            fatherName: "",
            motherName: "",
            age: "", // or any default number value
            majlish: {
                name: "",
                halka: ""
            },
            address: "",
            bloodType: "",
            contactInformation: {
                mobile: "",
                email: ""
            },
            lastDonation: {
                date: "",
                bloodTypeDonated: "",
                notes: ""
            },
        },


    })

    async function onSubmit(data) {

        console.log(data)
        return await createDonor(data)
    }

    return (
        <>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <div className="lg:flex lg:gap-6 lg:items-center">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Type name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="fatherName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{"Father's Name"}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Type father's name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="motherName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{"Mother's Name"}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Type mother's name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className="lg:flex lg:gap-6 lg:items-center">
                        <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Age</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter your age" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bloodType"
                            className="w-96"
                            render={({ field }) => (
                                <FormItem className="w-52">
                                    <FormLabel>Blood Group</FormLabel>
                                    <Select onValueChange={field.onChange}  {...field}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a Blood Group" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="A&plus">{"positive (A&plus)"}</SelectItem>
                                            <SelectItem value="A&minus">{"negative (A&minus;)"}</SelectItem>
                                            <SelectItem value="B&plus">{"positive (B&plus)"}</SelectItem>
                                            <SelectItem value="B&minus">{"negative (B&minus;)"}</SelectItem>
                                            <SelectItem value="AB&plus">{"positive (AB&plus)"}</SelectItem>
                                            <SelectItem value="AB&minus">{"negative (AB&minus;)"}</SelectItem>
                                            <SelectItem value="O&plus">{"positive (O&plus)"}</SelectItem>
                                            <SelectItem value="O&minus">{"negative (O&minus;)"}</SelectItem>


                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastDonation.date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Last Donation Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    <div className="lg:flex lg:gap-6 lg:items-center">
                        <FormField
                            control={form.control}
                            name="majlish.name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Majlish</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your majlish name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="majlish.halka"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Halka</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your halka name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contactInformation.mobile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your mobile number..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Type your address here." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}
