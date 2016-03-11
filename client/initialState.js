export default {
  user: {
    profile: {
      id: 1,
      avatar: 'https://i.ytimg.com/vi/1v6M41Divso/maxresdefault.jpg',
      fullName: 'Kim Panda',
      street: 'back handle lane',
      city: 'Austin',
      state: 'Virginia',
      zip: '56352',
    },
    isDriver: false,
    isRider: false,
    friends: [
      {
        id: 2,
        avatar: 'http://spirit-animals.com/wp-content/uploads/2012/09/Dolphin.jpg',
        fullName: 'Flipp',
      },
      {
        id: 7,
        avatar: 'http://vignette3.wikia.nocookie.net/pokemon/images/1/' +
                '16/025Pikachu_OS_anime_10.png/revision/20150102074354',
        fullName: 'PIKA',
      },
    ],
  },
  ride: {
    isWaitingForMatch: false,
    isMatched: false,
    isConfirmed: false,
    match: null,
  },
  routing: {
    locationBeforeTransitions: null,
  },
};
