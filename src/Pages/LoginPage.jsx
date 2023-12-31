import { useState } from "react"
import Layout from "../Layout/Layout"
import { sendOTP } from "../APIRequests/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    let [email, setEmail] = useState('');

    // Using for navigate to another page
    const navigate = useNavigate();

    const getOTP = (e) => {
        e.preventDefault();
        (async() => {
            let response = await sendOTP(email);
            if(response) {
                // redirect
                navigate(`/otp?email=${email}`);
            } else {
                alert('Something wrong with api');
            }
        })()   
    }

    return (
        <Layout>
            <form action="">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Your Email</span>
                    </label>
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="info@site.com" className="input input-bordered" />
                </div>
                <button className="btn btn-success btn-sm mt-3" onClick={getOTP}>Sign in</button>
            </form>
        </Layout>
    )
}

export default LoginPage