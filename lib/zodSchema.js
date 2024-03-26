import { z } from "zod";

const ContactInformationSchema = z.object({
    mobile: z.string(),
    email: z.string().optional(),
  });
  
  const DonationSchema = z.object({
    date: z.date().optional(),
    bloodTypeDonated: z.string(),
    notes: z.string()
  });
  
  export const CreateDonorFormZodSchema = z.object({
    name: z.string(),
    fatherName:z.string().optional(),
    motherName:z.string().optional(),
    age: z.string().optional(),
    majlish: z.object({
        name:z.string(),
        halka: z.string().optional()
    }),
    address: z.string(),
    bloodType: z.string().optional(),
    contactInformation: ContactInformationSchema.optional(),
    lastDonation: DonationSchema.optional(), // Making lastDonation optional
  });





  // Default values

  const createDonorDefaultValues = {
    name:"",
    age: null,
    majlish:"",
    bloodType: {},
    contactInformation: {},
    lastDonation: {},
  } 