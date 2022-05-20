
//função que verifica  o map e adiciona no array quem for Admin para exibir no final
function getAdmins(map){
    let admins = [];
    for([key,value] of map){//cria array para armazenar as iterações do map
        if(value === 'Admin'){
            admins.push(key);//ao encontrar um valor 'Admin' adiciona item no array admins
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Ana','Admin');
usuarios.set('Gustavo','User');
usuarios.set('Laura','Admin');

console.log(getAdmins(usuarios));