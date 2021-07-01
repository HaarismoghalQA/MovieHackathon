// Bootstrap - Forms, Alert(Modal)
import { useState } from 'react'

const ContactUsPage = () => {

    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
         e.preventDefault();
         alert('Thanks for Feedback.')
       }
    
    return (
        <form onSubmit={handleSubmit}>
            <label forHtml="name" > Name: </label><br/>
            <input id="name" name="name" type="text" onChange={setFormData} required /> <br/>
            <label forHtml="email" > Email: </label><br/>
            <input id="email" name="email" type="email" onChange={setFormData} required /> <br/>
            <label forHtml="message" > Message: </label><br/>
            <textarea id="message" name="message" rows="4" cols="50" onChange={setFormData} required /> <br/>
            <button type="submit"> Submit </button>
        </form>
     );
}
 
export default ContactUsPage;