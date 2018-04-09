var express = require("express");
var app = express();
var port = 8080;

app.use(express.static('../../ParcelService/build/'));

app.route('/api/getParcelSize').get(function(req, res){
    var self = JSON.parse(req.query.parcelsize);
    var size = self.parcelheight + (2 * ( self.parcelwidth + self.parcelheight));

    if(self) {
        if (size >= 0 && size <= 35) size = "XS";
        else if (size >= 35 && size <= 50) size = "S";
        else if (size >= 50 && size <= 65) size = "M";
        else if (size >= 65 && size <= 80) size = "L";
        else if (size >= 80 && size <= 300) size = "XL";
    }

    res.json({size: size});
});

app.listen(port, function(){
    console.info("http://localhost:" + port);
});