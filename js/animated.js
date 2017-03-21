$(document).ready(function(){
    var interval = 1, //How much to increase the progressbar per frame
        updatesPerSecond = 3000/60, //Set the nr of updates per second (fps)
        progress =  $('progress'),
        animator = function(){
            progress.val(progress.val()+interval);
            $('#val').text(progress.val() + '%');
            if ( progress.val()+interval < progress.attr('curr')){
               setTimeout(animator, updatesPerSecond);
            } else { 
                $('#val').text(progress.attr('curr')+ '%');
                progress.val(progress.attr('curr'));
            }
        }
    
    setTimeout(animator, updatesPerSecond);
});