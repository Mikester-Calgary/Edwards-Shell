var wms_layers = [];


        var lyr_WorldTopo_0 = new ol.layer.Tile({
            'title': 'World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Proposed_2 = new ol.format.GeoJSON();
var features_Proposed_2 = format_Proposed_2.readFeatures(json_Proposed_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proposed_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposed_2.addFeatures(features_Proposed_2);
var lyr_Proposed_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proposed_2, 
                style: style_Proposed_2,
                interactive: true,
                title: '<img src="styles/legend/Proposed_2.png" /> Proposed'
            });

lyr_WorldTopo_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(true);lyr_Proposed_2.setVisible(true);
var layersList = [lyr_WorldTopo_0,lyr_GoogleHybrid_1,lyr_Proposed_2];
lyr_Proposed_2.set('fieldAliases', {'fid': 'fid', 'Desc': 'Desc', 'Type': 'Type', 'descriptor': 'Descriptor', });
lyr_Proposed_2.set('fieldImages', {'fid': 'Hidden', 'Desc': 'TextEdit', 'Type': 'TextEdit', 'descriptor': 'TextEdit', });
lyr_Proposed_2.set('fieldLabels', {'Desc': 'inline label', 'Type': 'inline label', 'descriptor': 'inline label', });
lyr_Proposed_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});