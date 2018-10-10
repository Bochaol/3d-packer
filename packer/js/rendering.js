function renderScene(scene, camera) {
    
    function animateScene() {

        requestAnimationFrame( animateScene );
    
        renderer.render( scene, camera );
    
    }

    animateScene ();
}