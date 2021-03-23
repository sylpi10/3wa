class Player{
    constructor(force, life, shot, name){
        this._force = force;
        this._life = life;
        this._shot = shot;
        this._name = name;
    }
    get force(){
        return this._force;
    }
    get life(){
        return this._life;
    }
    set life(life){
        this._life = life;
    }
    set shot(shot){
        this._shot = shot;
    }
    get shot(){
        return this._shot;
    }
    get name(){
        return this._name;
    }

    hit(player){
         player.life -= Math.floor(Math.random() * Math.floor(20));
         player.shot++;
     }
}

class Knight extends Player{}
class Dragon extends Player{
    constructor() {
		super();
	}
}

class Game{
    constructor(player1, player2){
        this._player1 = player1;
        this._player2 = player2;
    }

    run(){
        while (player1.life >= 0 || player2.life >= 0 ) {
            let rand = Math.floor(Math.random() * Math.floor(3));
            if (rand > 1) {
                player1.hit(player2)
                console.log(`${player1.name} shots !! ${player2.name} has ${player2.life} points of life`);
            }else{
                player2.hit(player1);
                console.log(`${player2.name} shots !! ${player1.name} has ${player1.life} points of life`);
            }

        }
    }
}

player1 = new Player(14,120,0,"knight");
player2 = new Player(16,100,0,"dragon");

game = new Game(player1, player2);
game.run();