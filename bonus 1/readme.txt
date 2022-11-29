Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

1 - Creo un ciclo for con tre istruzioni
    1.1 - Nella prima istruzione del ciclo, creo una variabile "i" = 1.
    1.2 - Nella seconda istruzione del ciclo, do la condizione che i non deve superare il valore 100 (i <= 100).
    1.3 - Nella seconda istruzione incremento la variabile "i" di uno (i++).
2 - All'interno del ciclo for creo una condizione if
    2.1 - Se il numero di i è un multiplo di 3 e di 5 (i%3 == 0 && i%5 == 0) mostro a schermo FizzBuzz.
    2.2 Altrimenti se i è solo un multiplo di 3 (i%3 == 0) mostro a schermo Fizz.
    2.3 Altrimenti se i è solo un multiplo di 5 (i%5 == 0) mostro a schermo Buzz.
    2.4 Altrimenti se i non è un multiplo ne di 3 ne di 5 mostro a schermo i.