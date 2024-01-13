import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectisLoggedIn, selectisRefreshing } from 'store/auth/selector';
import { getIsLoading } from 'store/contacts/selectors';

export const NavigationBar = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const isRefreshing = useSelector(selectisRefreshing);

  const isLoading = useSelector(getIsLoading);
  return (
    <header>
      <nav className="container navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container-fluid">
          <div className=" navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
            </div>
            <div className="navbar-nav">
              {isLoggedIn ? (
                <>
                  <NavLink className="nav-link" to="/contacts">
                    Contacts
                  </NavLink>
                  <UserMenu />
                </>
              ) : (
                <>
                  <NavLink className="nav-link" to="/register">
                    Registration
                  </NavLink>
                  <NavLink className="nav-link" to="/login">
                    LogIn
                  </NavLink>
                </>
              )}
            </div>
          </div>
          {(isRefreshing || isLoading) && <Loader />}
        </div>
      </nav>
    </header>
  );
};
