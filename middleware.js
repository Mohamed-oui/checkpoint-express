const dat = new Date();
const heure = dat.getHours();
const jour = dat.getDay();

const avaibleTime = (req,res,next) =>{
   if(heure >= 9 && heure < 17 && jour >= 1 && jour <= 5) {
    console.log("page have been send to the client")
    next();
   }
   else{
    console.log("sorry we are out of service")
    res.send(' <h1>Sorry try in working times </h1> ')
   }
}

module.exports = avaibleTime;