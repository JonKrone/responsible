import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

import { Logo } from '../components/TopNavBar/Logo';
import { TopNavBarRightButton } from '../components/TopNavBar/RightButton';

import * as userAction from '../actionCreators/user';
import * as rideAction from '../actionCreators/ride';
import * as driveAction from '../actionCreators/drive';

function TopNavBar({ onCancel, onEndDriver, onPickUp, onComplete, onHomeClick, onProfileButtonClick,
  onFriendButtonClick, onSignoutButtonClick, ...props, }) {
  let { ride, user } = props;

  let endDriver = onEndDriver.bind(null, user.user_id);

  let cancelClick;
  if (ride.match) {
    cancelClick = onCancel.bind(null, ride.match.user_id, ride.ride_id);
    onPickUp = onPickUp.bind(null, ride.match.user_id);
    onComplete = onComplete.bind(null, user.user_id, ride.match.user_id, user.location);
  } else
    cancelClick = onCancel.bind(null, user.user_id, null);

  return (
    <Navbar className="nav">
      <Navbar.Header className="mainHeader">
        <Navbar.Brand className="mainTitle">
          <a href="/" onClick={onHomeClick} bsClass="navHeader" >Fleet</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown eventKey={4} title="Settings" id="nav-dropdown">
          <MenuItem eventKey="4.1" onClick={onProfileButtonClick}>Profile</MenuItem>
          <MenuItem eventKey="4.2" onClick={onFriendButtonClick}>Friends</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.3" onClick={onSignoutButtonClick}>Signout</MenuItem>
        </NavDropdown>
       </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#"> <TopNavBarRightButton
          {...props}
          onCancel={cancelClick}
          onEndDriver={endDriver}
          onPickUp={onPickUp}
          onComplete={onComplete}
          />
        </NavItem>
      </Nav>
    </Navbar>
  );
}

const mapStateToProps = function (state) {
  return state.toJS();
};

// jscs:disable
const mapDispatchToProps = function (dispatch) {
  return {
    onProfileButtonClick() {
      dispatch(push('/profile'))
    },
    onCancel: (user_id, ride_id) => {
      // Our current approach is to modify onCancel in the rendering of our
      // component - a better approach might be to augment that here, where we have access
      // to the component's next props through the second parameter of mapDispatchToProps
      console.log('dispatching cancel:', user_id, ride_id);
      dispatch(rideAction.cancelRide({ user_id, ride_id }));
    },
    onEndDriver(user_id) {
      dispatch(driveAction.deleteDriver(user_id));
    },
    onPickUp(partner_id) {
      dispatch(rideAction.pickUp(partner_id));
    },
    onComplete(user_id, partner_id, user_location) {
      dispatch(rideAction.completeRide(partner_id));
      dispatch(driveAction.createDriver(user_id, user_location));
    },
    onHomeClick() {
      dispatch(push('/'));
    },
    onFriendButtonClick() {
      dispatch(push('/friends'));
    },
    onSignoutButtonClick() {
      OAuth.clearCache();
      localStorage.clear();
      dispatch(push('/login'));
      dispatch(userAction.signout(false));
    },
  };
};
// jscs:enable

export const TopNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
