function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}

// var image=document.getElementById("image");
// var currentPos = 0;
// var images = ["images/men.jpg","images/women.jpg"];

// function volgendefoto() {
//     if (++currentPos >= images.length) currentPos = 0;
//     image.src = images[currentPos];
// }

// setInterval(volgendefoto, 3000);