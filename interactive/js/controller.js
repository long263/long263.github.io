document.body.onkeydown = function( e ) {
    started = true;
    var keys = {
        13: 'enter',
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'up'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
    }
};

document.body.onkeyup = function( e ) {
    var keys = {
        13: 'enter',
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'up'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyRelease( keys[ e.keyCode ] );
    }
};