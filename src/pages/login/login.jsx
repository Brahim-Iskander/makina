import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    // State to hold form data
    const nav = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const sendlogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://makina-1.onrender.com/login', formData);
            
            // Assuming the backend sends back a token
            localStorage.setItem("active", "true");
            console.log("Login successful 2");

            nav("/inputs");
        } catch (err) {
            console.log("Login failed");
        }
    };

    return(
        <>
        <form onSubmit={sendlogin}>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label className="form-label">password</label>
            <input value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} type="password" className="form-control" placeholder="name@example.com"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
 
        </form>
        
        </>
    )
    
};
