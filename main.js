function preload(){

}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.position(110, 100); 
    video = createCapture(VIDEO);
    tint1 = "";
    video.hide();
}

function draw() {
        image(video, 0, 0, 400, 300);
        tint(tint1);
}


function applyFilter() {
    tint1 = document.getElementById("inputFilter").value;
}

function take_snapshot() {
    save("yourselfie.jpg");
}