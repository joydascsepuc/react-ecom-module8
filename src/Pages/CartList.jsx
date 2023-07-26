import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCartList } from "../APIRequests/api";
import Layout from "../Layout/Layout";

const CartList = () => {
    const [list, setList] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('access_token') == null) {
            navigator(`/`);
        } else {
            (async() => {
                let response = await getCartList();
                setList(response);
            })()
        }
    }, [])

    return (
        <Layout>
            {
                list.length > 0 ? 'hi' : 'null'
            }
        </Layout>
    )
}

export default CartList