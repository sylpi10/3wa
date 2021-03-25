const anim = (word) => {

    return new Promise((resolve, reject)=> {
        word = "abcdefghijklmnopqrstuvwx";
        const rand = Math.ceil(Math.random() * 23);
        const randRes = Math.ceil(Math.random() * 9);
        const letter = word[rand];
        
        resolve((console.log(`${letter}${randRes}`)));
    });
} 

anim();
