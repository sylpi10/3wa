const anim = (word) => {

    return new Promise((resolve) => {
        word = "abcdefghijklmnopqrstuvwx";
        const randIndex = Math.ceil(Math.random() * 23);
        const randRes = Math.ceil(Math.random() * 9);
        const letter = word[randIndex];

        resolve((console.log(`${letter}${randRes}`)));
    });
} 

// anim();

async function anim2(word) {
    word = "";
    for (let index = 0; index < 10; index++) {
        word += await anim()
    }
    return word;
}

anim2().then((res)=> console.log(res));