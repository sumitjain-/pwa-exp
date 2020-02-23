console.log('I will register service workers');

async function cacheInterceptor(fetchEvent) {
  const cache = await caches.open('page-cache');

  const res = await cache.match(fetchEvent.request);

  if (!!res) {
    console.log('returned from cache');
    return res;
  } else {
    console.log('returned from network');
    const fetchResponse = await fetch(fetchEvent.request);
    await cache.put(fetchEvent.request, fetchResponse.clone());
    return fetchResponse;
  }
}

function fetchEventHandler(fetchEvent) {
  console.log("[Service Worker]", fetchEvent);

  fetchEvent.respondWith(
    cacheInterceptor(fetchEvent)
  );
}

self.addEventListener('fetch', fetchEventHandler);