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
        
### Historia i powody powstania biliotewki jLoads

W ostatniej dekadzie pwostało wielu nowych specjalizacji w obszarze sofwtare developement.
Jako programiści Backend-owi potrzebujemy wsparcia w obszarze frontendu.
Obecne frameworki wymagają nauki gdyż wprowadzają sporo abstrakcji
mimo, że są łatwiejsze w użyciu niż sam Javascript do uzyskania tego samego rezultatu,
potrzebna jest wiedza z zakreu budowy i serwisowania tych rozwiazań.

Aby możliwe było łartwe przejscie pmiędzy projektami potrzebne są jakieś standardy.
One już istnieją, tylko w momencie powstawiania masy frameworków, trudno o ich użycie, gdyż każdy z nich narzuca własne.

Z tego powodu warto zastanawoić się do czego to prowadzi.
Dla każdego, który widzi wartość w użyciu technologii natywnych jak czysxty język Javascript, bash, ..
oferujemy narzędzie pozwalająca na implementacje modularyzacji w sposób natywny, bez potrzeby tworzenia bastrakycjnej warstwy.

To czego potrzebujemy to ładowania asynchronicznych mediów w przeglądarce, tak by były wolne od konfliktów wynikacjących 
z zależności, błędów, itp.

Tutaj z pomocą przychdzi jLoads, biblioteka, która ładuje wszystkie media jako pojedyncze moduły/pliki
dzięki temu możliwe jest łatwe reużycie, gdyż są to proste elementy HTML, CSS, JAVASCRIPT, SVG, itd

Dzięki mozliwości ich kombinacji na stronie www u klienta powstaje wiele możliwości reakcji.

## Wartości
+ Filozofia, w duchu której powstaje jLoads, to natywne rozwiązania na potrzeby modularyzacji
+ Standaryzacja sposóbów dostępu do mediów, a nie standaryzacja treści!
+ Droga do której prowadzi jLoads to Steramowanie APlikcji
+ Dodatkowe rozwiazania pozwalające na poszerzenie korzyści płynącej z JLoads to
    + jBodys jako obszerna biblioteka otwartych i darmowych modułów
    + jRuns jako runner po stronie serwera dla kodu po stronie backendu
    
To co jest istotne, to możliwość pracy z zastanym kodem "Legacy Code", bez potrzeby implementacji nowych frameworków,

## pozostańmy natywni, kolejną dekadę!

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


## Przykład lokalnej implementacji edytora codemirror

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

 
[https://load.jloads.com/](https://load.jloads.com/index.html)


# [API Foundation](https://www.apifoundation.com)

Projekt APIcra jest wspierany przez [API Foundation](https://www.apifoundation.com)

Celem jest rozwój ekosystemu w celu szybszego wytwarzania oprogramowania


Obecnie istnieje kilka narzędzi, od planowania po uruchamianie i utrzymanie oprogramowania:

+ [APIexec - executor library for shell scripts](https://www.apiexec.com)
+ [APIcra - shell scripts libraries](https://www.apicra.com)
+ [APIunit - definition of application, CI, CD](https://www.apiunit.com)
+ [APIbuild - build process definition, focused on quality, versioning](https://www.jloads.com)
+ [APIsql - bazy danych, zapytania, modele](https://www.apisql.com)
+ [APIfunc - rozwiązania dla FaaS](https://www.apifunc.com)
