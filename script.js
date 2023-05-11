var data = [
    {"title": "Card title", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus ullam eum quia corporis perspiciatis officia quo dolor atque."},
    {"title": "Card title", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus ullam eum quia corporis perspiciatis officia quo dolor atque."},
    {"title": "Card title", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus ullam eum quia corporis perspiciatis officia quo dolor atque."},
    {"title": "Card title", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus ullam eum quia corporis perspiciatis officia quo dolor atque."}
]


window.onload = function() {

    var div = document.createElement("div");
    div.className = "container";
    var row = document.createElement("div");
    row.className = "row";
    var col = document.createElement("div");
    col.className = "d-flex";
    var bluec = document.createElement("div");
    bluec.className = "blue mx-3";
    bluec.addEventListener('click', function(){
        var alldivs = document.getElementsByTagName("div");
        for (var i = 0; i < alldivs.length; i++) {
            if (alldivs[i].classList.contains("bg-warning")) {
                alldivs[i].classList.replace("bg-warning", "bg-primary")
            }
        }
    });
    var yellowc = document.createElement("div");
    yellowc.className = "yellow";

    yellowc.addEventListener('click', function(){
        var alldivs = document.getElementsByTagName("div");
        for (var i = 0; i < alldivs.length; i++) {
            if (alldivs[i].classList.contains("bg-primary")) {
                alldivs[i].classList.replace("bg-primary", "bg-warning")
            }
        }
    });

    col.append(bluec, yellowc);
    
    row.appendChild(col);
    div.appendChild(row);


    var div1 = document.createElement("div");
    div1.className = "container";
    var row1 = document.createElement("div");
    row1.className = "row pt-3";
    div1.append(row1);
    for (var i = 0; i < data.length; i++) {
        adddiv(row1, i, data[i].title, data[i].description);
    }



    document.body.appendChild(div);
    document.body.appendChild(div1);

}


function adddiv(row1, i, ti, desc) {
    var col1 = document.createElement("div");
    col1.className = "col-md-4 text-light pb-5";
    var card = document.createElement("div");
    card.className = "card px-3 bg-primary";
    var title = document.createElement("h5");
    title.innerHTML = (i+1) + " " + ti;
    title.className = "pt-4 pb-2";
    var flexrow = document.createElement("div");
    flexrow.className = "d-flex align-items-center";
    var paragraph = document.createElement("p");
    paragraph.innerHTML = desc
    paragraph.className = "pb-3"
    var button = document.createElement("button");
    button.innerHTML = "delete";
    button.className = "btn bg-danger text-light";
    button.addEventListener('click', function(){
        col1.remove();
    });
    flexrow.append(paragraph, button);


    card.append(title, flexrow);

    col1.append(card);
    row1.append(col1);
}
