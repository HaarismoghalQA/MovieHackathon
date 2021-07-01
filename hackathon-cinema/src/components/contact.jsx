// Bootstrap - Forms, Alert(Modal)
import { useState } from 'react'

const ContactUsPage = () => {

    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
         e.preventDefault();
         alert('Thanks for Feedback.')
       }

    const handleChange = (e) => {
        let newFormData = formData;
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label forhtml="name" > Name: </label><br/>
            <input id="name" name="name" type="text" onChange={handleChange} required /> <br/>
            <label forhtml="email" > Email: </label><br/>
            <input id="email" name="email" type="email" onChange={handleChange} required /> <br/>
            <label forhtml="message" > Message: </label><br/>
            <textarea id="message" name="message" rows="4" cols="50" onChange={handleChange} required /> <br/>
            <button type="submit"> Submit </button>
        </form>
     );
}
 
export default ContactUsPage;