import {student} from './studentsclass.js'

function displayItems(){
    var eighta= document.getElementById('8a');
    var eightb=  document.getElementById('8b');;
    var eightc=  document.getElementById('8c');

    

    const eightA= student.filter((item)=>item.category=='8a');
    const eightB= student.filter((item)=>item.category=='8b');
    const eightC= student.filter((item)=>item.category=='8c');
    eightA.map(item=>{
        
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var atasProfile= document.createElement('div');
        atasProfile.setAttribute('id','card-top');

        var gambar_user = document.createElement('img');
        gambar_user.src = item.img;

        var nama_murid = document.createElement('p');
        nama_murid.setAttribute('id','item-name');
        nama_murid.innerText = item.name;

        itemCard.appendChild(atasProfile);
        itemCard.appendChild(gambar_user);
        itemCard.appendChild(nama_murid);

        eightA_Class.appendChild(itemCard);
        
    })


    eightB.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var atasProfile= document.createElement('div');
        atasProfile.setAttribute('id','card-top');

        var gambar_user = document.createElement('img');
        gambar_user.src = item.img;

        var nama_murid = document.createElement('p');
        nama_murid.setAttribute('id','item-name');
        nama_murid.innerText = item.name;

        itemCard.appendChild(atasProfile);
        itemCard.appendChild(gambar_user);
        itemCard.appendChild(nama_murid);

        eightB_Class.appendChild(itemCard);
        
    })

    eightC.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var atasProfile= document.createElement('div');
        atasProfile.setAttribute('id','card-top');

        var gambar_user = document.createElement('img');
        gambar_user.src = item.img;

        var nama_murid = document.createElement('p');
        nama_murid.setAttribute('id','item-name');
        nama_murid.innerText = item.name;

        itemCard.appendChild(atasProfile);
        itemCard.appendChild(gambar_user);
        itemCard.appendChild(nama_murid);

        eightC_Class.appendChild(itemCard);
        
    })

}
displayItems();