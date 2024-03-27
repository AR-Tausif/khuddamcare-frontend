import { toast } from "@/components/ui/use-toast";
import axios from "axios";

export const createDonor = async (donorData) => {
    try {
      const response = await axios.post('https://khuddam-care.vercel.app/api/v1/donors/create-donor', donorData);
      toast({
        title: <p className="text-green-500">Boom, Donor Created Successfully</p>,
    },)
      // Handle success or update UI
    } catch (error) {
      console.error('Error creating donor:', error);
      // Handle error or show error message
    }
  };


