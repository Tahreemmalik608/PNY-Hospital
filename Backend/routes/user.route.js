const express=require("express")
const router=express.Router();
const controller=require("../controller/user.controller")

router.post("/",controller.store)
router.post("/login",controller.login)
router.post("/forgot",controller.forgot)
router.post("/verifyotp",controller.verifyotp)
router.put("/updatepassword",controller.updatepassword)
router.get("/",controller.index)
router.get("/:id",controller.get)
router.delete("/:id",controller.destroy)
router.put("/:id",controller.update)

module.exports=router