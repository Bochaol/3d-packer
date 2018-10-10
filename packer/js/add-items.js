if ( WEBGL.isWebGLAvailable() === false ) {

    document.body.appendChild( WEBGL.getWebGLErrorMessage() );

}

var camera, scene, renderer;

function addItemInit (dim, imgUrl, parentDiv) {
    var container = createScene (parentDiv);
    init(dim, imgUrl, container);
    renderScene(scene, camera);
}

function init(dim, imgUrl, container) {

    var mesh1 = createTexturedGeo(dim, imgUrl)

    scene.add( mesh1 );

    var ambientLight = new THREE.AmbientLight( 0xffffff, 0.4 );
    scene.add( ambientLight );

    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 1, 1, 1 );
    scene.add( light );

    var controls = new THREE.OrbitControls( camera );


    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}