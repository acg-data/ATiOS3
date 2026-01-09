const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

let config = getDefaultConfig(__dirname);

config = withNativeWind(config, { input: './src/global.css' });

const originalResolveRequest = config.resolver.resolveRequest;

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
  
  if (originalResolveRequest) {
    return originalResolveRequest(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
