import "./Header.css"

const Header = () => {
  return (
    
    <div className="header">
        <div className="container">
            <div className="header__wrapper">
                <div className="header__logo">
                    <img src="./src/assets/img/SHOP.CO.png" alt="" />
                </div>
                <div className="header__ul">
                    <ul className="list">
                        <li><a href="/">Shop</a></li>
                        <li><a href="./onsale">On Sale</a></li>
                        <li><a href="./nwarive">New Arrivals</a></li>
                        <li><a href="./brands">Brands</a></li>
                    </ul>
                </div>
                <div>
                    <input className="input" type="text" placeholder="Search for products..." />
                </div>
                <div>
                    <img src="./src/assets/img/Frame 5.svg" alt="" />
                </div>
            </div>
        </div>
    </div>

  )
}

export default Header