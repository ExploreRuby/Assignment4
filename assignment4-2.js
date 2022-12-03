restaurantList = [{
    id: 1,
    restaurantName: 'Punjabi Tadka',
    address: 'Katvaria Sarai',
    city: 'Delhi',
    orderData: {
        'Below 500': 20,
        '500-1000': 29,
        '1000-1500': 30,
        '1500-2000': 44,
        'Above 2000': 76
    }

},

];

let final = [];

var a = restaurantList.map((item) => {

    const total = Object.values(item.orderData).reduce((prev, curr) => prev + curr);
    console.log(total);


    const head = Object.keys(item.orderData).length;
    console.log(head);


    const count = Object.keys(item.orderData);
    console.log(count);



    // const headers = Object.keys(item.orderDate);
    // console.log(headers);

    count.map((insideorderlist) => {
        let obj = {
            'id': item.id,
            'order': insideorderlist,
            "order percentage": (item.orderData[insideorderlist] / total * 100).toFixed(2),
            'restaurant': item.restaurantName,
        }
        final.push(obj);


    })
})