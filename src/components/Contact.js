import React, { useState } from "react";
import "./style.css";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', time: '', about: '' })
  
  const handleChange = (e) => {
  setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ name: '',email:'',phone:'',time:'',about:'' });
    try {
      const responce = await axios.post(
        "http://localhost:3001/submit",
        formData
      );
      console.log(responce.data);
     
    }
    catch(element) {
      console.log(element.message);
    }
    alert('Successfully Added')
  }
 
  return (
    <div className="App mx-auto text-center mt-4" id="contact">
      <h3 className="mt-4 pt-3 text-white">Contact Us</h3>
      <form className="mt-4" onSubmit={handleSubmit}  method="post" action="/submit">
        <label className="text-white">
          Name :
          <input
            type="text"
            name="name"
            required
            className="ms-3"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="mt-4 text-white">
          Email :
          <input
            type="email"
            name="email"
            className="ms-4"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="mt-4 text-white">
          Phone :
          <input
            type="tel"
            name="phone"
            required
            className="ms-3"
            placeholder="Enter your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="mt-4 me-5 text-white">
          Time to Connect :
          <input
            type="datetime-local"
            name="time"
            required
            value={formData.time}
            className="me-4 ms-1 "
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="mt-4 text-white">
          Message :
          <textarea
            name="about"
            required
            className="ms-1 me-2"
            placeholder="Describe Here.."
            value={formData.about}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="mt-4 btn btn-danger">
          Submit Now...
        </button>
      </form>
    </div>
  );
}

export default Contact;
