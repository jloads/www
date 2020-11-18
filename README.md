+ [polish version - PL](https://www.jloads.com/README_PL.html)

## Welcome to jLoads Project

![jLoads](https://jloads.github.io/logo/jloads_logo_128.png)

+ [demo loader using the jloads library](https://load.jloads.com)
+ [aplication using the jloads library](https://app.jloads.com)
+ [documentation](https://docs.jloads.com)
+ [blog, news](https://blog.jloads.com)
+ [logo](https://logo.jloads.com)




## What it's jloads?

media loader for:
    + javscripts
    + media styles css
    + images
    + ...

## How it works?

with jloads it's easy to swith between environments: local/live system

When the domain for environment is not defined, than the main domain is used by function 

    jloads.env("//localhost:8080/", "local", function () {
        return window.location.hostname === 'localhost';
    });

The callback function is checking if this domain environment is default.
        
### Example of usage jloads:

    // Configuration
    var success = function (data) {
        console.log('loaded', data);
    };
    var error = function (data) {
        console.error('!loaded', data);
    };
    
    // Declaration
    var jloads = new Load(document.body, success, error);

    // Environment
    jloads.env("//localhost:8080/", "local", function () {
        return window.location.hostname === 'localhost';
    });
    jloads.env("//load.jloads.com/", "production", function () {
        return window.location.hostname !== 'localhost';
    });


    // Load NOW
    jloads.js([
        "//code.jquery.com/jquery-git.min.js",
        "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
    ]);

    // Dynamic loading
    document.addEventListener("DOMContentLoaded", function(event) {
        loadDefaultCss();
    });

    function loadDefaultCss(){
        jloads.cacheOff().css([
            "//code.jquery.com/ui/1.12.1/jquery-ui.min.js",
            "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
            "css/default.css",
        ]);
    }
    function loadPinkCss(){
        jloads.cacheOff().css([
            "css/pink.css",
        ]);
    }
    function loadBlackCss(){
        jloads.cacheOff().css([
            "css/black.css",
        ]);
    }


## Example of local implementation codemirror editor's 

    jloadsUrl({
                "head": [
                    "jquery-3.2.1.min.js",
                    "codemirror/lib/codemirror.js",
                    "codemirror/addon/search/searchcursor.js",
                    "codemirror/addon/search/search.js",
                    "codemirror/addon/dialog/dialog.js",
                    "codemirror/addon/edit/matchbrackets.js",
                    "codemirror/addon/edit/closebrackets.js",
                    "codemirror/addon/comment/comment.js",
                    "codemirror/addon/wrap/hardwrap.js",
                    "codemirror/addon/fold/foldcode.js",
                    "codemirror/addon/fold/brace-fold.js",
                    "codemirror/mode/javascript/javascript.js",
                    "codemirror/keymap/sublime.js",
                    "codemirror/lib/codemirror.css",
                    "codemirror/addon/fold/foldgutter.css",
                    "codemirror/addon/dialog/dialog.css",
                    "codemirror/theme/monokai.css"
                ],
                "#forms": [
                    "form/test.html",
                    "css/codemirror.css",
                    "form/inputs.css?6"
                ]
            });

Project jLoads is an loader for media implementation

[https://load.jloads.com/](https://load.jloads.com/index.html)

## TODO List
The next Step is to Create the integration between code and OpenApi to generate SDK for another languages
and create any language mirror, to us it in another application, not depends language, version, environment



# HOW TO START?
You can exercise all of the Foundation API methods through the API Console as well as view documentation and descriptions of the inputs and outputs of each API method.

# Solutions
We started in 2018 with few concepts but one idea: fastest development.
Now, in 2020 we are giving solutions:

+ [APIexec - executor library for shell scripts](https://www.apiexec.com)
+ [APIcra - shell scripts libraries](https://www.apicra.com)
+ [APIunit - definition of application, CI, CD](https://www.APIunit.com)
+ [APIbuild - build process definition, focused on quality, versioning](https://www.apibuild.com)
+ [APIsql - data bases, queries, models](https://www.apisql.com)
+ [APIfunc - FaaS solutions](https://www.apifunc.com)


## Our Plans
We are preparing cloud solution, a FaaS implementation of our current environment solutions:

For private, company private API with authorisation we preparing the FaaSapp platform
+ [FaaSapp.com](https://faasapp.com)

