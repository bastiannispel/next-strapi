module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c9dc8fe38df0df649b560d16e42483e'),
  },
});
