// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBVpo1sWmDNjeOEMBSJK73PPrIeIZH3CFM",
    authDomain: "logindefinitivo-5f23b.firebaseapp.com",
    projectId: "logindefinitivo-5f23b",
    storageBucket: "logindefinitivo-5f23b.appspot.com",
    messagingSenderId: "900585579269",
    appId: "1:900585579269:web:62a2443d1d9facad490d6c",
    measurementId: "G-CWMTHB2R1X"
  },
  auth: {
    domain: "dev-yfy8b7i0.eu.auth0.com",
    clientId: "7EtfUdVnaExY8gUPXS3K8Yv1aJlIriRy",
    redirectUri: window.location.origin,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
