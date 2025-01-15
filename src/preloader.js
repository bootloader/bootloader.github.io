__webpack_public_path__ = `${window.CONST.remoteJsUrl}/${
    window.CONST.buildFolder ? window.CONST.buildFolder + "/" : ""
}`;

if (!window.CONST.APP) {
    console.log("window.CONST.APP found empty");

    let pathname = location.pathname;

    if (pathname.indexOf("/custom") === 0) {
        window.CONST.APP = "custom";
    } else {
        window.CONST.APP = "app";
    }
}
