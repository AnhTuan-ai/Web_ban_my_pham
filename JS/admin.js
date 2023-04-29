var header = document.getElementById("my-menu");
var btns = header.getElementsByClassName("item-menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


document.getElementById("product").addEventListener("click", product);
function product (){
    var content = document.getElementById('home-content')
    content.innerHTML = '';
    content.innerHTML += `<div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <ul class="nav d-flex justify-content-between">
          <li class="nav-item">DANH SÁCH SẢN PHẨM:</li>
          <li class="nav-item bg-info"><button type="button" class="btn btn-info"><i class="fa fa-plus"></i>Tạo Sản Phẩm</button></li>
        </ul>
      </div>
    </div>
    <div class="row pt-1">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th>Tên Sản Phẩm</th>
              <th>Thương Hiệu</th>
              <th>Loại</th>
              <th>Loại Chi Tiết</th>
              <th>M-S-K</th>
              <th>N-H</th>
              <th>Mô Tả</th>
              <th>Giá</th>
              <th>Hình</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kem dưỡng ẩm <br> Natural Moisturizing Factors</td>
              <td>Ordinary</td>
              <td>Dưỡng</td>
              <td>Kem Dưỡng</td>
              <td>S</td>
              <td>New</td>
              <td>...</td>
              <td>370.000</td>
              <td><img src="../IMG/oginary.jpg" alt="" width="100px" height="100px"></td>
            </tr>
            <tr>
              <td>Kem dưỡng ban đêm trị nám <br> Transino Whitening Repair Cream EX 35g</td>
              <td>Transino</td>
              <td>Dưỡng</td>
              <td>Kem Dưỡng</td>
              <td>M</td>
              <td>Hot</td>
              <td>...</td>
              <td>749.000</td>
              <td><img src="../IMG/Transino-Whitening-Repair-Cream-ex.jpg" alt="" width="100px" height="100px"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>`
}