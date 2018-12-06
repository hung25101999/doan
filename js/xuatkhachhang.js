// JavaScript Document
function hienthitaikhoan()
{
	if(localStorage.taikhoanhientai)
	{
		var s = '<div  style="float:left; padding:40px 3%;width:25%; position:static;color:red;text-align:center;"><strong style="font-size:25px;">'+localStorage.taikhoanhientai+'</strong></div>'+
           ' <div style="float:left; padding:40px 3%;width:28%;"><a href="#" onclick="xoahienthitaikhoan();"><strong>Đăng Xuất</strong></a></div>';
		   document.getElementById('hienthidangnhap').innerHTML = s;
	}

}
function xoahienthitaikhoan()
{
	var s ='<div style="float:left; padding:20px 3%;width:25%; position:static;"><a href="dangky.html"><img src="images/Dangkivadangnhap.png"/><strong>Đăng Kí</strong></a></div><div style="float:left; padding:20px 3%;width:28%;"><a href="dangnhap.html"><img src="images/Dangkivadangnhap.png"/><strong>Đăng Nhập</strong></a></div>'
            
	document.getElementById("hienthidangnhap").innerHTML = s;
	localStorage.removeItem('taikhoanhientai');
	localStorage.removeItem('matkhauhientai');
            
}
