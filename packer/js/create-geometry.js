// pre-created Jet box model
const boxModel = "../assets/box1/unitBox.dae"; 

// create a textured geometry 
function createTexturedGeo (dimension, imgUrl) {

    var geometry = new THREE.BoxBufferGeometry( dimension.x, dimension.y, dimentsion.z );
    
    var texture = new THREE.TextureLoader().load(imgUrl);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 1, 1 );

    var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture } );

    var mesh = new THREE.Mesh( geometry, material );  
    
    return mesh;
}

// create a box mesh with box texture
function createTexturedBox (dimension, callBack) {
    var model;

    var loadingManager = new THREE.LoadingManager( function() {
        callBack (model)
    } );

    // load collada
    var loader = new THREE.ColladaLoader( loadingManager );
    loader.load(boxModel, function ( collada ) {

        model = collada.scene;
    } );
}

