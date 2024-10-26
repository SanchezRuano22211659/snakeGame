# Snake game

# El proyecto

El proyecto es un juego donde controlas una serpiente que se mueve en un escenario. Tu objetivo como jugador es comer las distintas frutas o figuras que se presenten en el escenario y evitar chocar con tu propia cola y las paredes de la zona.

# El funcionamiento interno
## Las variables
Utilicé variables globalesla velocidad del juego(vel), el inicio de la serpiente, la variable fruta, además de dos textos gráficos que te dirán tu puntuación y velocidad junto a otros dos en los que se esclarece el punto actual de la serpiente y la fruta en ejer x e y.
## Las funciones
En la función GameRestart se permite reiniciar el juego desde 0 con presionar una tecla(ENTER).
En la función setup se inicializa el elemento de puntuación, velocidad, comparacion entre ejes x e y de la fruta y la serpiente en tiempo real, la velocidad, una fruta inicial y la serpiente.
En la función draw se dibuja la serpiente, la fruta, se chequean las colisiones de la serpiente, de la fruta y del juego, además de la velocidad.
La función UpdateSnakeCoordinates es la que va continuamente llevando la dirección que la función KeyPressed dice para permitir al jugador el movimiento.
Las funciones comenzadas con check hacen una revisión constante de las colisiones de la serpiente con las frutas y las paredes, mientras que checkgamestatus revisa que si la serpiente tiene una colisión, el juego para y procede a decirte que has perdido
## Las clases
En la clase serpiente se aclaran las funciones más básicas relacionadas y mencionadas anteriormente: UpdateSnakeCoordinates, snakeStart, checkGameStatus, checkForFruit y checkSnakeCollision.
Hay una clase base llamada fruta, de la que se aclara el tipo base de la fruta, le siguen las frutas más básicas, apple, carrot y pear, las cuales dicen una figura distinta en un método draw y su tipo, originario de la fruta. Además, en la clase base se aclaran las funciones FruitSpawn y la clase randomFruit, que dan un punto aleatorio y un tipo de fruta aleatorio.

# Diagrama UML
![](https://github.com/SanchezRuano22211659/snakeGame/blob/main/UMLsnakegame.svg)
# Referencias
- [freecodecamp](https://www.freecodecamp.org/news/how-to-build-a-snake-game-in-javascript/)
- [juego de la serpiente js](https://www.lawebdelprogramador.com/codigo/JavaScript/6111-Juego-de-la-serpiente-snake-en-javascript.html)
- [p5 snake game](https://archive.p5js.org/examples/interaction-snake-game.html)
