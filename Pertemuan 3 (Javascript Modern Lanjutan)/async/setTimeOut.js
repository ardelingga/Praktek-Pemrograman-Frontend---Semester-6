function download(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Download 3 Detik..")
        }, 3000)
    })
}

function verify(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Verify 2 Detik..")
        }, 2000)
    })
}

function notify(){
    console.log("Download selesai")
}

async function main(){
    console.log(await download())
    console.log(await verify())
    notify()
}

main()
