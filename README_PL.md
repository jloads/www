+ [Wersja angielska - EN](https://www.jloads.com/)


# Info about [ApiBuild](https://www.apibuild.com)
![jLoads](https://jloads.github.io/logo/jloads_logo_128.png)

https://github.com/jloads/logo


+ [www](https://www.jloads.com/)
+ [blog](https://blog.jloads.com/)
+ [logo](https://logo.jloads.com/)


https://github.com/apibuild

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


# [API Foundation](https://www.apifoundation.com)

Projekt APIcra jest wspierany przez [API Foundation](https://www.apifoundation.com)

Wystartowaliśmy w roku 2018 z kilkoma pomysłami ale jedną ideą:
+ szybsze wytwarzanie orogramowania

Dziś, w roku 2020 dajemy rozwiązania w kilku obszarach:

+ [APIexec - executor library for shell scripts](https://www.apiexec.com)
+ [APIcra - shell scripts libraries](https://www.apicra.com)
+ [APIunit - definition of application, CI, CD](https://www.apiunit.com)
+ [APIbuild - build process definition, focused on quality, versioning](https://www.apibuild.com)
+ [APIsql - bazy danych, zapytania, modele](https://www.apisql.com)
+ [APIfunc - rozwiązania dla FaaS](https://www.apifunc.com)
