document.body.onkeydown=function(e){started=true;var keys={13:'enter',37:'left',39:'right',40:'down',38:'up'};if(typeof keys[e.keyCode]!='undefined'){keyPress(keys[e.keyCode]);}};document.body.onkeyup=function(e){var keys={13:'enter',37:'left',39:'right',40:'down',38:'up'};if(typeof keys[e.keyCode]!='undefined'){keyRelease(keys[e.keyCode]);}};var eduModal=document.getElementById('eduModal');var expModal=document.getElementById('expModal');var noticeModal=document.getElementById('noticeModal');var projectModal=document.getElementById('projectModal');var skillModal=document.getElementById('skillModal');var contactModal=document.getElementById('contactModal');window.onclick=function(event){if(event.target===eduModal){eduModal.style.display="none";}if(event.target==expModal){expModal.style.display="none";}if(event.target==noticeModal){noticeModal.style.display="none";}if(event.target==projectModal){projectModal.style.display="none";}if(event.target==skillModal){skillModal.style.display="none";}if(event.target==contactModal){contactModal.style.display="none";}}