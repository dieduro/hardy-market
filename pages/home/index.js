import Head from 'next/head'
import Header from '../../components/Header/'
import style from './style.scss'
import fetch from 'node-fetch'

import ProductList from '../../components/ProductList'

require('dotenv').config()

const Home = ({products}) => {

  return(
    <div className="container">
      <Head>
        <title>HardyMarket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/> 
      <main>
        <ProductList products={products} />
      </main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev by Die Duro <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>

    </div>
  )
}

Home.getInitialProps = async context => {
  const url = "https://hardy.fit/wp-json/wc/v3/products?consumer_key=" + process.env.API_CONSUMER_KEY + "&consumer_secret=" + process.env.API_SECRET_KEY
  
  const res = await fetch(url)
  const products = await res.json()

  console.log(products)
  return {
      products
  }
}


export default Home