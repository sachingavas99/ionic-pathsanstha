import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'pathsanstha',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
  // server: {
  //   androidScheme: 'https',
  //   allowNavigation: [
  //     "https://203.192.231.218:8443"
  //   ]
  // },
  // plugins: {
  //   CapacitorHttp: {
  //     enabled: true,
  //   },
  // },
  // SSLPinning: {
  //   "certs": ["cert/IntermediateCertificate.cer", "cert/rootCertificate.cer"],
  //   "excludedDomains": ["https://analytics.google.com, https://myapi.com/subpath"]
  // }
};

export default config;
