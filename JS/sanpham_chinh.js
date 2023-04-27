var arrSP = [{
    TenSP: 'Kem dưỡng ẩm Natural Moisturizing Factors',
    hinh: '../IMG/oginary.jpg',
    thuonghieu: 'ordinary',
    gia: '370.000',
    m_s_k: 's',
    loai: 'duong',
    loaichitiet: 'kemduong',
    new_hot: 'New',
    mota: ''
},
{
    TenSP: 'Kem dưỡng ban đêm trị nám Transino Whitening Repair Cream EX 35g',
    hinh: '../IMG/Transino-Whitening-Repair-Cream-ex.jpg',
    thuonghieu: 'Transino',
    gia: '749.000',
    m_s_k: 's',
    loai: 'duong',
    loaichitiet: 'kemduong',
    new_hot: 'New'
},
{
    TenSP: 'Sữa Rửa Mặt Transino Clear Wash EX 100g',
    hinh: '../IMG/sua-rua-mat-transino-clear-wash-ex.jpg',
    thuonghieu: 'Transino',
    gia: '365.000',
    m_s_k: 'm',
    loai: '',
    loaichitiet: '',
    new_hot: 'New'
},
{
    TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
    hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
    thuonghieu: 'Ordinary',
    gia: '370.000',
    m_s_k: 'm',
    loai: '',
    loaichitiet: '',
    new_hot: 'New'
},
{
    TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
    hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
    thuonghieu: 'Ordinary',
    gia: '370.000',
    m_s_k: 'm',
    loai: '',
    loaichitiet: '',
    new_hot: 'New'
},
{
    TenSP: 'Kem chống nắng The Ordinary Mineral UV Filters SPF 30 with Antioxidants',
    hinh: '../IMG/The-Ordinary-Mineral-UV-Filters-SPF-30-with-Antioxidants-768x768.jpg',
    thuonghieu: 'Ordinary',
    gia: '370.000',
    m_s_k: 'm',
    loai: '',
    loaichitiet: '',
    new_hot: 'New'
},
{
    TenSP: 'Tinh chất trị mụn The Ordinary Salicylic Acid 2% Solution (BHA)',
    hinh: '../IMG/Salicylic-Acid-2-Solution.jpg',
    thuonghieu: 'Ordinary',
    gia: '260.000',
    m_s_k: 's',
    loai: '',
    loaichitiet: '',
    new_hot: 'Hot'
},
{
    TenSP: 'Mascara <b>Maybelline Falsies Lash Lift Waterproof</b> Dày Và Cong Mi 8.6ml',
    hinh: '../IMG/maybelline-falsies-lash-lift-waterproof-mascara-officialstorelogo-open_6578b8dbf375432a9e5fd894d8cb1421_master.webp',
    thuonghieu: 'Ordinary',
    gia: '',
    m_s_k: 's',
    loai: '',
    loaichitiet: '',
    new_hot: 'New'
},
{
    TenSP: 'Kem Lót Baby Skin Pore Eraser 22ml',
    hinh: '../IMG/google-shopping-kem-lot-trang-diem-maybelline-baby-skin-22ml_img_358x358_843626_fit_center.jpg',
    thuonghieu: 'Maybelline',
    gia: '149.000',
    m_s_k: '',
    loai: '',
    loaichitiet: '',
    new_hot: 'New'
},
{
    TenSP: '',
    hinh: '',
    thuonghieu: '',
    gia: '',
    m_s_k: '',
    loai: '',
    loaichitiet: '',
    new_hot: ''
},
{
    TenSP: '',
    hinh: '',
    thuonghieu: '',
    gia: '',
    m_s_k: '',
    loai: '',
    loaichitiet: '',
    new_hot: ''
},
{
    TenSP: '',
    hinh: '',
    thuonghieu: '',
    gia: '',
    m_s_k: '',
    loai: '',
    loaichitiet: '',
    new_hot: ''
},
{
    TenSP: '',
    hinh: '',
    thuonghieu: '',
    gia: '',
    m_s_k: '',
    loai: '',
    loaichitiet: '',
    new_hot: ''
},
{
    TenSP: '',
    hinh: '',
    thuonghieu: '',
    gia: '',
    m_s_k: '',
    loai: '',
    loaichitiet: '',
    new_hot: ''
},
{
    TenSP: '',
    hinh: '',
    thuonghieu: '',
    gia: '',
    m_s_k: '',
    loai: '',
    loaichitiet: '',
    new_hot: ''
},
{
    TenSP: '',
    hinh: '',
    thuonghieu: '',
    gia: '',
    m_s_k: '',
    loai: '',
    loaichitiet: '',
    new_hot: ''
},

]

function hienSP(arrSP){
    var list = document.getElementById('list');
    list.innerHTML = '';
    for( i = 0; i < arrSP.length; i++){
        m_s_kSP = arrSP[i].m_s_k;
        loaiSP = arrSP[i].loai;
        loaichitietSP = arrSP[i].loaichitiet;
        list.innerHTML += `<div class="product_tag" data-toggle="modal" data-target="#exampleModalCenter${[i]}">
        <div class="product_img">
        <img src="${arrSP[i].hinh}"/>
          <div class="product_tag_icon">
            <button><i class="fa fa-heart"></i></button>
            <button><i class="fa fa-shopping-bag"></i></button>
          </div>
        </div>

        <a href="#">
          <h4 class="product_name">
          ${arrSP[i].TenSP}</b>
          </h4>
        </a>
        <a href="#">
          <h4 class="product_brand">${arrSP[i].thuonghieu}</h4>
        </a>
        <h4 class="product_price">${arrSP[i].gia} đ</h4>
        <div class="product_tag_New">${arrSP[i].new_hot}</div>
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
              <button type="button" class="btn btn-info">Thêm vào giỏ hàng</button>
              <button type="button" class="btn btn-danger">Mua với voucher</button>
            </div>
          </div>
        </div>
      </div>
        </div>
        `
    }
}

hienSP(arrSP);
document.getElementById("m").addEventListener("click", chonSPmk);
document.getElementById("s").addEventListener("click", chonSPsk);

function chonSPmk(){
    var newArray = arrSP.filter(function(bien){return bien.m_s_k == "m"});
    hienSP(newArray);
}
function chonSPsk(){
    var newArray = arrSP.filter(function(bien){return bien.m_s_k == "s"});
    hienSP(newArray);
}