
const Item = require('../schemas/users_mysql');

module.exports = {
    listItems: ()=> {
        return Item.findAll({where: {}, row: true});  //row: true là chỉ để lấy dữ liệu
    },
    createItem: (item)=> {
      return   Item.create({
                    username:     item.username,    
                    password:     item.password,
                    fullname:     item.fullname,
                    birthdate:    item.birthdate,
                    gender  :     item.gender,
                    address :     item.address,
                    email   :     item.email,
                    identitycard: item.identitycard,
                    mobiphone:    item.mobiphone,
                    role:         item.role 
                })       
    },
    countItems: ()=> {
        return Item.count()
    },
    getItem: (id)=> {
        return  Item.findOne({ where:{ id: id} })
    },
    deleteItem: (id) =>{
        return Item.destroy({ where: { id: id }});             
    },
    updateItem: (id,itemEdit) =>{
        return  Item.update({ 
            username:     itemEdit.username,    
            password:     itemEdit.password,
            fullname:     itemEdit.fullname,
            birthdate:    itemEdit.birthdate,
            gender  :     itemEdit.gender,
            address :     itemEdit.address,
            email   :     itemEdit.email,
            identitycard: itemEdit.identitycard,
            mobiphone:    itemEdit.mobiphone,
            role:         itemEdit.role  
        },{where: { id: id }});         
    }
}
