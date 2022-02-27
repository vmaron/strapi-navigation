module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b7a2531788e20f8975c1b5f40ec88c2f'),
  },
});
