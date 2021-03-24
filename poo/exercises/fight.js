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

    get name(){
        return this._name;
    }

    hit(player){
        //  player.life -= Math.floor(Math.random() * Math.floor(20));
         player.life -= this.force * Math.floor(Math.random() * Math.floor(5));
         this.shot++;
     }
}

class Knight extends Player{}
class Dragon extends Player{}


class Game{
    constructor(player1, player2){
        this._player1 = player1;
        this._player2 = player2;
    }

    run(){
        while (knight.life > 0 && dragon.life > 0 ) {
            const rand = Math.floor(Math.random() * Math.floor(3));
            if (rand > 1) {
                knight.hit(dragon)
                console.log(`${knight.name} shots !! ${dragon.name} has ${dragon.life} points of life`);
            }else{
                dragon.hit(knight);
                console.log(`${dragon.name} shots !! ${knight.name} has ${knight.life} points of life`);
            }

        }
    }
}

knight = new Knight(14,120,0,"knight");
dragon = new Dragon(16,100,0,"dragon");

game = new Game(knight, dragon);
game.run();