const Api = {
  Url: process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : 'https://l.orlow.me/',
  LocalStorageTokenName: 'token',
};

export default Api;
