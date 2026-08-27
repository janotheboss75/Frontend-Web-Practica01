# Frontend-Web-Practica01



**Paso 2:**

***ANTES de ejecutarlo, anotar en el cuaderno qué se cree que va a imprimir***

&#x09;Va a imprimir la concatenación del valor de la multa que es string con el del cargo fijo que es 	numérico

***¿Hubo algún error, alguna advertencia o algo en la consola que avisara?***

&#x09;No marco nada de error, siguió funcionando aunque dio un resultado no esperado



**Paso 3:**

***si el archivo tiene un error de tipos, ¿por qué node lo ejecuta? ¿Cuál comando revisa y cuál ejecuta?***

&#x09;Node lo ejecuta, por que no se esta ejecutando el compilador de typescript, si no el nativo de 	node, 	que corre puro JavaScript, cuando se utiliza el npx, ahí si utiliza el compilador de 	typescript y lo detecta como error.



**Paso 4:**

***de las dos líneas que usan const, ¿por qué sólo una falla?***

&#x09;Por que en una estas declarando la variable por primera vez, y como es una constante, cuando le 	quieres reasignar el valor, pues como es constante falla la segunda.

***al asignarle un texto a la variable con let, nadie escribió que fuera un número. ¿De dónde salió ese tipo?***

&#x09;Typescript recuerda el tipo de dato desde la primera vez que se declara, por eso sale detecta rápido cuando se quiere renombrar con otro tipo de dato.



**Paso 6:**

***Copiar el mensaje exacto de cada error, con su clave TS***

&#x09;src/multas.ts:37:5 - error TS2820: Type '"VENCIDO"' is not assignable to type 'EstadoPrestamo'. 	Did you mean '"vencido"'?



&#x09;Aquí esperaba que no tirara error, ósea como tienen las mismas letras solo que en mayuscula, 	pensaba que no iba a tirar error, pero ya vi que si es case sensitive, y fue en la linea 37, en el 	renglón 5, y por lo visto fue por el tipo VENCIDO que no existe en el EstadoPrestamo



&#x09;src/multas.ts:43:5 - error TS2322: Type 'string' is not assignable to type 'number'.

43     ejemplar: 'djdj',

&#x20;      \~\~\~\~\~\~\~\~

&#x09;La verdad ya me lo esperaba, ya que asigne un string en un atributo number, y por eso fue el error 	en la linea 43 renglón 5



&#x09;src/multas.ts:48:7 - error TS2741: Property 'multa' is missing in type '{ folio: string; ejemplar: 	number; estado: "vencido"; socio: string; }' but required in type 'Prestamo'.



&#x09;Pensaba que lo iba a ignorar si no ponía esa propiedad al instanciar el objeto, fue en la linea 48 y 	renglón 7, y por lo visto falta la propiedad multa, por poner en la instancia, ya que lo defini en el 	contrato que era obligatorio.











