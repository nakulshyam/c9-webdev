function average(arr){
    var sum = 0;
    scores.forEach(function(score){
        sum +=score
    })
    console.log(Math.round(sum/arr.length))
}

var scores = [90,98,89,100,100,86,94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]
average(scores2);
