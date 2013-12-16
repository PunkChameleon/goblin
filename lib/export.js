var mu = require('mu2'),
    db = require('./couchdb.js'),
    _ = require('underscore'),
    fs = require('fs-extra'),
    path = require('path');

mu.root = path.join(__dirname, '../theme');

db.get('pages_routes', function (err, doc) {

    if (err) {
        console.log(err);
    }

    var pure_routes = doc.pure_routes;

    // Make the output directory
    fs.mkdir('./output', function () {

        // Copy the custom theme contents to the output directory
        fs.copy('./public/theme', './output/theme', function (err) {
            console.log('success');
        });

        // Loop through the routes and stream each page into an HTML page for the folder.
        _.each(pure_routes, function (page) {

            if (page !== undefined) {

                db.get(page.id, function compileAndRender(err, doc) {

                    if (err) {
                        console.log(err);
                    }

                    var stream = mu.compileAndRender(doc.theme, doc),
                        writeTo = fs.createWriteStream('./output/' + doc.page_url);

                    stream.pipe(writeTo);

                });
            }

        });


        //Zip up things here.



    });



});