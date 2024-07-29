mapboxgl.accessToken = process.env.MAP_TOKEN;


const map = new mapboxgl.Map({
    container: "map", // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
}); 
 

const el = document.createElement('div');
el.className = 'marker';

map.addControl(new mapboxgl.FullscreenControl());

const marker1 = new mapboxgl.Marker(el)
        .setLngLat(listing.geometry.coordinates)  //Listing.geometry.coordinates
        .setPopup(
            new mapboxgl.Popup({offset:25}).setHTML(`<center><h4>${listing.location}</h4></center><p>Exact location provided after booking.</p>`)
        )
        .addTo(map);

