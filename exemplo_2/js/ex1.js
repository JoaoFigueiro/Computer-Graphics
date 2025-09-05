import * as THREE from 'three';

let camera, scene, renderer;

let cube, capsule;

let direcao_cubo_x = 1
let direcao_cubo_y = 1

let direcao_capsule_x = 1
let direcao_capsule_y = 1

var criaCubo = function(){
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    cube = new THREE.Mesh( geometry, material );
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
    criaCapsula();

    camera.position.z = 5;
    //necessário se queremos fazer algo com animação
    renderer.setAnimationLoop( animate );

    document.body.appendChild( renderer.domElement );

    renderer.render( scene, camera );


    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate( ) {

    cube.position.x += direcao_cubo_x * 0.1;
    cube.position.y += direcao_cubo_y * 0.1;

    capsule.position.x += direcao_capsule_x * 0.05;
    capsule.position.y += direcao_capsule_y * 0.05;

    if (cube.position.x >= 5.5) {
        direcao_cubo_x = -1;
    }

    if (cube.position.x <= -5.5) {
        direcao_cubo_x = +1;
    }

    if (cube.position.y >= 2.7) {
        direcao_cubo_y = -1;
    }

    if (cube.position.y <= -2.7) {
        direcao_cubo_y = +1;
    }

    if (capsule.position.x >= 5.5) {
        direcao_capsule_x = -1;
    }

    if (capsule.position.x <= -5.5) {
        direcao_capsule_x = +1;
    }

    if (capsule.position.y >= 2.7) {
        direcao_capsule_y = -1;
    }

    if (capsule.position.y <= -2.7) {
        direcao_capsule_y = +1;
    }


	renderer.render( scene, camera );

}