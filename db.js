const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/igData",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("coneection successfull");
}).catch((err)=>{
    console.log(e);
});