import React, { Fragment, useEffect, useState } from 'react';
import { CgMouse } from 'react-icons/all';
import './Home.css';
import ProductCard from './ProductCard.js';
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
// import { Link } from 'react-router-dom';

import Contact from '../layout/Contact/Contact';
import About from '../layout/About/About';
// import Sastomandu from '../../images/sastomandu.png';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PersonIcon from '@material-ui/icons/Person';
// import SearchIcon from '@material-ui/icons/Search';
import Recommend from '../Recommend/recommend';

const Home = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  // const [isScrolled, setIsScrolled] = useState(false);

  // const searchFunc = () => {
  //   history.push('/search');
  // };
  // const cartFunc = () => {
  //   history.push('/cart');
  // };
  // const accountFunc = () => {
  //   history.push('/account');
  // };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset;
  //     setIsScrolled(scrollTop > 200);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="SASTOMANDU" />

          {/* nav-section */}
          {/* <nav
            style={isScrolled ? { background: '#2E3138' } : {}}
            className="nav-section"
          >
            <div className="nav-container">
              <Link to="/" className="brand-logo">
              
                <img className="logo-img" src={Sastomandu} alt="sastomandu" />
              </Link>
              <div className="nav-links-section">
                <ul className="nav-links">
                  <Link to="/" className="nav-item">
                    Home
                  </Link>
                  <Link to="/products" className="nav-item">
                    Products
                  </Link>
                  <Link to="/contact" className="nav-item">
                    Contact
                  </Link>
                  <Link to="/about" className="nav-item">
                    About
                  </Link>
                </ul>
              </div>
              <div className="icons-section">
                <ShoppingCartIcon
                  style={{
                    color: '#bf452f',
                    height: '100%',
                    width: '40px',
                    marginRight: '15px',
                  }}
                  onClick={cartFunc}
                />
                <PersonIcon
                  style={{
                    color: 'lightblue',
                    height: '100%',
                    width: '40px',
                    marginRight: '15px',
                  }}
                  onClick={accountFunc}
                />
                <SearchIcon
                  style={{
                    color: 'purple',
                    height: '100%',
                    width: '40px',
                    marginRight: '15px',
                  }}
                  onClick={searchFunc}
                />
              </div>
            </div>
          </nav> */}
          {/* end of nav-section */}

          <div className="banner">
            <p>Welcome to SASTOMANDU..</p>
            <h1>Reduce,Reuse,Recycle.Don't throw it away,sell it today.</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <Recommend />

          <Contact />

          <About />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
