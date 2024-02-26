/* importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
}); */





// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
 
// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
 
firebase.initializeApp(firebaseConfig);
 
// Retrieve firebase messaging
const messaging = firebase.messaging();
 
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
 
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
 
  self.registration.showNotification(notificationTitle, notificationOptions);
});



// self.addEventListener('push', function (event) {
//     console.log('[Service Worker] Push Received.');
//     const payload = event.data ? event.data.json() : {};
//     console.log('[Service Worker] Push Payload:', payload);

//     // Extract necessary data from the payload
//     const title = payload.notification.title || 'Default Title';
//     const options = {
//         body: payload.notification.body || 'Default Body',
//         icon: payload.notification.icon || 'icon.png'
//     };

//     // Directly open the desired URL when notification is clicked
//     self.addEventListener('notificationclick', function (event) {
//         console.log('Notification clicked!');
//         event.notification.close();

//         const urlToOpen = 'http://localhost:3000/admin/account/profile?_username=govindbiswas079&_user=65a815d751b20870641b132b';

//         event.waitUntil(
//             clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
//                 for (let i = 0; i < windowClients.length; i++) {
//                     const client = windowClients[i];
//                     if (client.focused) {
//                         return client.navigate(urlToOpen);
//                     }
//                 }
//                 if (clients.openWindow) {
//                     return clients.openWindow(urlToOpen);
//                 }
//             })
//         );
//     });
// });

