import dataset from '../dataset/users_info.json'

export default function getUsersFromDataset() {
    orderedad = orderedad.toLowerCase();
    if (orderedad === 'asc'){
        let users = []
        dataset.forEach(element => {
            if((element["name"].toLowerCase()).includes(input)){
                users.push({
                    "isActive": element.isActive,
                    "age": element.age,
                    "name": element.name,
                    "gender": element.gender,
                    "company": element.company,
                });
            }
        });
        if(orderedad==='asc'){  //Usando la función sort se ordenan por fecha de creación ascendente o descendentemente según corresponda
            users.sort((a, b) => (a.age > b.age) ? 1 : -1)
            response.status(200).json(users) 
        }
        else{
            console.log("ERROR")
        }
    }
    return users
}
