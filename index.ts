async function random(args: string) {
    const array = [];
    for (const arg of args) {
        array.push(arg)
    }
    const random = array[Math.floor(Math.random() * array)];
    return random
};

async function add(...args: number) {
    let sum = 0;
    for (const num of args) {
        sum += num
    }
    return sum
};
async function print(...args: any) {
    console.log(args)
}
async function randomise(...args: any[]) {
    const random = args[Math.floor(Math.random() * args.length)];
    return random
}

export default {
    random, add, randomise3, print

}