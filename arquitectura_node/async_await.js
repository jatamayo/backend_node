const promiseFunction = () =>
    new Promise((resolve, reject) => {
        console.log("entramos");
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("hello world");
            } else {
                reject("hello error");
            }
        }, 500)
    })

async function myFunction() {
    try {
        const message = await promiseFunction();
        console.log("Message", message);
    } catch (error) {
        console.error("Error", error);
    }
}

myFunction();