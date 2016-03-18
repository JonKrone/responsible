import fetch from 'isomorphic-fetch';

// expects props to be: { first_name, last_name, avatar, username, verifyBy }
export function fetchUserInfo(props) {
  console.log('in userActionCreator', props);
  return (dispatch) => {
    dispatch(requestUserInfo());

    fetch('/user/tmp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    })
    .then(function (response) {
      return response.json();
    })
    .then((info) => dispatch(receiveUserInfo(info)))
    .catch((error) => dispatch(requestUserInfoError(error)));
  };
};

function requestUserInfo() {
  return { type: 'REQUEST_USER_INFO' };
}

function receiveUserInfo(info) {
  return { type: 'RECEIVE_USER_INFO', entry: info };
}

function requestUserInfoError(error) {
  console.error('uh oh, error requesting user info:', error);
  return { type: 'REQUEST_USER_INFO_ERROR', entry: error };
}

export function setDriver(isDriver) {
  return { type: 'SET_DRIVER', entry: isDriver };
}

export function setRider(isRider) {
  return { type: 'SET_RIDER', entry: isRider, };
}

export function signout(info) {
  return { type: 'SIGNOUT', entry: info };
}
