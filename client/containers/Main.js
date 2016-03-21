import { connect } from 'react-redux';

import { push } from 'react-router-redux';

import { TopNavBarContainer } from './TopNavBar';
import { BottomNavBarContainer } from './BottomNavBar';
import { SplashContainer } from './Splash';
import { MapView } from '../components/MapView';
import { GithubButton } from '../models/Github';
import { RiderItemList } from './RiderItemList';

import * as userAction from '../actionCreators/user';
import * as rideActions from '../actionCreators/ride';

var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;

function Main({
  user: { isLoggedIn, location, profile, isDriver, isRider, },
  ride: { riders, match, directions, },
  redirectToProfile,
  redirectToLogin,
  logoutClick,
}) {
  return (
    <div className="MainApp">
      <TopNavBarContainer />
      <div className='AuthButtons'>
    <a className='button' onClick={User.facebook}>
        <i className='fa fa-facebook-official'>
      </i>&nbsp;Facebook</a>
    <GithubButton />
    <a className='button' onClick={User.google}>
        <i className='fa fa-google'>
        </i>&nbsp;Google</a>
      </div>
    <button onClick={logoutClick} />
      {
        !isDriver && !isRider ?
          <SplashContainer /> :
          <MapView isRider={isRider} match={match} location={location} directions={directions} />
      }
      {
        isDriver ?
          <RiderItemList riders={riders} /> :
          <div className="empty" />
      }
      {
        isRider ?
        <BottomNavBarContainer /> :
        <div className="empty" />
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  // console.log('main container mapStateToProps state:', state.toJS());
  return state.toJS();
};

const mapDispatchToProps = function (dispatch) {
  return {
    onDirectionsResult(result) {
      // dispatch(rideActions.setDirections(result));
    },

    logoutClick() {
      OAuth.clearCache();
      dispatch(push('/login'));
    },

    redirectToProfile() {
      dispatch(push('/profile'));
    },

    redirectToLogin() {
      dispatch(push('/login'));
    },
  };
};

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
