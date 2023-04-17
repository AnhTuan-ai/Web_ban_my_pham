var arrSP =[
    {
        TenSP: 'Kem duong am',
        gia: '215.000',
        hinh: '/IMG/oginary.jpg',
        loai: 'make up'
    },
    {
        TenSP: 'Kem duong am',
        gia: '215.000',
        hinh: '/IMG/oginary.jpg',
        loai: 'make up'
    },
    {
        TenSP: 'Kem duong am',
        gia: '215.000',
        hinh: '/IMG/oginary.jpg',
        loai: 'make up'
    },
    {
        TenSP: 'Kem duong am',
        gia: '215.000',
        hinh: '/IMG/oginary.jpg',
        loai: 'make up'
    }
]

function hienSP(){
    var list = document.getElementById('list');
    list.innerHTML = '';
    for( i = 0; i < arrSP.length; i++){
        list.innerHTML += `<div class = "sp">
        <img src = "${arrSP[i].hinh}">
        <h4> ${arrSP[i].TenSP}</h4>
        <h4> ${arrSP[i].loai}</h4>
        <h4> ${arrSP[i].gia}</h4>
        `
    }
}