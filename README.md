+ [polish version - PL](https://www.jloads.com/README_PL.html)

## Welcome to jLoads Project

![jLoads](https://jloads.github.io/logo/jloads_logo_128.png)

+ [demo loader using the jloads library](http://load.jloads.com)
+ [aplication using the jloads library](http://app.jloads.com)
+ [documentation](http://docs.jloads.com)
+ [blog, news](http://blog.jloads.com)
+ [logo](http://logo.jloads.com)



## Example

Project jLoads is an loader for media implementation

[https://load.jloads.com/](https://load.jloads.com/)


## What it's jloads?

media loader for:
    + javscripts
    + media styles css
    + images
    + ...

## Czym się wyróżnia?

with jloads it's easy to swith between environments: local/live system

When the domain for environment is not defined, than the main domain is used by function 

    jloads.env("//localhost:8080/", "local", function () {
        return window.location.hostname === 'localhost';
    });

The callback function is checking if thhis domain environment is default.
        
### Przykłady wykorzystania jloads:

    <script>
        // Configuration
        var success = function (data) {
            console.log('loaded', data);
        };
        var error = function (data) {
            console.error('!loaded', data);
        };
        var jloads = new Load(document.body, success, error);

        jloads.env("//localhost:8080/", "local", function () {
            return window.location.hostname === 'localhost';
        });
        jloads.env("//load.jloads.com/", "production", function () {
            return window.location.hostname !== 'localhost';
        });
    
    </script>



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

