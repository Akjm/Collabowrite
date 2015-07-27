var story = [];
var output = "";

function arr2string() {
    for (i = 0; i < story.length; i++) {

        if (i !== story.legnth - 1) {
            output += story[i] + " ";
        } else {
            output += story[i];
        }
    }

    return output
}

function pass() {
    story.push(document.getElementById("textArea").value);
    document.getElementById("prev").innerHTML = story[story.length - 1];
    console.log(story);

}

function endS() {
    document.getElementById("top").style.display = "none";
    document.getElementById("bottom").style.display = "none";
    document.getElementById("story").innerHTML = arr2string();
    document.getElementById("done").style.display = "initial";
    document.getElementById("endbutton").style.display = "none";
}
