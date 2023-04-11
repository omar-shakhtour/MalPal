//Remove activate button and show loading screen
function activate(){
    var x = document.getElementById("start");
    var load = document.getElementById("loading");

    x.style.display = "none";
    load.style.display = "block";
    setTimeout(displayFood, 3000);
}

//Remove loading effect and display food buttons
function displayFood(){
    var y = document.getElementById("foodButtonDiv");

    y.style.display = "block";
    document.getElementById("loading").style.display = "none";
}

//Remove food buttons and activate apple scanning video
function apple(){
    var y = document.getElementById("foodButtonDiv");
    y.style.display = "none";

    const video = document.createElement('video');
    video.src='MalPalApple.mp4';

    video.autoplay = true;
    video.controls = false;
    video.setAttribute("style","height:auto");
    video.setAttribute("style","width:100%");

    document.getElementById('testBox').appendChild(video);
}