+ [Wersja angielska - EN](https://www.jloads.com/)


# Info about [ApiBuild](https://www.jloads.com)
![jLoads](https://jloads.github.io/logo/jloads_logo_128.png)

https://github.com/jloads/logo


+ [www](https://www.jloads.com/)
+ [blog](https://blog.jloads.com/)
+ [logo](https://logo.jloads.com/)


https://github.com/jloads

## Co to jest jloads?

biblioteka pozwalająca na ładowanie treści, skryptów, obrazów, mediów poprzez 
generowanie zapytań w czasie rzeczywistym.

## Czym się wyróżnia?

pozwala na definiowanie środowiska,
jeśli domena dla danego adresu url nie jest zdefiniowana, 
a jest zdefiniowana domena jednego ze środowisk:

+ lokalne
+ tekstowe
+ produkcyjne
+ ...

Wówczas domeną domyślną jest ta domena, która spełnia warunek.
Warunek to funkcja zwrotna wykonywana jako Callback()

    jloads.env("//localhost:8080/", "local", function () {
        return window.location.hostname === 'localhost';
    });
        
### Przykłady wykorzystania jloads:

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


## Przykład

 
[https://load.jloads.com/](https://load.jloads.com/index.html)


# [API Foundation](https://www.apifoundation.com)

Projekt APIcra jest wspierany przez [API Foundation](https://www.apifoundation.com)

Wystartowaliśmy w roku 2018 z kilkoma pomysłami ale jedną ideą:
+ szybsze wytwarzanie orogramowania

Dziś, w roku 2020 dajemy rozwiązania w kilku obszarach:

+ [APIexec - executor library for shell scripts](https://www.apiexec.com)
+ [APIcra - shell scripts libraries](https://www.apicra.com)
+ [APIunit - definition of application, CI, CD](https://www.apiunit.com)
+ [APIbuild - build process definition, focused on quality, versioning](https://www.jloads.com)
+ [APIsql - bazy danych, zapytania, modele](https://www.apisql.com)
+ [APIfunc - rozwiązania dla FaaS](https://www.apifunc.com)
