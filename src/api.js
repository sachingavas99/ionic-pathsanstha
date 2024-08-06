import axios from "axios";
import { CapacitorHttp } from "@capacitor/core";
import { Plugins } from "@capacitor/core";
const { Http } = Plugins;

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
// const baseUrl = "https://59.97.238.239:8443";
// const baseUrl = "https://103.93.97.207:8443";
// const baseUrl = "malkapururbansoc.in:8443";

// const baseUrl = "https://203.192.231.218:8443";
// const apiUrlCallUrl = "http://localhost:3000";
const apiUrlCallUrl = "https://ionic-server-proxy.vercel.app/";

const baseUrl1 = "https://103.93.97.207:8443";
const baseUrl2 = "https://malkapururbansoc.in:8443";

const checkRequest = async (url, params, attempt = 1) => {
  const baseUrl = attempt === 1 ? baseUrl1 : baseUrl2;
  try {
    return await axios.post(apiUrlCallUrl, { url: `${baseUrl}${url}`, params });
  } catch (error) {
    if (attempt === 1) {
      // console.warn(
      //   `Primary base URL failed: ${error.message}. Trying secondary URL...`
      // );
      return checkRequest(url, params, 2);
    } else {
      throw error; // Rethrow the error if the secondary URL also fails
    }
  }
};

const api = {
  post: (url, prm) => {
    const token = localStorage.getItem("token");
    let params = { ...prm, ...{ email: token } };
    // return axios.post(apiUrlCallUrl, { url: `${baseUrl}${url}`, params });
    return checkRequest(url, params);
    // return axios.post(baseUrl + url, params);
  },
  login: (url, params) => {
    // return axios.post(apiUrlCallUrl, { url: `${baseUrl}${url}`, params });
    return checkRequest(url, params);
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
