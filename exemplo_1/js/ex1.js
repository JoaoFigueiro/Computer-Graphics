import * as THREE from 'three';

let camera, scene, renderer;

let cube, capsule, circle;

var criaCirculo = function(){
    const geometry = new THREE.CircleGeometry( 0.5, 32 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    circle = new THREE.Mesh( geometry, material ); scene.add( circle );

    circle.position.x = -2;
    circle.position.y = 2;

    scene.add( circle );
}

var criaCubo = function(){
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    cube = new THREE.Mesh( geometry, material );

    cube.position.x = 2;
    cube.position.y = 2;
    scene.add( cube );
}

var criaCapsula = function(){
    const geometry = new THREE.CapsuleGeometry( 0.5, 0.5, 2, 4 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    capsule = new THREE.Mesh( geometry, material ); scene.add( capsule );

    scene.add( capsule );
}


export function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 100 );
   // camera.position.z = -20;

    //cria o mundo
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer( );
    renderer.setSize( window.innerWidth, window.innerHeight );

    criaCubo();
    criaCirculo();
    criaCapsula();

    camera.position.z = 5;

    document.body.appendChild( renderer.domElement );

    renderer.render( scene, camera );


    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

