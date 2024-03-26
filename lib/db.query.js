import axios from "axios";

export const getAllDonor = async (setDonors) => {
    try {

        const response = await axios.get('https://khuddam-care.vercel.app/api/v1/donors');
        setDonors(response.data.data);
      
      console.log(response,'dd')
      // Handle success or update UI
    } catch (error) {
      console.error('Error creating donor:', error);
      // Handle error or show error message
    }
  };
