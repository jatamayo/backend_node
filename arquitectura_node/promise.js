const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random() < 0.5){
            resolve("hello world");
        }else{
            reject(new Error("hello error"));
        }
    },2000)
})

promise
    .then((message)=>{
        message.toUpperCase();
    })
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log("error", error);
    })