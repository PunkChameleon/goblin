(function (QUnit) {

    'use strict';

    QUnit.config.autostart = false;

    var test_module_files = [ // modules to be tested
        "js/tests/modules/AuthTests.js",
        //"js/tests/modules/PasswordTests.js",
        //"js/tests/modules/UtilsTests.js",
        //"js/tests/modules/JobTests.js",
        //"js/tests/modules/NoteTests.js"
    ];

    require(test_module_files, function () {
        QUnit.load();
        QUnit.start();
    });

}(QUnit));