var cacheName = 'v3';  
var cacheFiles = [
    './',
    './index.html',
    './images/dayo1.png',
    './images/dayo2.png',
    './images/dayo3.png',
    './images/dayo4.png',
    './images/dayo5.png',
    './images/moving-line.png',
    './images/moving-line2.png',
    './images/moving-line3.png',
    './images/moving-line4.png',
    './images/moving-line5.png',
    './images/moving-line6.png',
    './images/pics.jpg',
    './images/profile3.jpg',
    './images/star2.png',
    './images/stars3.png',
    './images/style-guide.png',
    './images/style-guide2.png',
    './images/style-guide3.png',
    './images/style-guide4.png',
    './images/style-guide5.png',
    './images/style-guide6.png',
    './styles/small-screen.css',
    './styles/style.css',
    './styles/style2.css',
    './styles/style3.css',
    './styles/style4.css',
    './styles/style5.css',
    './styles/style6.css',
    'https://fonts.googleapis.com/css?family=Abril+Fatface|Chonburi|Gravitas+One|Limelight|Rozha+One|Yeseva+One',
    // 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
    './js/jquery-3.2.1.min.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
    './js/test.js',
    './js/app.js'
]


self.addEventListener('install', function(e){
    console.log('[ServiceWorker] Installed')

    e.waitUntil(

        caches.open(cacheName).then(function(cache){

            console.log('[ServiceWorker] Caching cacheFiles');
            return cache.addAll(cacheFiles);
        })

    )
});



self.addEventListener('activate', function(e){
    console.log('[ServiceWorker] Activated')

    e.waitUntil(

        caches.keys().then(function(cacheNames){
            return Promise.all(cacheNames.map(function(thisCacheName){

                if (thisCacheName !== cacheName){
                    
                    console.log('[ServiceWorker] Removing Catched Files from', thisCacheName);
                    return caches.delete(thisCacheName)

                }
            }))
        })
    )

});



self.addEventListener('fetch', function(e){
    console.log('[ServiceWorker] Fetching', e.request.url)
    
    e.respondWith(

        caches.match(e.request).then(function(response){
            
            if (response){
                console.log('[ServiceWorker] Found in cache', e.request.url);
                return response;
            }

                var requestClone = e.request.clone();

                fetch(requestClone).then(function(response){

                    if (!response){
                        console.log('[ServiceWorker] No response from fetch');
                        return response;
                    }

                    var responseClone = response.clone();

                    caches.open(cacheName).then(function(cache){

                        cache.put(e.request, requestClone);
                        return response;
                    });

                })
                    .catch(function(err){
                        console.log('[ServiceWorker] Error Fetching & Catching New data', err)
                    })
        })
    )

});

