function createScene (parent) {
    var container = document.createElement( 'div' );
    parent.appendChild( container );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
    camera.position.set( 0, 0, 5 );

    scene = new THREE.Scene();

    return container;
}