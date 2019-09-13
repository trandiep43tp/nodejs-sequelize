
const Item = require('../schemas/users');

module.exports = {
    listItems: ()=> {
        return Item.findAll();
    },
    createItem: (item)=> {
      return   Item.create({
            id: 5,
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
        // .then(function(note) {
        //     callback();
        // }).error(function(err) {
        //     callback(err);
        //});
    },
    countItems: ()=> {
        return Item.count()
    },
    getItem: (id)=> {
        return  Item.findOne({ where:{ id: id} })
    },
    deleteItem: (id) =>{
        return Item.findOne({where: {id: id}}).then( item => {
            if(item !== null){
                return  item.destroy().then(()=>{
                    return Promise.resolve( "Delete success");
                }) 
            }else{
                return Promise.resolve( "not find item");
            }                            
        });        
    },
    updateItem: (itemUpdate) =>{
        Item.find({ where:{ id: itemUpdate.id} }).then(function(item) {
            if(!item) {
                callback(new Error("No note found for key " + itemUpdate.id));
            } else {
                item.updateAttributes({
                    title: title,
                    body: body
                })
                // .then(function() { 
                //     callback();
                // }).error(function(err) {
                //     callback(err);
                // });
            }
        })
        // .error(function(err) {
        //     callback(err);
        // });
    }
}
