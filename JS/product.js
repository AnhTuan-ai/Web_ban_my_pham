//su kien product voi api
//add user
function addUser() {
    var payload = {};
    payload['name'] = document.getElementById("name").value;
    payload['password'] = document.getElementById("password").value;
    payload['img'] = document.getElementById("img").value;
  
  
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
      document.getElementById("name").value = "";
      document.getElementById("password").value = "";
      document.getElementById("img").value = "";
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
      tmpData+="<td>"+product.hinh+"</td>"
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