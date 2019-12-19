viewer.on('scenechange',
    function () {
        console.log("Scene changed");
        console.log("Id: " + viewer.getScene());
    }
);