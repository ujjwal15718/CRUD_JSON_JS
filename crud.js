const fs=require("fs");
var inp=require('readline-sync');
const l=[]
function choose(){
    let select=inp.questionInt("press 1 for signup\npress 2 for login\npress 3 for delete the data\npress 4 for update\npress 5 for exit\nenter : ")
    if(select===1){
        return signup();
    }else if(select===2){
        return login();
    }else if(select===5){
         return ex();
    }else if(select===3){
        return DELETE();
    }else if(select===4){
        return Update();
    }
    function signup(){
        if(fs.existsSync("file.json")){
            let newdata=(fs.readFileSync("file.json","utf-8"));
            let convert=JSON.parse(newdata)
            var ask=inp.question("enter the email Id for check that it present or not : ")
            if(ask.includes("@")&&(ask.includes("."))){
                let check=true;
                for(let i in convert){
                    if(convert[i]["userId"]===ask){
                        check=false;
                        console.log("Already present!!!!!")
                    }
                }
                if(check){
                    jsnData_fil_se_yaha=JSON.parse(newdata)
                    console.log("!!!!!!!! No name is found please register yourself first!!!!!!!!!1")
                    const biodata={
                        userId:ask,
                        name:inp.question("enter the name : "),
                        city:inp.question("enter the city : "),
                        language:inp.question("enter the language : ")

                    }
                    jsnData_fil_se_yaha.push(biodata)
                    let m=JSON.stringify(jsnData_fil_se_yaha,null,3) 
                    fs.writeFileSync("file.json", m)
                    console.log("!!!!!!!!!! Successfully registered !!!!!!!!!!!")
                    choose()
                }
            }
            else{
                console.log("!!!!!!! please enter valid email id !!!!!!!!!!!!")
                choose()
            }
        }     
        else{
            fs.writeFileSync("file.json", JSON.stringify(l))
            signup()
        }
    }
    function ex(){
        console.log("existed!!!!!!!!!")
    }
    function login(){
        let READ=JSON.parse(fs.readFileSync("file.json","utf-8"));
        let dataCheck=inp.question("enter registered the Id : ")
        let check=true;
        for(let i in READ){
            if(READ[i]["userId"]===dataCheck){
                check=false;
                console.log(READ[i])
                choose()
            }
        }
        if(check){
            console.log("Didn't match!!!!!!!!!!")
            choose()
        }
    }
    function DELETE(){
        let READ=JSON.parse(fs.readFileSync("file.json","utf-8"));
        let dataCheck=inp.question("enter registered the name : ")
        for(let i in READ){
            if(READ[i]["userId"]===dataCheck){
                READ.splice(i,1)
                let read1=JSON.stringify(READ,null,3)
                fs.writeFileSync("file.json",read1)
            }
        }

    }

    function Update(){
        let READ=JSON.parse(fs.readFileSync("file.json","utf-8"));
        let dataCheck=inp.question("enter registered the id : ")
        for(let i in READ){
            if(READ[i]["userId"]===dataCheck){
                READ.splice(i,1)
                console.log("deleted!!!!!!!")
                const biodata={
                    userID:dataCheck,
                    name:inp.question("enter the name : "),
                    city:inp.question("enter the city : "),
                    language:inp.question("enter the language : ")

                }
                READ.push(biodata)
                let biodataTojson=JSON.stringify(READ,null,3);
                fs.writeFileSync("file.json",biodataTojson)

            }else{
                console.log("didn't match !!!!!1 ")
            }
        }
    }
}
choose();








 







 






 
