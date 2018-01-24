function sumOrderSummary(items, sumItems) {
    var myTable = document.getElementById('OrderSummary');
    myTable.rows[1].cells[1].innerHTML = items;
    // var lastSubTotal = myTable.rows[2].cells[1].innerHTML.value;
    // myTable.rows[2].cells[1].innerHTML = (sumItems + lastSubTotal);
}

function subTotal(subTotal, price){
    var sub = subTotal + price;
}

function addItem(src, item, size, quantity, price) {
    var table = document.getElementById("ShoppingCart");
    var nexttableindex = table.rows.length - 1;
    var sumItems = price*quantity;
    var rowImg = '<img class="shoppinCartItem" src="' + src + '" alt="" style="height: 100px;"/>';
    var deleteButton = '<button type="button" class="btn btn-danger" onclick="deleteRow(this)">Delete Item</button>';
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = rowImg;
    cell2.innerHTML = item;
    cell3.innerHTML = size;
    cell4.innerHTML = quantity;
    cell5.innerHTML = '$ ' + sumItems;
    cell6.innerHTML = deleteButton;

    sumOrderSummary(nexttableindex, sumItems);
}

function resOrderSummary(items) {
    var table = document.getElementById("ShoppingCart");
    var nexttableindex = table.rows.length - 1;

    var myTable = document.getElementById('OrderSummary');
    myTable.rows[1].cells[1].innerHTML = nexttableindex;
}
  
function deleteRow(r) {
    var table = document.getElementById("ShoppingCart");
    var nexttableindex = table.rows.length - 1;
    resOrderSummary(nexttableindex);
    
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("ShoppingCart").deleteRow(i);
    resOrderSummary();
}