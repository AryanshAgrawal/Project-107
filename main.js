function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jb0UNw3_L/model.json', modelloaded);
}
function modelloaded(){
classifier.classify(gotresults);
}
function gotresults(){
console.log('gotresult');
}