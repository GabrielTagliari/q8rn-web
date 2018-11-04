/*
 * This file is picked up by the build system only
 * when building for PRODUCTION
 */

import { register } from 'register-service-worker'

register(process.env.SERVICE_WORKER_FILE, {
  ready () {
    alert('App is being served from cache by a service worker.')
    console.log('App is being served from cache by a service worker.')
  },
  registered (registration) { // registration -> a ServiceWorkerRegistration instance
    console.log('Service worker has been registered.')
  },
  cached (registration) { // registration -> a ServiceWorkerRegistration instance
    alert('Content has been cached for offline use.')
    console.log('Content has been cached for offline use.')
  },
  updatefound (registration) { // registration -> a ServiceWorkerRegistration instance
    alert('New content is downloading.')
    console.log('New content is downloading.')
  },
  updated (registration) { // registration -> a ServiceWorkerRegistration instance
    alert('New content is available; please refresh.')
    console.log('New content is available; please refresh.')
  },
  offline () {
    alert('No internet connection found. App is running in offline mode.')
    console.log('No internet connection found. App is running in offline mode.')
  },
  error (err) {
    console.error('Error during service worker registration:', err)
  }
})

// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
