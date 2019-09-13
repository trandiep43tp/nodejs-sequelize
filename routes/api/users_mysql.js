const express = require('express');
const router  = express.Router();
const Users   = require('../../models/users_mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
    Users.listItems()
    .then((items) =>{      
        res.json(items);
    })
    .catch( err => {
        res.json([])  //nên return 1 mảng rỗng khi bị lỗi
    });
  
});
//thêm mới 1 item
router.post('/', (req, res, next) => {
    let itemNew = req.body;
    let item = {
        username: itemNew.username,    
        password: itemNew.password,
        fullname:  itemNew.fullname,
        birthdate: itemNew.birthdate,
        gender  :    itemNew.gender,
        address :    itemNew.address,
        email   :    itemNew.email,
        identitycard: itemNew.identitycard,
        mobiphone:   itemNew.mobiphone,
        role:         itemNew.role
    }
    Users.createItem(item)
        .then((result) =>{
            res.json(result.dataValues)
        }) 
        .catch( err => {
            console.log(err)
        })   
    
})

//lấy 1 item
router.get('/:id', function(req, res, next) {
    let id = req.params.id;    
    Users.getItem(id)
        .then((item) =>{        
            res.json(item);
        })
        .catch( err => {
            console.log(err)
        })
});

//xóa 1 item
router.delete('/:id', (req, res, next) =>{
    let id = req.params.id;
    Users.deleteItem(id)
        .then((item)=>{    
            res.json(item);  //trả về 1 là xóa thành công
        })
        .catch( err => {
            console.log(err)
        }) 
});
 
//update item
router.put('/:id', (req, res, next) =>{
    let id = req.params.id;
    let itemEdit = req.body;
    let item = {
        username:  itemEdit.username,    
        password:  itemEdit.password,
        fullname:  itemEdit.fullname,
        birthdate: itemEdit.birthdate,
        gender  :  itemEdit.gender,
        address :  itemEdit.address,
        email   :  itemEdit.email,
        identitycard: itemEdit.identitycard,
        mobiphone: itemEdit.mobiphone,
        role:      itemEdit.role
    }
    Users.updateItem(id, item)
        .then( item =>{
            res.json(item);  //nó trả về 1 mảng có 1 giá trị là 1 nếu thành công
        })
        .catch( err => {
            console.log(err)
        })  
})



module.exports = router;
