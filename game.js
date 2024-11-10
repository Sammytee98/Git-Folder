const call = () => {
    console.log('Number one');
    setTimeout(() => {
        console.log('Number two');
    }, 0);
    const promise = new Promise((resolve, reject) => {
        resolve('Number three');
    })
    .then((resolve) => {
        console.log(resolve);
    });
    console.log('Number four');
}
call();