const express=require("express")
const router=express.Router()


router.get('/', async (req, res) => {
    res.render('index');
});

router.get("/productos",(req,res) =>{
    res.render("productos")
})

module.exports=router;

