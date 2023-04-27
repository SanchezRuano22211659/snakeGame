# Snake game

# El proyecto

El proyecto es un juego donde controlas una serpiente que se mueve en un escenario. Tu objetivo como jugador es comer las distintas frutas o figuras que se presenten en el escenario y evitar chocar con tu propia cola y las paredes de la zona.

# El funcionamiento interno
## Las variables
Utilicé variables globales dado la sencillez y naturaleza del juego además de la facilidad para utilizarlo en todas las clases, como la cantidad de segmentos(numSegments), la dirección(direction), la velocidad del juego(vel), el inicio de la serpiente, las coordenadas de la serpiente y de la fruta, la variable fruta y su tamaño, además de dos textos gráficos que te dirán tu puntuación y velocidad. 
## Las funciones
En la función setup se inicializa el elemento de puntuación y velocidad, la velocidad, una fruta inicial y la serpiente.
En la función draw se dibuja la serpiente, la fruta, se chequean las colisiones de la serpiente, de la fruta y del juego, además de la velocidad.
La función UpdateSnakeCoordinates es la que va continuamente llevando la dirección que la función KeyPressed dice para permitir al jugador el movimiento.
Las funciones comenzadas con check hacen una revisión constante de las colisiones de la serpiente con las frutas y las paredes, mientras que checkgamestatus revisa que si la serpiente tiene una colisión, el juego para y procede a decirte que has perdido
## Las clases
Hay una clase base llamada fruta, de la que se aclara el tipo base de la fruta, le siguen las frutas más básicas, apple, carrot y pear, las cuales dicen una figura distinta en un método draw y su tipo, originario de la fruta.

# Diagrama UML
![](https://github.com/SanchezRuano22211659/snakeGame/blob/main/UMLsnakegame.png)
# Referencias
- [freecodecamp](https://www.freecodecamp.org/news/how-to-build-a-snake-game-in-javascript/)
- [juego de la serpiente js](https://www.lawebdelprogramador.com/codigo/JavaScript/6111-Juego-de-la-serpiente-snake-en-javascript.html)
- [p5 snake game](https://p5js.org/es/examples/interaction-snake-game.html)
