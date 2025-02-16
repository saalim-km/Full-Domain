const {exec , spawn} = require("child_process");

exec("node eventEmitter.js",(error,stderr,stdout)=> {
    if(error) {
        console.log(error);
        return;
    }

    if(stderr){
        console.log(stderr);
        return;
    }

    console.log('Stdout :',stdout);
})



const child = spawn('node',['-v']);
child.stdout.on('data',(data)=> {
    console.log(`output ${data}`);
})

child.stderr.on('data',(data)=> {
    console.log(`error : ${error}`)
})


child.on('close',(code)=> {
    console.log('child process exited with code : ',code);
})