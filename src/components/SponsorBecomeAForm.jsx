import { Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function SponsorBecomeAForm() {
    const [formData,setFormData] = useState({
        organization_name: '',
        organization_email:''
    })

    const handleChange = (event)=>{
        const {name,value} = event.target
        setFormData((prevdata)=>({...prevdata, [name]:value}))
    }

  return (
    <>
    <form>
        <Input type="text" onChange={handleChange} id='organization_name' required value={formData.organization_name} 
        placeholder='Organization Name'
        />
        <Input type="text" onChange={handleChange} id='organization_email' required value={formData.organization_email} 
        placeholder='Organization Email'
        />
    </form>
    </>
  )
}

export default SponsorBecomeAForm