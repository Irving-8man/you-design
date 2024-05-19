/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/proyectos',
        permanent: true,
      },
      {
        source: '/auth',
        destination: '/auth/registro',
        permanent: true,
      },
      {
        source: '/edicion',
        destination: '/edicion/proyecto',
        permanent: true,
      },
    ]
  },

};

module.exports = nextConfig;
