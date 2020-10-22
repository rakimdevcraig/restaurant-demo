const path = require("path")


//make this the static folder where files will be accessible
var publicPath = path.join(__dirname, '../public/');

exports.getHomePage = (req, res, next) => {
    res.sendFile(publicPath + '/main.html');
}

exports.getAdminPage = (req, res, next) => {
    res.sendFile(publicPath + '/admin.html');
}