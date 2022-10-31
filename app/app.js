
var polygon = L.polygon([
    [33.97630537966005, -6.867323425318546],
    [33.97647499008657, -6.86716403909573],
    [33.97646505795379, -6.8671428490198645],
    [33.97649638236859, -6.8671069180216575],
    [33.97649179830861, -6.867077436176975],
    [33.97655903116354, -6.867031370794659],
    [33.97665512065664, -6.8671680457605095],
    [33.97672450544977, -6.867102968919549],
    [33.97669752248139, -6.867054936013127],
    [33.97677448851485, -6.866979071395551],
    [33.97671815758228, -6.866893612598119],
    [33.9767944769013, -6.866825683810415],
    [33.97667727220463, -6.866631758077777],
    [33.976598227085404, -6.8666909218606165],
    [33.97654869060143, -6.866623786852404],
    [33.97644008199093, -6.86670310551065],
    [33.97640449368644, -6.86667494231828],
    [33.97628839455906, -6.866784211150141],
    [33.97635512270887, -6.866900887232813],
    [33.976335660337256, -6.866961236930747],
    [33.97615883666972, -6.867110087590163]
]).addTo(map).bindPopup('Dep TOPO');

var roads = {
    "type": "FeatureCollection",
    "name": "roads",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "category": "Route Secondaire", "grouping": "Route Secondaire", "color": "#0213fa", "width": 4 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.8623455, 33.9800127 ], [ -6.8626055, 33.9797403 ], [ -6.8626271, 33.9797025 ], [ -6.8626371, 33.9796709 ], [ -6.8626532, 33.97964 ], [ -6.8626731, 33.9796141 ], [ -6.8641802, 33.9780676 ], [ -6.864584, 33.9776399 ], [ -6.8646187, 33.9776113 ], [ -6.8646603, 33.9775901 ], [ -6.8647067, 33.977577 ], [ -6.864755, 33.9775725 ], [ -6.8647985, 33.9775547 ], [ -6.8648322, 33.9775258 ], [ -6.8658202, 33.9764862 ], [ -6.8658537, 33.9764495 ], [ -6.8658776, 33.976408 ], [ -6.865891, 33.9763633 ], [ -6.8659684, 33.9760233 ], [ -6.8660229, 33.9756874 ], [ -6.866024, 33.9756391 ], [ -6.866007, 33.9755929 ], [ -6.8659736, 33.9755533 ], [ -6.8652864, 33.9751355 ], [ -6.8649912, 33.9749619 ], [ -6.8646114, 33.9747386 ], [ -6.8645515, 33.9747203 ], [ -6.8642719, 33.9747321 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Principale", "grouping": "Route Principale", "color": "#fa020f", "width": 5 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.8667636, 33.9733895 ], [ -6.8672591, 33.9737053 ], [ -6.8682928, 33.9743749 ], [ -6.8686376, 33.9746027 ], [ -6.868776, 33.9746941 ], [ -6.8689111, 33.9747834 ], [ -6.8694518, 33.9751406 ], [ -6.8694808, 33.97517 ], [ -6.8694975, 33.9752053 ], [ -6.8695003, 33.9752432 ], [ -6.8694888, 33.9752799 ], [ -6.8694642, 33.9753119 ], [ -6.8691319, 33.9756728 ], [ -6.868664, 33.9761405 ], [ -6.8678286, 33.9770089 ], [ -6.8674661, 33.9773901 ], [ -6.8671454, 33.9777325 ], [ -6.8667614, 33.9781358 ], [ -6.865867, 33.9790752 ], [ -6.8657974, 33.9791484 ], [ -6.865722, 33.9792269 ], [ -6.8653032, 33.9796631 ], [ -6.8646384, 33.9803555 ], [ -6.8645239, 33.9805316 ], [ -6.8644562, 33.9806339 ], [ -6.8643958, 33.9807273 ], [ -6.8643475, 33.9807918 ], [ -6.8642369, 33.980908 ], [ -6.8640284, 33.9811232 ], [ -6.8639318, 33.9812235 ], [ -6.8639274, 33.9812436 ], [ -6.8639311, 33.9812622 ], [ -6.8639479, 33.9812822 ], [ -6.8639851, 33.9813063 ], [ -6.8642241, 33.9814618 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Principale", "grouping": "Route Principale", "color": "#fa020f", "width": 5 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.8678415, 33.9730734 ], [ -6.8672591, 33.9737053 ], [ -6.8666891, 33.9742871 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Principale", "grouping": "Route Principale", "color": "#fa020f", "width": 5 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.8678415, 33.9730734 ], [ -6.8678696, 33.9730534 ], [ -6.8679032, 33.9730439 ], [ -6.8679521, 33.9730462 ], [ -6.8680078, 33.9730612 ], [ -6.8684343, 33.9733272 ], [ -6.86849, 33.9733522 ], [ -6.8685279, 33.9733564 ], [ -6.8685601, 33.9733514 ], [ -6.8685866, 33.9733417 ], [ -6.8686208, 33.9733208 ], [ -6.8690359, 33.9728625 ], [ -6.8692684, 33.9726057 ], [ -6.8693469, 33.97252 ], [ -6.8693644, 33.9724872 ], [ -6.8693691, 33.9724516 ], [ -6.8693603, 33.9724255 ], [ -6.8693302, 33.9723977 ], [ -6.8689598, 33.9721521 ], [ -6.8688999, 33.9721124 ], [ -6.8688882, 33.9720974 ], [ -6.8688825, 33.9720807 ], [ -6.8688845, 33.9720629 ], [ -6.8689071, 33.9720275 ], [ -6.8691264, 33.9717843 ] ] } },
    { "type": "Feature", "properties": { "category": "Piste", "grouping": "Piste", "color": "#fcba03", "width": 3 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.864991210231714, 33.974961916823013 ], [ -6.865914528415625, 33.973991409920693 ], [ -6.866332711770551, 33.97426339988106 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Secondaire", "grouping": "Route Secondaire", "color": "#0213fa", "width": 4 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.864581160283524, 33.980443566827979 ], [ -6.864592368876727, 33.980252862384518 ], [ -6.864847229884249, 33.979476558195898 ], [ -6.864894004211417, 33.979352688139983 ], [ -6.864907649354413, 33.979231409143658 ], [ -6.864900264391467, 33.979146448988786 ], [ -6.864880832192298, 33.97908938154584 ], [ -6.864865832081725, 33.979061972751943 ], [ -6.864822618019748, 33.979015168974506 ], [ -6.86474228419508, 33.978935814484473 ], [ -6.864651214666438, 33.978869231921244 ], [ -6.864474186812379, 33.978742408384718 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Secondaire", "grouping": "Route Secondaire", "color": "#0213fa", "width": 4 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.867145410227351, 33.977732516815884 ], [ -6.866112176126508, 33.976389805949587 ], [ -6.866029351940591, 33.976109509565134 ], [ -6.865968410229962, 33.976023316820125 ] ] } },
    { "type": "Feature", "properties": { "category": "Piste", "grouping": "Piste", "color": "#fcba03", "width": 3 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.866314212642801, 33.978605517654174 ], [ -6.86625061514839, 33.978521537726728 ], [ -6.866350060502126, 33.977820234198347 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Secondaire", "grouping": "Route Secondaire", "color": "#0213fa", "width": 4 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.868632355245034, 33.97617390972831 ], [ -6.868058224016637, 33.975815880466605 ], [ -6.867947063674486, 33.975674884326736 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Secondaire", "grouping": "Route Secondaire", "color": "#0213fa", "width": 4 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.864991210231714, 33.974961916823013 ], [ -6.865914528415625, 33.973991409920693 ], [ -6.866332711770551, 33.97426339988106 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Secondaire", "grouping": "Route Secondaire", "color": "#0213fa", "width": 4 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.866761410227083, 33.978135816815531 ], [ -6.866063043158137, 33.977459784731742 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Secondaire", "grouping": "Route Secondaire", "color": "#0213fa", "width": 4 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.865914528415625, 33.973991409920693 ], [ -6.866276160832143, 33.97363242718297 ], [ -6.866254187874635, 33.973363609770196 ], [ -6.866585623417123, 33.972999152256804 ], [ -6.866958243101247, 33.972691355467227 ] ] } },
    { "type": "Feature", "properties": { "category": "Piste", "grouping": "Piste", "color": "#fcba03", "width": 3 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.866365448728579, 33.976012124970197 ], [ -6.866646533682758, 33.976224829597086 ], [ -6.867255076486215, 33.975595111008801 ], [ -6.867195316646925, 33.975515823110136 ], [ -6.868250194352985, 33.974432515921244 ] ] } },
    { "type": "Feature", "properties": { "category": "Piste", "grouping": "Piste", "color": "#fcba03", "width": 3 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.866029351940591, 33.976109509565134 ], [ -6.866365448728579, 33.976012124970197 ], [ -6.866494172215774, 33.974992194069884 ], [ -6.866560797568676, 33.974896957322912 ], [ -6.866295978164631, 33.974723818569707 ], [ -6.866515719387526, 33.974484216588522 ] ] } },
    { "type": "Feature", "properties": { "category": "Piste", "grouping": "Piste", "color": "#fcba03", "width": 3 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.866587994060469, 33.974916458958887 ], [ -6.867317757528011, 33.975391301945045 ] ] } },
    { "type": "Feature", "properties": { "category": "Piste", "grouping": "Piste", "color": "#fcba03", "width": 3 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.866560797568676, 33.974896957322912 ], [ -6.866587994060469, 33.974916458958887 ] ] } },
    { "type": "Feature", "properties": { "category": "Secondaire", "grouping": "Secondaire", "color": "#0213fa", "width": 5 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.86695825333457, 33.97269137229204 ], [ -6.867555481239026, 33.972077751118313 ], [ -6.867628952431853, 33.97193438311723 ], [ -6.867955458949054, 33.97159273543236 ] ] } },
    { "type": "Feature", "properties": { "category": "Route Secondaire", "grouping": "Route Secondaire", "color": "#0213fa", "width": 4 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.865797410226413, 33.979148416814205 ], [ -6.865590148545802, 33.978986649615251 ], [ -6.865574870454309, 33.978968071392011 ], [ -6.865571196785955, 33.978955736619277 ], [ -6.865574616682901, 33.978948220764245 ], [ -6.865579000648826, 33.978939719984176 ], [ -6.865591533551217, 33.97892691595974 ], [ -6.865605466902137, 33.978916703164401 ], [ -6.865970985911337, 33.978722253428394 ] ] } },
    { "type": "Feature", "properties": { "category": "Piste", "grouping": "piste", "color": "#fcba03", "width": 3 }, "geometry": { "type": "LineString", "coordinates": [ [ -6.863158722171892, 33.98048925432763 ], [ -6.862992810787235, 33.980377632254125 ], [ -6.863037808143632, 33.980330993090632 ], [ -6.862824474490587, 33.980187842136445 ] ] } }
    ]
};


L.geoJSON(roads, {
    style: function(feature) {
        return {color: feature.properties.color}
    }
	
}).addTo(map);

var MyIcon = L.icon({
    iconUrl: 'app/images/s80.jpg',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var MyIcon2 = L.icon({
    iconUrl: 'app/images/mmlp.jpg',
    iconSize:     [20, 20], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.geoJson(cafe  ,{
    pointToLayer: function(feature,latlng){
        switch (feature.properties.type) {
            case 'cafe': return L.marker(latlng,{icon: MyIcon});
            case 'fast_food': return L.marker(latlng,{icon: MyIcon2});
    
    }
    //   return L.marker(latlng,{icon: MyIcon});
    }
  }).addTo(map);

// L.geoJSON(cafe).addTo(map);

// L.geoJSON(roads, {
//     style: function(feature) {
//         switch (feature.properties.category) {
//             case 'Route Secondaire': return {color: "#0213fa"};
//             case 'Route Principale':   return {color: "#fa020f"};
//             case 'Piste':   return {color: "#fcba03", dashArray : '10'};
//         }
//     }
// }).addTo(map);

