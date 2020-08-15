const asyncCallback = function(callback){
    setTimeout(()=>{
        if(Math.random() < 0.5){
            return callback(null, "hello world");
        }else{
            callback(new Error("hello error"));
        }
    },2000)
};

asyncCallback((error, message)=>{
    if(error){
        console.log("error", error);
    }else{
        console.log("message", message);
    }
})