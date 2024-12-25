const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@common': path.resolve(__dirname, 'src/common/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@graphql': path.resolve(__dirname, 'src/graphql/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@sharedTypes': path.resolve(__dirname, 'src/types/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@customCharts': path.resolve(__dirname, 'src/components/Analysis/Charts/'),
    },
  },
};
