import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../contexts/user.context';
import { ReactComponent as CrwnLogo } from '../../assets/img/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            shop
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                sign out
              </span>
            ) : (
              <Link className="nav-link" to='/login'>
                sign in
              </Link>
            )
          }

        </div>
      </div >
      <Outlet />
    </>
  );
};

export default Navigation;