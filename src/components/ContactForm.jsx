import React ,{useState}from "react";
import { Text,Box,FormControl,FormLabel, Textarea,Input,Button, Alert,  AlertIcon } from "@chakra-ui/react";

export const ContactForm = () =>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });
      const [isMissingFields, setIsMissingFields] = useState(false);
      const [isBadEmail, setIsBadEmail] = useState(false);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsMissingFields( Object.values(formData).some(x => !x))
        setIsBadEmail( !emailPattern.test(formData.email))
      };
    
      return (
        <>
        <Text fontSize='4xl' as='b' align='left' >Contact Us</Text> 

        {isMissingFields?  (
        <Alert status="warning" mb={4}>
          <AlertIcon />
          Please fill all the fields correctly!
        </Alert> ):null}
         {isBadEmail ?(
        <Alert status="warning" mb={4}>
          <AlertIcon />
          Please input the correct email!
        </Alert> ):null}
        <Box display="flex" justifyContent="center" alignItems="center">
            <Box minW='550px' p={5}  borderRadius="md" boxShadow="lg">
                <FormControl mb={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input name="name" value={formData.name} onChange={handleChange} />
                </FormControl>
                <FormControl mb={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} />
                </FormControl>
                <FormControl mb={4} isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" minH='300px' value={formData.message} onChange={handleChange} />
                </FormControl>
                <Button type="submit" colorScheme="teal" onClick={handleSubmit}>Submit</Button>
            </Box>
        </Box>
        </>
        )
} 