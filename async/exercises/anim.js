const anim = (word) => {

    return new Promise((resolve, reject)=> {
        const rand = Math.floor(Math.random() * Math.floor(26));
        const randRes = Math.floor(Math.random() * Math.floor(10));
        const splitted = word.split('');
        const letter = splitted[rand];

        resolve((console.log(`${letter}${randRes}`)));
    });
} 

anim("abcdefghijklmnopqrstuvwxyz");
