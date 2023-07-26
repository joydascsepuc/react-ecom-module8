import { useEffect, useState } from "react"
import Layout from "../Layout/Layout"
import { getProducts } from "../APIRequests/api";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async() => {
        let response = await getProducts();
        setData(response);
    })()
  }, [])

  return (
    <Layout>
        { data.length > 0 ? <ProductCard data={data} /> : <Loader/> }
    </Layout>
  )
}

export default HomePage