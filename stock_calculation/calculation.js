function calstocks(){
    var now_stock_price = document.getElementById('now_stock_price').value;
    now_stock_price = parseFloat(now_stock_price);

    var now_stocks = document.getElementById('now_stocks').value;
    now_stocks = parseInt(now_stocks);

    var add_stock_price = document.getElementById('add_stock_price').value;
    add_stock_price = parseFloat(add_stock_price);

    var add_stocks = document.getElementById('add_stocks').value;
    add_stocks = parseInt(add_stocks);

    var stocks;
    stocks = parseInt(stocks);
    stocks = now_stocks + add_stocks
    
    var result;
    result = parseFloat(result);
    result = ((now_stock_price * now_stocks) + (add_stock_price * add_stocks)) / stocks;
    result = result.toFixed(4);

    document.getElementById("stocks").innerHTML = stocks;
    document.getElementById("result").innerHTML = result;
    
}