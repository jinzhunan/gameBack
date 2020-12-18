

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b0f5b81950bc140f066a4a4d4296e95f')
    },
  },
  cron: { enabled: true},
  url: "https://jinzhu-game.herokuapp.com"
});
