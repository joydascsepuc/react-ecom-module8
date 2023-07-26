import { useState } from "react"
import Layout from "../Layout/Layout"
import { checkLogin } from "../APIRequests/api";
import { useParams, useSearchParams } from "react-router-dom";

const OTPPage = () => {

    const [otp, setOTP] = useState('');

    // Getting the email parameter from the url
    const [searchParam] = useSearchParams();
    const email = searchParam.get('email');

    const verifyOTP = (e) => {
        e.preventDefault();
        (async() => {
            let response = await checkLogin(email, otp);
            console.log(response);
        })()   
    }

    return (
        <Layout>
            <form action="">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Your OTP</span>
                    </label>
                    <input type="text" value={otp} onChange={(e) => {setOTP(e.target.value)}} placeholder="4 digit code" className="input input-bordered" />
                </div>
                <button className="btn btn-success btn-sm mt-3" onClick={verifyOTP}>Login</button>
            </form>
        </Layout>
    )
}

export default OTPPage