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
        TenSP: 'Sữa Rửa Mặt Transino Clear Wash EX 100g',
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

    

    {
        TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
        hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
        thuonghieu: 'ordinary',
        gia: '370.000',
        m_s_k: 'm',
        loai: 'dactri',
        loaichitiet: 'chongnang'
    },
    {
        TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
        hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
        thuonghieu: 'ordinary',
        gia: '370.000',
        m_s_k: 'm',
        loai: 'dactri',
        loaichitiet: 'chongnang'
    },
    {
        TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
        hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
        thuonghieu: 'ordinary',
        gia: '370.000',
        m_s_k: 'm',
        loai: 'dactri',
        loaichitiet: 'chongnang'
    },
    {
        TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
        hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
        thuonghieu: 'ordinary',
        gia: '370.000',
        m_s_k: 'm',
        loai: 'dactri',
        loaichitiet: 'chongnang'
    },
    {
        TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
        hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
        thuonghieu: 'ordinary',
        gia: '370.000',
        m_s_k: 'm',
        loai: 'dactri',
        loaichitiet: 'chongnang'
    },
    {
        TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
        hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
        thuonghieu: 'ordinary',
        gia: '370.000',
        m_s_k: 'm',
        loai: 'dactri',
        loaichitiet: 'chongnang'
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

]

var perPage = 6;
var currentPage = 1;
var start = 0;
var end = perPage;
const totalPage = Math.ceil(arrSP.length / perPage);

function hienSP(arrSP){
    var list = document.getElementById('list');
    list.innerHTML = '';
    for( i = 0; i < arrSP.length; i++){
        if(i >= start && i<end) {
        m_s_kSP = arrSP[i].m_s_k;
        loaiSP = arrSP[i].loai;
        loaichitietSP = arrSP[i].loaichitiet;
        list.innerHTML += `<div class = "col-lg-4 col-md-4 col-sm-4 col-xl-4 sp " data-toggle="modal" data-target="#exampleModalCenter${[i]}">
        <img src = "${arrSP[i].hinh}" width="100%" height="200px">
        <h4> ${arrSP[i].TenSP}</h4>
        <h4> ${arrSP[i].loai}</h4>
        <h4> ${arrSP[i].gia}</h4>
        </div>

        <div class="modal fade" id="exampleModalCenter${[i]}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="row">
                <div class="col-5"><img src = "${arrSP[i].hinh}" width="100%" height="100%"></div>
                <div class="col-7">
                <h4> ${arrSP[i].TenSP}</h4>
                <h4> ${arrSP[i].loai}</h4>
                <h4> ${arrSP[i].gia}</h4>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-info">Thêm vào giỏ hàng</button>
              <button type="button" class="btn btn-outline-danger">Mua với voucher</button>
            </div>
          </div>
        </div>
      </div>
        </div>
        `
    }
    }
}

// ham page:
var arr = []
function page (arr){
    var btnNext = document.getElementById("next")
    var btnPrevious = document.getElementById("Previous")
    btnNext.addEventListener('click', () =>{
        currentPage++;
        if (currentPage > totalPage){
            currentPage = totalPage;
        }
        start = (currentPage - 1)*perPage;
        end = currentPage*perPage;
        hienSP(arr);
    }
    )
    var btnPrevious = document.getElementById("Previous")
    btnPrevious.addEventListener('click', () =>{
        currentPage--;
        if (currentPage > totalPage){
            currentPage = totalPage;
        }
        start = (currentPage - 1)*perPage;
        end = currentPage*perPage;
        hienSP(arr);
    }
    )
}

document.getElementById("m").addEventListener("click", chonSPmk);
document.getElementById("s").addEventListener("click", chonSPsk);
//
function chonSPmk(){
    var newArray = arrSP.filter(function(bien){return bien.m_s_k == "m"});
    hienSP(newArray);
}
function chonSPsk(){
    var newArray = arrSP.filter(function(bien){return bien.m_s_k == "s"});
    hienSP(newArray);
}
hienSP(arrSP);
page (arrSP)
// function renderListPage(){

// }

