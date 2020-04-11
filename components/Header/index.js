import style from './style.scss'

const Header = () => {

    return (
        <header>
            <div className={style.container}>
                <h1 className={style.title}> HARDY MARKET </h1>
                <h3> Un marketcito para vos..</h3>
            </div>
        </header>
    )

}

export default Header