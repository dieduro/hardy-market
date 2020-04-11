import Link from 'next/link'
import ProductCard from '../ProductCard'
import style from './style.scss'

const ProductList = ({products}) => {

    products.map(product => {
        
        const images = []
        product.images.map(image => {
            //console.log(image.src)
        })
    });

    return(
        <div className={style.container}>
            <ul className={style.productList}>
                {products.map((product, key) => {
                    return ( 
                        <li key={key}>
                        <Link href="/product">
                            <a>
                                <ProductCard key={key} item={product}/>
                            </a>
                        </Link>
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}


export default ProductList