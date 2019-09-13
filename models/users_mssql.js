
const Item = require('../schemas/users_mssql');

module.exports = {
    listItems: ()=> {
        return Item.findAll({ where: {}, row: true});
    },
    createItem: (item)=> {
      return   Item.create({
                    username:     item.username,    
                    password:     item.password,
                    fullname:     item.fullname,
                    birthdate:    item.birthdate
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
    updateItem: (id, itemEdit) =>{
        return  Item.update({ 
                    username:     itemEdit.username,    
                    password:     itemEdit.password,
                    fullname:     itemEdit.fullname,
                    birthdate:    itemEdit.birthdate 
                },{where: { id: id }});               
    }
}
