// var ghost;
function loadOBJ() {
    
    // instantiate a loader
var loader = new THREE.OBJLoader();

    // load a resource
    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 60;
            object.position.z = 40;
            ghost = object;
            // return object;
            // console.log(object);
            scene.add( ghost );
           
            ghostList.push(ghost);

        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 100;
            object.position.z = 60;
            object.rotation.y = Math.PI / 2; 
            ghost2 = object;
            // return object;
            // console.log(object);
            scene.add( ghost2 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost2);
            GhostFlag.push(0);
            // console.log(ghost2);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 140;
            object.position.z = 40;
            object.rotation.y = Math.PI / 2; 
            ghost3 = object;
            // return object;
            // console.log(object);
            scene.add( ghost3 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost3);

            // console.log(ghost3);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 180;
            object.position.z = 40;
            object.rotation.y = Math.PI / 2; 
            ghost4 = object;
            // return object;
            // console.log(object);
            scene.add( ghost4 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost4);

            // console.log(ghost4);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 320;
            object.position.z = 40;
            object.rotation.y = Math.PI / 2; 
            ghost1 = object;
            // return object;
            // console.log(object);
            scene.add( ghost1 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);

            ghostList.push(ghost1);
            // console.log(ghost4);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 240;
            object.position.z = 60;
            object.rotation.y = Math.PI / 2; 
            ghost5 = object;
            // return object;
            // console.log(object);
            scene.add( ghost5 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost5);
            GhostFlag.push(0);
            // console.log(ghost5);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 120;
            object.position.z = 100;
            object.rotation.y = Math.PI / 2; 
            ghost6 = object;
            // return object;
            // console.log(object);
            scene.add( ghost6 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost6);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 200;
            object.position.z = 100;
            object.rotation.y = Math.PI / 2; 
            ghost17 = object;
            // return object;
            // console.log(object);
            scene.add( ghost17 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost17);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 340;
            object.position.z = 100;
            object.rotation.y = Math.PI / 2; 
            ghost7 = object;
            // return object;
            // console.log(object);
            scene.add( ghost7 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost7);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    // bates kerjaan gw

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 180;
            object.position.z = 140;
            object.rotation.y = Math.PI / 2; 
            ghost8 = object;
            // return object;
            // console.log(object);
            scene.add( ghost8 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost8);
            GhostFlag.push(0);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 180;
            object.position.z = 200;
            object.rotation.y = Math.PI / 2; 
            ghost9 = object;
            // return object;
            // console.log(object);
            scene.add( ghost9 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost9);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 240;
            object.position.z = 200;
            object.rotation.y = Math.PI / 2; 
            ghost10 = object;
            // return object;
            // console.log(object);
            scene.add( ghost10 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost10);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 320;
            object.position.z = 240;
            object.rotation.y = Math.PI / 2; 
            ghost11 = object;
            // return object;
            // console.log(object);
            scene.add( ghost11 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost11);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 240;
            object.position.z = 240;
            object.rotation.y = Math.PI / 2; 
            ghost12 = object;
            // return object;
            // console.log(object);
            scene.add( ghost12 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost12);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 180;
            object.position.z = 240;
            object.rotation.y = Math.PI / 2; 
            ghost13 = object;
            // return object;
            // console.log(object);
            scene.add( ghost13 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost13);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 160;
            object.position.z = 300;
            object.rotation.y = Math.PI / 2; 
            ghost14 = object;
            // return object;
            // console.log(object);
            scene.add( ghost14 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost14);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 200;
            object.position.z = 380;
            object.rotation.y = Math.PI / 2; 
            ghost15 = object;
            // return object;
            // console.log(object);
            scene.add( ghost15 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost15);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 280;
            object.position.z = 380;
            object.rotation.y = Math.PI / 2; 
            ghost16 = object;
            // return object;
            // console.log(object);
            scene.add( ghost16 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost16);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 140;
            object.position.z = 220;
            object.rotation.y = Math.PI / 2; 
            ghost18 = object;
            // return object;
            // console.log(object);
            scene.add( ghost18 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost18);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 60;
            object.position.z = 380;
            object.rotation.y = Math.PI / 2; 
            ghost19 = object;
            // return object;
            // console.log(object);
            scene.add( ghost19 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost19);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 320;
            object.position.z = 140;
            object.rotation.y = Math.PI / 2; 
            ghost20 = object;
            // return object;
            // console.log(object);
            scene.add( ghost20 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost20);
            GhostFlag.push(0);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );

    loader.load(
        // resource URL
        'Ghost_Red/MazeGhostRed.obj',
        // called when resource is loaded
        function ( object ) {
            object.position.y = 5;
            object.position.x = 300;
            object.position.z = 340;
            object.rotation.y = Math.PI / 2; 
            ghost21 = object;
            // return object;
            // console.log(object);
            scene.add( ghost21 );
            // ghostList.push(ghost2.children[0]);
            // ghostList.push(ghost2.children[1]);
            ghostList.push(ghost21);
            GhostFlag.push(0);
            // console.log(ghost6);
        },
        // called when loading is in progresses
        onProgress,
        // called when loading has errors
        onError
    );


}






var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round(percentComplete, 2) + '% loaded' );
    }
};
var onError = function ( xhr ) { };

