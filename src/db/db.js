const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://srimathymec:toc8AvxZmWliMx22@cluster0.g3lrbti.mongodb.net/InternProject3?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});
