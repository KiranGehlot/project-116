nosex=0
nosey=0



function preload() {
    img=loadImage('https://i.postimg.cc/ZnqtKQKq/mustache-removebg-preview.png');

}


function setup() {
    canvas=createCanvas(200 , 200)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(200 ,200);

    poseNet=ml5.poseNet(video , modelloaded)
    poseNet.on('pose' , gotposes)

}



function take_snapshot()  {
    save("pic.png")
    
}


    function modelloaded() {
        console.log('poseNet is intialized')
    }

function draw()  {

    image(video , 0, 0, 200, 200);
    image(img , nosex , nosey , 20 , 20)

}


function gotposes(results)  {

    if(results.length > 0) {
        console.log(results);
        nosex=results[0].pose.nose.x - 10;
        nosey=results[0].pose.nose.y + 5;
        console.log('nosex = ' + results[0].pose.nose.x )
        console.log('nosey = ' + results[0].pose.nose.y)
    }
}
