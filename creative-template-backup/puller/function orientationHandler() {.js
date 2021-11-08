function orientationHandler() {
    let _ios = ["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;
    let _orientationScreenAPI = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

    if (typeof _orientationScreenAPI !== "undefined") {
        console.log("_orientationScreenAPI",_orientationScreenAPI);
    } else {
        let _orientation = document.documentElement.clientWidth < document.documentElement.clientHeight ? 1 : 0;
        _orientation = _ios ? ((navigator.userAgent.match(/(criOS)/ig) !== null) ? _orientation : !_orientation) : ((navigator.userAgent.match(/(CPH1937)/ig) !== null) ? _orientation : !_orientation);
        console.log("crIOS",_orientation);
    }
}