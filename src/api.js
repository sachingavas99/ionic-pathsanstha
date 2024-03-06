// import { Plugins } from "@capacitor/core";

// const { Http } = Plugins;

// const baseUrl = "https://192.168.1.124:8443";
// const apiUrlCallUrl = "https://61.0.40.6:3000/";

// const api = {
//   post: async (url, prm) => {
//     const token = localStorage.getItem("token");
//     let params = { ...prm, ...{ email: token } };

//     const response = await Http.request({
//       method: "POST",
//       url: `${baseUrl}${url}`,
//       headers: {
//         "X-Requested-With": "XMLHttpRequest",
//         Accept: "application/json",
//         // Add any additional headers if needed
//       },
//       data: params,
//     });

//     return response;
//   },
//   login: async (url, params) => {
//     alert("apiUrlCallUrl" + apiUrlCallUrl);

//     const response = await Http.request({
//       method: "POST",
//       url: `${baseUrl}${url}`,
//       headers: {
//         "X-Requested-With": "XMLHttpRequest",
//         Accept: "application/json",
//         // Add any additional headers if needed
//       },
//       data: params,
//     });

//     return response;
//   },
// };

// export default api;

import axios from "axios";
// import { CapacitorHttp } from "@capacitor/core";
// import { Plugins } from "@capacitor/core";
// const { Http } = Plugins;

// import { Http } from "@capacitor-community/http";

// import { HTTP } from "@ionic-native/http";
// import https from "https";

// const instance = axios.create({
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false,
//   }),
// });

axios.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
  Accept: "application/json",
};
const baseUrl = "https://61.0.40.6:8443";
// const baseUrl = "https://203.192.231.218:8443";

const apiUrlCallUrl = "https://ionic-server-proxy.vercel.app/";
// const apiUrlCallUrl = "https://varadpathmobile.com";
// const apiUrlCallUrl = "http://103.93.97.204:3000/";
const api = {
  post: (url, prm) => {
    const token = localStorage.getItem("token");
    let params = { ...prm, ...{ email: token } };
    return axios.post(apiUrlCallUrl, { url: `${baseUrl}${url}`, params });
    // return axios.post(baseUrl + url, params);
  },
  login: (url, params) => {
    // alert("apiUrlCallUrl" + apiUrlCallUrl);
    return axios.post(apiUrlCallUrl, { url: `${baseUrl}${url}`, params });
    // return axios.post(baseUrl + url, params);
    // const options = {
    //   url: baseUrl + url,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: params,
    // };
    // return CapacitorHttp.post(options);
  },
  // login: async (url, params) => {
  //   try {
  //     alert("start sending");
  //     alert(baseUrl + url);
  //     alert(JSON.stringify(params));
  //     return Http.request({
  //       method: "POST",
  //       url: baseUrl + url,
  //       params,
  //       data: params,
  //       sslConfig: {
  //         // Trust specific certificates
  //         allowInvalidCertificates: true, // Allow invalid certificates (such as self-signed)
  //         // Uncomment below and provide certificate data to trust a specific certificate
  //         // allowedFingerprints: ['SHA-256 fingerprint'], // Array of SHA-256 fingerprints
  //       },
  //     }).then(({ data }) => {
  //       alert("success");
  //       alert(data);
  //       return data;
  //     });
  //   } catch (error) {
  //     alert("error >>>");
  //     alert(error);
  //   }

  //   // try {
  //   //   const options = {
  //   //     url: baseUrl + url,
  //   //     // headers: { "X-Fake-Header": "Thomas was here" },
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     data: params,
  //   //     sslConfig: {
  //   //       // Trust specific certificates
  //   //       allowInvalidCertificates: true, // Allow invalid certificates (such as self-signed)
  //   //       // Uncomment below and provide certificate data to trust a specific certificate
  //   //       // allowedFingerprints: ['SHA-256 fingerprint'], // Array of SHA-256 fingerprints
  //   //     },
  //   //   };

  //   //   const response = await Http.post(options);
  //   //   alert(">>");
  //   //   alert(response);
  //   //   return response;
  //   // } catch (error) {
  //   //   alert("Error making HTTP request:", error);
  //   // }

  //   // try {
  //   //   const response = await CapacitorHttp.request({
  //   //     method: "POST",
  //   //     url: baseUrl + url,
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     data: params,
  //   //     sslConfig: {
  //   //       // Trust specific certificates
  //   //       allowInvalidCertificates: true, // Allow invalid certificates (such as self-signed)
  //   //       // Uncomment below and provide certificate data to trust a specific certificate
  //   //       // allowedFingerprints: ['SHA-256 fingerprint'], // Array of SHA-256 fingerprints
  //   //     },
  //   //   });
  //   //   alert(response);
  //   //   return response;
  //   // } catch (error) {
  //   //   console.error("Error making HTTP request:", error);
  //   // }
  // },
};

export default api;
