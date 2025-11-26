var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Cartevecteurensortie_1 = new ol.format.GeoJSON();
var features_Cartevecteurensortie_1 = format_Cartevecteurensortie_1.readFeatures(json_Cartevecteurensortie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cartevecteurensortie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cartevecteurensortie_1.addFeatures(features_Cartevecteurensortie_1);
var lyr_Cartevecteurensortie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cartevecteurensortie_1, 
                style: style_Cartevecteurensortie_1,
                popuplayertitle: 'Carte vecteur en sortie',
                interactive: true,
    title: 'Carte vecteur en sortie<br />\
    <img src="styles/legend/Cartevecteurensortie_1_0.png" /> 13 - 337<br />\
    <img src="styles/legend/Cartevecteurensortie_1_1.png" /> 337 - 805<br />\
    <img src="styles/legend/Cartevecteurensortie_1_2.png" /> 805 - 1300<br />\
    <img src="styles/legend/Cartevecteurensortie_1_3.png" /> 1300 - 3049<br />\
    <img src="styles/legend/Cartevecteurensortie_1_4.png" /> 3049 - 70392<br />' });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_Cartevecteurensortie_1.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_Cartevecteurensortie_1];
lyr_Cartevecteurensortie_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'OBJECTID': 'OBJECTID', 'C_UT': 'C_UT', 'CC3digo': 'CC3digo', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'CAPITAL': 'CAPITAL', 'COD92': 'COD92', 'POB92': 'POB92', 'COD01': 'COD01', 'POB01': 'POB01', 'COD12': 'COD12', 'POB12': 'POB12', 'COD24': 'COD24', 'POB24': 'POB24', 'SUP': 'SUP', });
lyr_Cartevecteurensortie_1.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'OBJECTID': 'Range', 'C_UT': 'TextEdit', 'CC3digo': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CAPITAL': 'TextEdit', 'COD92': 'TextEdit', 'POB92': 'TextEdit', 'COD01': 'TextEdit', 'POB01': 'TextEdit', 'COD12': 'TextEdit', 'POB12': 'TextEdit', 'COD24': 'TextEdit', 'POB24': 'TextEdit', 'SUP': 'TextEdit', });
lyr_Cartevecteurensortie_1.set('fieldLabels', {'fid': 'hidden field', 'cat': 'hidden field', 'OBJECTID': 'hidden field', 'C_UT': 'hidden field', 'CC3digo': 'hidden field', 'DEPARTAMEN': 'hidden field', 'PROVINCIA': 'hidden field', 'MUNICIPIO': 'inline label - visible with data', 'CAPITAL': 'hidden field', 'COD92': 'hidden field', 'POB92': 'hidden field', 'COD01': 'hidden field', 'POB01': 'hidden field', 'COD12': 'hidden field', 'POB12': 'hidden field', 'COD24': 'hidden field', 'POB24': 'inline label - visible with data', 'SUP': 'no label', });
lyr_Cartevecteurensortie_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});