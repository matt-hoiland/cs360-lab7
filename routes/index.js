var express = require('express');
var fs = require('fs')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/getcity', function (req, res, next) {
    fs.readFile(__dirname + '/cities.dat.txt', function(err, data) {
        if(err) throw err

        var cities = data.toString().split("\n")

        var myRe = new RegExp("^" + req.query.q);
        console.log(myRe); 

        res.send(
            cities.filter(function (c) { return c.search(myRe) != -1 })
                  .map(function (c) { return {city: c} })
        )
    })
})

router.get('/fibonacci', function (req, res, next) {
    res.status(200).send(fibonacci(req.query.q))
})

function fibonacci(n) {
    var nums = [1,1];
    var a = 0;
    var b = 1;
    while (n > nums.length) {
        nums.push(nums[a] + nums[b]);
        a += 1;
        b += 1;
    }
    return nums;
}

module.exports = router;
