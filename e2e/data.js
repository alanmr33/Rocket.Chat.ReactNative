const random = require('./helpers/random');
const value = random(20);
const data = {
    server: 'https://stable.rocket.chat',
    alternateServer: 'https://unstable.rocket.chat',
    user: `user${ value }`,
    password: `password${ value }`,
    alternateUser: 'detox',
    alternateUserPassword: '123',
    alternateUserTOTPSecret: 'HJGECLDOH5RCKJSWMREXAKKENVZXKOJ6I5ZTKPSRIEQWGOK5K5KA',
    email: `diego.mello+e2e${ value }@rocket.chat`,
    random: value
}
module.exports = data;