
var pageCounter = 1;
var animalContainer = document.getElementById("games-info");
var btn = document.getElementById("btn");

//event lisiner on click
btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if(pageCounter >3){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
    var htmlString = "";

    for (i = 0; i < data.length; i++){
        htmlString +="<p>" + data[i].name + "is a " + data[i].species + "like eat";
        for(ii = 0; ii<data[i].foods.likes.length; ii++){
            htmlString += data[i].foods.likes[ii];
        }

        htmlString +='</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

