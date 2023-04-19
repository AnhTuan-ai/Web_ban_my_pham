var arrSP =[
    {
        TenSP: 'Kem dưỡng ẩm Natural Moisturizing Factors',
        hinh: '/IMG/oginary.jpg',
        thuonghieu: 'ordinary',
        gia: '370.000',
        m_s_k: 's',
        loai: 'duong',
        loaichitiet: 'kemduong'
    },
    {
        TenSP: 'Kem dưỡng ban đêm trị nám Transino Whitening Repair Cream EX 35g',
        hinh: '../IMG/Transino-Whitening-Repair-Cream-ex.jpg',
        thuonghieu: 'Transino',
        gia: '749.000',
        m_s_k: 's',
        loai: 'duong',
        loaichitiet: 'kemduong'
    },
    {
        TenSP: 'Sữa Rửa Mặt Transino Clear Wash EX< 100g',
        hinh: '../IMG/sua-rua-mat-transino-clear-wash-ex.jpg',
        thuonghieu: 'Transino',
        gia: '365.000',
        m_s_k: 's',
        loai: 'lamsach',
        loaichitiet: 'suaruamat'
    },
    {
        TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
        hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
        thuonghieu: 'ordinary',
        gia: '370.000',
        m_s_k: 's',
        loai: 'dactri',
        loaichitiet: 'chongnang'
    },

    


]

function hienSP(){
    var list = document.getElementById('list');
    list.innerHTML = '';
    for( i = 0; i < arrSP.length; i++){
        m_s_kSP = arrSP[i].m_s_k;
        loaiSP = arrSP[i].loai;
        loaichitietSP = arrSP[i].loaichitiet;
        list.innerHTML += `<div class = "col-lg-4 col-md-4 col-sm-4 col-xl-4 sp " data-toggle="modal" data-target="#exampleModalCenter">
        <img src = "${arrSP[i].hinh}" width="100%" height="200px">
        <h4> ${arrSP[i].TenSP}</h4>
        <h4> ${arrSP[i].loai}</h4>
        <h4> ${arrSP[i].gia}</h4>
        </div>
        `
    }
}
hienSP();

