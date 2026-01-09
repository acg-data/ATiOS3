const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === 'web') {
    if (moduleName === 'react-native') {
      return context.resolveRequest(context, 'react-native-web', platform);
    }
    
    if (moduleName.startsWith('react-native/Libraries/')) {
      return context.resolveRequest(context, 'react-native-web/dist/index', platform);
    }

    if (moduleName === 'react-native-maps' || moduleName.startsWith('react-native-maps/')) {
      return {
        type: 'empty',
      };
    }
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
