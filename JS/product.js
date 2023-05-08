//su kien product voi api
//add user
function addUser() {
    var payload = {};
    payload['ten'] = document.getElementById("ten").value;
    payload['thuonghieu'] = document.getElementById("thuonghieu").value;
    payload['loai'] = document.getElementById("loai").value;
    payload['loaichitiet'] = document.getElementById("loaichitiet").value;
    payload['msk'] = document.getElementById("msk").value;
    payload['nh'] = document.getElementById("nh").value;
    payload['mota'] = document.getElementById("mota").value;
    payload['loai'] = document.getElementById("gia").value;
    payload['hinh'] = document.getElementById("hinh").value;
  
    fetch('https://64535c59e9ac46cedf2333fd.mockapi.io/api/users', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(payload)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      document.getElementById("ten").value = "";
      document.getElementById("thuonghieu").value = "";
      document.getElementById("loai").value = "";
      document.getElementById("loaichitiet").value = "";
      document.getElementById("msk").value = "";
      document.getElementById("nh").value = "";
      document.getElementById("mota").value = "";
      document.getElementById("gia").value = "";
      document.getElementById("hinh").value = "";
      getData();
    }).catch(error => {
      // handle error
    })
  
  }
  //edit data
  function editData(id){
    $("#my-modal").modal();
    fetch(`https://64535c59e9ac46cedf2333fd.mockapi.io/api/users/${id}`, {
    method: 'PUT', // or PATCH
    headers: {'content-type':'application/json'},
    body: JSON.stringify({completed: true})
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
      
  }).catch(error => {
    // handle error
  })
  }
  //delete data
  function deleteData(id){
    fetch(`https://64535c59e9ac46cedf2333fd.mockapi.io/api/users/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    getData();
  }).catch(error => {
    // handle error
  })
  }
//getData
  function getData() {
    fetch('https://64535c59e9ac46cedf2333fd.mockapi.io/api/users', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
      console.log(res)
        return res.json();
    }
  }).then(tasks => {
    var tmpData = "";
    tasks.forEach(product => {
      tmpData+="<tr>"
      tmpData+="<td>"+product.ten+"</td>"
      tmpData+="<td>"+product.thuonghieu+"</td>"
      tmpData+="<td>"+product.loai+"</td>"
      tmpData+="<td>"+product.loaichitiet+"</td>"
      tmpData+="<td>"+product.msk+"</td>"
      tmpData+="<td>"+product.nh+"</td>"
      tmpData+="<td>"+product.mota+"</td>"
      tmpData+="<td>"+product.gia+"</td>"
      // <img src="" alt="">
      tmpData+="<td><img src="+product.hinh+"></td>"
      tmpData+="<td><button class='btn-info'onclick='editData(`"+product.id+"`)'>Edit</button></td>"
      tmpData+="<td><button class='btn-danger' onclick='deleteData(`"+product.id+"`)'>Delete</button></td>"
      tmpData+="</tr>"
    });
    document.getElementById("tbData").innerHTML = tmpData;
  }).catch(error => {
    // handle error
  })
  }
  getData();
//xu li form
  $(document).ready(function(){
    var i =1;
    $("#taosanpham").click(function(){
        $("#my-modal").modal()
    })
    //
    var textMa1 = $("#ten")
    var tbMa1 = $("#tbten")
    function ma1(){
        if(textMa1.val() == ""){
            tbMa1.html("Bạn đang để trống dữ liệu này");
            return false;
        }
        tbMa1.html("*");
        return true;
    }
    textMa1.blur(ma1);
    var textMa2 = $("#thuonghieu")
    var tbMa2 = $("#tbthuonghieu")
    function ma2(){
        if(textMa2.val() == ""){
            tbMa2.html("Bạn đang để trống dữ liệu này");
            return false;
        }
        tbMa2.html("*");
        return true;
    }
    textMa2.blur(ma2);
    var textMa3 = $("#loai")
    var tbMa3 = $("#tbloai")
    function ma3(){
        if(textMa3.val() == ""){
            tbMa3.html("Bạn đang để trống dữ liệu này");
            return false;
        }
        tbMa3.html("*");
        return true;
    }
    textMa3.blur(ma3);
    var textMa4 = $("#loaichitiet")
    var tbMa4 = $("#tbloaichitiet")
    function ma4(){
        if(textMa4.val() == ""){
            tbMa4.html("Bạn đang để trống dữ liệu này");
            return false;
        }
        tbMa4.html("*");
        return true;
    }
    textMa4.blur(ma4);
    var textMa5 = $("#msk")
    var tbMa5 = $("#tbmsk")
    function ma5(){
        var re = /^[MSK]$/;
        if(textMa5.val() == ""){
            tbMa5.html("Bạn đang để trống dữ liệu này");
            return false;
        }
        if(!re.test(textMa5.val())){
            tbMa5.html("Nhập M(makeup) hoặc S(skincare) hoặc K(khac)!");
            return false;
        }
        tbMa5.html("*");
        return true;
    }
    textMa5.blur(ma5);
    var textMa6 = $("#nh")
    var tbMa6 = $("#tbnh")
    function ma6(){
        var re = /^[NH]$/;
        if(textMa6.val() == ""){
            tbMa6.html("Bạn đang để trống dữ liệu này");
            return false;
        }
        if(!re.test(textMa6.val())){
            tbMa6.html("Nhập N(New) hoặc H(Hot)!");
            return false;
        }
        tbMa6.html("*");
        return true;
    }
    textMa6.blur(ma6);
    var textMa7 = $("#mota")
    var tbMa7 = $("#tbmota")
    function ma7(){
        if(textMa7.val() == ""){
            tbMa7.html("Bạn đang để trống dữ liệu này");
            return false;
        }
        tbMa7.html("*");
        return true;
    }
    textMa7.blur(ma7);
    var textMa8 = $("#gia")
    var tbMa8 = $("#tbgia")
    function ma8(){
        if(textMa8.val() == ""){
            tbMa8.html("Bạn đang để trống dữ liệu này");
            return false;
        }
        if(textMa8.val() << 0 ){
          tbMa8.html("Giá là số lớn hơn 0");
        }
        tbMa8.html("*");
        return true;
    }
    textMa8.blur(ma8);
})