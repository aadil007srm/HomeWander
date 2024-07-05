

	mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzc2FyYW5oZXJlIiwiYSI6ImNsd3B3aDFybjFodTMyaXJ6cGQxeWdwYzcifQ.4HPJRlRvgTdHaXXTDQEWCg';
    const map = new mapboxgl.Map({
        container: "map", // container ID
        center: coordinates.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });



    console.log(coordinates);
    const marker1 = new mapboxgl.Marker({color : "red"})
        .setLngLat(coordinates.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(` <h3> ${coordinates.location} </h3> <p> Exact location provided after booking </p>`))
        .addTo(map);



