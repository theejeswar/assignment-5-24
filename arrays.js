//exercise 1
var i = ['cat', 'rat', 'dog', 'cow'];
i[i.length] = 'bull';
i[i.length] = 'sheep';
i[1] = 'parrot';
i[3] = 'peacock';
for (let j = 0; j <= i.length - 1; j++) {
    console.log('index', j, 'value', i[j]);
}

//exercise 2
var a = [33, 26, 17, 23, 67, 97, 50, 14];
for (b = 0; b <= a.length - 1; b++) {
    if (b % 2 == 0) {
        console.log(a[b]);
    }
}

//exercise 3
var arr = [30, 56, 63, 42, 31, 50];
for (index = arr.length - 1; index >= 0; index--) {
    if (arr[index] % 2 == 1) {
        console.log("index", index, "value", arr[index]);
    }
}