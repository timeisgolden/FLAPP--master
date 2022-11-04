import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'FLapp',
  webDir: 'www',
  bundledWebRuntime: false,

  server: {
    url: 'http://192.168.1.182:8100',
    cleartext: true,
  },
};

export default config;
