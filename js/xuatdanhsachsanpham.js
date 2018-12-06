function theloai(matheloai,tentheloai)
{
	this.matheloai=matheloai;
	this.tentheloai=tentheloai;
}
var tl=new Array();
tl[0]=new theloai("AS","ASUS");
tl[1]=new theloai("MSI","MSI");
tl[2]=new theloai("DELL","DELL");
tl[3]=new theloai("HP","HP");
tl[4]=new theloai("MK","Macbook");
tl[5]=new theloai("LNV","LENOVO");
tl[6]=new theloai("AC","ACER");
//tạo bảng thêm thể loại 
function taobangtheloai()
			{

				var s='<table style="text-align:center">';
				s+='<tr><th>Mã thể loại</th><th>Tên thể loại</th><th><input type="button" value="+" onclick="themtheloaimoi()"/></th></tr>';
				for(var i=0;i<tl.length;i++)
				{	
					s=s+'<tr>'+'<td>'+tl[i].matheloai+'</td>'+'<td>'+tl[i].tentheloai+'</td>'+'</tr>';
				
				}
				
				s+='</table>';
				//alert(s);
				document.getElementById("taotheloai").innerHTML=s;
			}//menu
//tạo bảng xóa  sản phẩm  trong admin
function xoasanpham()
			{
				var s = '<table style="text-align:center">';
				s+='<tr><th>Mã sản phẩm</th><th>Tên sản phẩm</th><th>Đơn giá</th><th>Hình ảnh</th><th>Mã thể loại</th></tr>';
				for(var i = 0 ; i < sp.length ; i++)
				{
					s+='<tr>'+'<td>'+sp[i].masp+'</td>'+'<td>'+sp[i].tensp+'</td>'+'<td>'+sp[i].gia+'</td>'+'<td><img width="300px" height="300px" src="../'+sp[i].hinh+
					'"</td>'+'<td>'+sp[i].matheloai+'</td>'+'<td><button onclick="thongbaotruockhixoa()">-</button></td>'+'</tr>';
				}
				s+='</table>';
				document.getElementById("taotheloai").innerHTML=s;
			}

//tạo bảng thêm sản phẩm trong admin			
function themsanpham()
			{
				var s = '<table style="text-align:center">';
				s+='<tr><th>Mã sản phẩm</th><th>Tên sản phẩm</th><th>Đơn giá</th><th>Hình ảnh</th><th>Mã thể loại</th><th><input type="button" value="+" onclick="themsanphammoi()"/></th></tr>';
				for(var i = 0 ; i < sp.length ; i++)
				{
					s+='<tr>'+'<td>'+sp[i].masp+'</td>'+'<td>'+sp[i].tensp+'</td>'+'<td>'+sp[i].gia+'</td>'+'<td><img width="300px" height="300px "src="../'+sp[i].hinh+
					'"></td>'+'<td>'+sp[i].matheloai+'</td>'+'</tr>';
				}
				
				s+='</table>';
				document.getElementById("taotheloai").innerHTML=s;
			}
			
function xoatheloai()
			{

				var s='<table style="text-align:center">';
				s+='<tr>'+'<th>Mã thể loại</th>'+'<th>Tên thể loại</th>'+'<th>Xóa</th>'+'</tr>';
				for(var i=0;i<tl.length;i++)
				{	
					s=s+'<tr>'+'<td>'+tl[i].matheloai+'</td>'+'<td>'+tl[i].tentheloai+'</td>'+'<td><button onclick="thongbaotruockhixoa()">-</button></td>'+'</tr>';
				
				}
				s+='</table>';
				//alert(s);
			document.getElementById("taotheloai").innerHTML=s;
			}//menu

function sanpham(masp, tensp, gia,dongia,hinh,matheloai) {
  this.masp = masp;
  this.tensp = tensp;
  this.gia = gia;
  this.dongia=dongia;
  this.hinh=hinh;
  this.matheloai=matheloai;
}

var sp=new Array();
sp[0]= new sanpham("SP001","Laptop Asus S410UA-EB003T","15.190.000",15190000,"images/ASUS/0.jpg","AS");
sp[1]= new sanpham("SP002","Laptop Asus UX490UA-BE009TS","41.990.000",41990000,"images/ASUS/1.jpg","AS");
sp[2]= new sanpham("SP003","Laptop MacBook 15 MPTT2","70.300.000",70300000,"images/MK/0.jpg","MK");
sp[3]= new sanpham("SP004","Laptop Asus UX461UA-E1126T","30.490.000",30490000,"images/ASUS/2.jpg","AS");
sp[4]= new sanpham("SP005","Laptop Asus UX391UA-EG030T","39.990.000",39990000,"images/ASUS/3.jpg","AS");
sp[5]= new sanpham("SP006","Laptop Asus FX503VM-E4087T","26.990.000",26990000,"images/ASUS/4.jpg","AS");
sp[6]= new sanpham("SP007","Laptop Asus UX430UN-GV097T","27.290.000",27290000,"images/ASUS/5.jpg","AS");
sp[7]= new sanpham("SP008","Laptop Asus UX331UAL-EG020TS","27.490.000",27490000,"images/ASUS/6.jpg","AS");
sp[8]= new sanpham("SP009","Laptop Asus UX461UA-E1127T","25.990.000",25990000,"images/ASUS/7.jpg","AS");
sp[9]= new sanpham("SP010","Laptop Asus UX430UA-GV428T","23.490.000",23490000,"images/ASUS/8.jpg","AS");
sp[10]= new sanpham("SP011","Laptop Asus UX430UN-GV081T", "22.290.000",22290000,"images/ASUS/9.jpg","AS");
sp[11]= new sanpham("SP012","Laptop Asus S530UN-BQ255T","17.990.000",17990000,"images/ASUS/10.jpg","AS");
sp[12]= new sanpham("SP013","Laptop Asus TP412UA-EC070T","16.890.000",16890000,"images/ASUS/11.jpg","AS");
sp[13]= new sanpham("SP014","Laptop Asus X407UB-BV147T","16.690.000",16690000,"images/ASUS/12.jpg","AS");
sp[14]= new sanpham("SP015","Laptop Asus X542UQ-GO242T","16.390.000",16390000,"images/ASUS/13.jpg","AS");
sp[15]= new sanpham("SP016","Laptop Asus S510UQ-BQ475T","16.290.000",16290000,"images/ASUS/14.jpg","AS");
sp[16]= new sanpham("SP017","Laptop Asus S410UA-EB015T ","16.190.000",16190000,"images/ASUS/15.jpg","AS");
sp[17]= new sanpham("SP018","Laptop Asus A510UN-EJ463T","15.790.000",15790000,"images/ASUS/16.jpg","AS");
sp[18]= new sanpham("SP019","Laptop Asus S430UA-EB099T","15.390.000",15390000, "images/ASUS/17.jpg","AS");
sp[19]= new sanpham("SP020","Laptop MSI PS42 8M-288VN","21.284.000",21284000,"images/MSI/0.jpg","MSI");
sp[20]= new sanpham("SP021","Laptop MSI GT83 8RG-037VN","144.900.000",144900000,"images/MSI/1.jpg","MSI");
sp[21]= new sanpham("SP022","Laptop MSI GT75 8RG-252VN","104.590.000",104590000,"images/MSI/2.jpg","MSI");
sp[22]= new sanpham("SP023","Laptop MSI GT75 8RF-231VN","79.990.000",79990000,"images/MSI/3.jpg","MSI");
sp[23]= new sanpham("SP024","Laptop MSI P65 8RF-488VN","62.990.000",62990000,"images/MSI/4.jpg","MSI");
sp[24]= new sanpham("SP025","Laptop MSI GE73 8RF-428VN","53.990.000",53990000,"images/MSI/5.jpg","MSI");
sp[25]= new sanpham("SP026","Laptop MSI GS65 8RE-242VN","49.990.000",49990000,"images/MSI/6.jpg","MSI");
sp[26]= new sanpham("SP027","Laptop MSI GP73 8RE-429VN","37.990.000",37990000,"images/MSI/7.jpg","MSI");
sp[27]= new sanpham("SP028","Laptop MSI GP63 8RE-411VN","36.590.000",36590000,"images/MSI/8.jpg","MSI");
sp[28]= new sanpham("SP029","Laptop MSI GP63 8RD-434VN","32.990.000",32990000,"images/MSI/9.jpg","MSI");
sp[29]= new sanpham("SP030","Laptop MSI PS42 8RB-490VN","26.990.000",26990000,"images/MSI/10.jpg","MSI");
sp[30]= new sanpham("SP031","Laptop MSI GL63 8RC-436VN","24.790.000",24790000,"images/MSI/11.jpg","MSI");
sp[31]= new sanpham("SP032","Laptop MSI GV62 7RE-2443XVN","24.690.000",24690000,"images/MSI/12.jpg","MSI");
sp[32]= new sanpham("SP033","Laptop MSI PS42 8RB-234VN","24.490.000",24490000,"images/MSI/13.jpg","MSI");
sp[33]= new sanpham("SP034","Laptop MSI GF63 8RD-242VN","22.990.000",22990000,"images/MSI/14.jpg","MSI");
sp[34]= new sanpham("SP035","Laptop MSI GF63 8RC-243VN","21.670.000",21670000,"images/MSI/15.jpg","MSI");
sp[35]= new sanpham("SP036","Laptop Dell Inspiron 3476-C4I51121","12.990.000",12990000,"images/DELL/0.jpg","DELL");
sp[36]= new sanpham("SP037","Laptop Dell Inspiron 13 7370-7D61Y2","33.390.000",33390000,"images/DELL/1.jpg","DELL");
sp[37]= new sanpham("SP038","Laptop Dell Inspiron 7588-N7588A","33.390.000",33390000,"images/DELL/2.jpg","DELL");
sp[38]= new sanpham("SP039","Laptop Dell Inspiron 15 7570-782P82","26.290.000",26290000,"images/DELL/3.jpg","DELL");
sp[39]= new sanpham("SP040","Laptop Dell Inspiron 13 5379-C3TI7501W","23.290.000",23290000,"images/DELL/4.jpg","DELL");
sp[40]= new sanpham("SP041","Laptop Dell Inspiron 15 5570-N5570B","23.590.000",23590000,"images/DELL/5.jpg","DELL");
sp[41]= new sanpham("SP042","Laptop Dell Inspiron 5370-F5YX01","20.990.000",20990000,"images/DELL/6.jpg","DELL");
sp[42]= new sanpham("SP043","Laptop Dell Inspiron 13 5379-JYN0N2","20.490.000",20490000,"images/DELL/7.jpg","DELL");
sp[43]= new sanpham("SP044","Laptop Dell Inspiron 15 5370-N5370B","19.190.000",19190000,"images/DELL/8.jpg","DELL");
sp[44]= new sanpham("SP045","Laptop Dell Inspiron 15 5570-M5I5238W","16.990.000",16990000,"images/DELL/9.jpg","DELL");
sp[45]= new sanpham("SP046","Laptop Dell Vostro 5471-VTI5207W","16.790.000",16790000,"images/DELL/10.jpg","DELL");
sp[46]= new sanpham("SP047","Laptop Dell Inspiron 5370-N3I3002W","15.890.000",15890000,"images/DELL/11.jpg","DELL");
sp[47]= new sanpham("SP048","Laptop Dell Inspiron 5370-N3I3002W","15.890.000",15890000,"images/DELL/12.jpg","DELL");
sp[48]= new sanpham("SP049","Laptop Dell Vostro 15-3578","14.990.000",14990000,"images/DELL/13.jpg","DELL");
sp[49]= new sanpham("SP050","Laptop Dell Inspiron 5370-N3I3001W","14.990.000",14990000,"images/DELL/14.jpg","DELL");
sp[50]= new sanpham("SP051","Laptop Dell Vostro 3478-R3M961","14.990.000",14990000,"images/DELL/15.jpg","DELL");
sp[51]= new sanpham("SP052","Laptop Dell Vostro 5568-077M512","14.590.000",14590000,"images/DELL/16.jpg","DELL");
sp[52]= new sanpham("SP053","Laptop Dell Vostro 15-3578","14.290.000",14290000,"images/DELL/17.jpg","DELL");
sp[53]= new sanpham("SP054","Laptop Dell Vostro 3468","13.390.000",13390000,"images/DELL/18.jpg","DELL");
sp[54]= new sanpham("SP055","Laptop HP Pavilion 15-CS0101TX","15.390.000",15390000,"images/HP/0.jpg","HP");
sp[55]= new sanpham("SP056","Laptop HP EliteBook 1030 G3","46.990.000",46990000,"images/HP/1.jpg","HP");
sp[56]= new sanpham("SP057","Laptop HP EliteBook X2 1013 G3","42.990.000",42990000,"images/HP/2.jpg","HP");
sp[57]= new sanpham("SP058","Laptop HP Spectre X360 13-AE516TU","39.990.000",39990000,"images/HP/3.jpg","HP");
sp[58]= new sanpham("SP059","Laptop HP Spectre 13-AF511TU","38.490.000",38490000,"images/HP/4.jpg","HP");
sp[59]= new sanpham("SP060","Laptop HP Envy 13-AH0027TU","26.290.000",26290000,"images/HP/5.jpg","HP");
sp[60]= new sanpham("SP061","Laptop HP Pavilion Gaming 15-CX0179TX","24.490.000",24490000,"images/HP/6.jpg","HP");
sp[61]= new sanpham("SP062","Laptop HP Pavilion 15-CB541TX","22.990.000",22990000,"images/HP/7.jpg","HP");
sp[62]= new sanpham("SP063","Laptop HP Probook 430 G5-2XR79PA","20.990.000",20990000,"images/HP/8.jpg","HP");
sp[63]= new sanpham("SP064","Laptop HP Envy 13-AH0025TU","20.290.000",20290000,"images/HP/9.jpg","HP");
sp[64]= new sanpham("SP065","Laptop HP Pavilion 15-CC058TX","18.490.000",18490000,"images/HP/10.jpg","HP");
sp[65]= new sanpham("SP066","Laptop HP Pavilion X360 14-BA120TU","17.490.000",17490000,"images/HP/11.jpg","HP");
sp[66]= new sanpham("SP067","Laptop HP Envy 13-AD138TU","17.390.000",17390000,"images/HP/12.jpg","HP");
sp[67]= new sanpham("SP068","Laptop HP Pavilion X360 14-BA129TU","16.990.000",16990000,"images/HP/13.jpg","HP");
sp[68]= new sanpham("SP069","Laptop HP Pavilion X360 14-BA121TU","16.990.000",16990000,"images/HP/14.jpg","HP");
sp[69]= new sanpham("SP070","Laptop HP Envy 13-AD076TU","16.790.000",16790000,"images/HP/15.jpg","HP");
sp[70]= new sanpham("SP071","Laptop HP Probook 430 G5-2XR78PA","16.290.000",16290000,"images/HP/16.jpg","HP");
sp[71]= new sanpham("SP072","Laptop HP Probook 430 G5-2ZD49PA","15.590.000",15590000,"images/HP/17.jpg","HP");
sp[72]= new sanpham("SP073","Laptop Lenovo Ideapad 320-14ISK 80XG0083VN", "9.500.000",9500000,"images/LNV/0.jpg","LNV");
sp[73]= new sanpham("SP074","Laptop Lenovo Ideapad Y520-15IKBN 80WK015GVN", "26.000.000",26000000,"images/LNV/1.jpg","LNV");
sp[74]= new sanpham("SP075","Laptop Lenovo Thinkpad L380-20M5S02E00", "24.990.000",24990000,"images/LNV/2.jpg","LNV");
sp[75]= new sanpham("SP076","Laptop Lenovo Ideapad 720s-13IKB 81BV0062VN", "23.690.000",23690000,"images/LNV/3.jpg","LNV");
sp[76]= new sanpham("SP077","Laptop Lenovo Ideapad Y520-15IKBN 80WK015FVN", "22.999.000",22999000,"images/LNV/4.jpg","LNV");
sp[77]= new sanpham("SP078","Laptop Lenovo Ideapad Y520-15IKBN 80WK0109VN", "22.390.000",22390000,"images/LNV/5.jpg","LNV");
sp[78]= new sanpham("SP079","Laptop Lenovo Ideapad 720s-13IKB 81BV0061VN", "20.590.000",20590000,"images/LNV/6.jpg","LNV");
sp[79]= new sanpham("SP080","Laptop Lenovo Thinkpad L380-20M5S01500", "18.790.000",18790000,"images/LNV/7.jpg","LNV");
sp[80]= new sanpham("SP081","Laptop Lenovo Ideapad 320-15IKB 81BG00E1VN", "16.990.000",16990000,"images/LNV/8.jpg","LNV");
sp[81]= new sanpham("SP082","Laptop Lenovo Ideapad 710S-13IKB 80VQ0095VN", "15.490.000",15490000,"images/LNV/9.jpg","LNV");
sp[82]= new sanpham("SP083","Laptop Lenovo Thinkpad E480-20KN005GVA", "14.690.000",14690000,"images/LNV/10.jpg","LNV");
sp[83]= new sanpham("SP084","Laptop Lenovo Ideapad 520s-14IKB 81BL0086VN", "14.490.000",14490000,"images/LNV/11.jpg","LNV");
sp[84]= new sanpham("SP085","Laptop Lenovo Yoga 520-14IKB-80X80108VN", "14.190.000",14190000,"images/LNV/12.jpg","LNV");
sp[85]= new sanpham("SP086","Laptop Lenovo Yoga 520-14IKB-80X80109VN", "14.050.000",14050000,"images/LNV/13.jpg","LNV");
sp[86]= new sanpham("SP087","Laptop Lenovo Ideapad 320-15IKB 81BG009LVN", "13.690.000",13690000,"images/LNV/14.jpg","LNV");
sp[87]= new sanpham("SP088","Laptop Acer E5-576-50JK","11.390.000",11390000,"images/ACER/0.jpg","AC");
sp[88]= new sanpham("SP089","Laptop Acer Predator Helios 500 PH517-51-90KL","99.990.000",99990000,"images/ACER/1.jpg","AC");
sp[89]= new sanpham("SP090","Laptop Acer Predator Helios 500 PH517-51-71S9","52.999.000",52999000,"images/ACER/2.jpg","AC");
sp[90]= new sanpham("SP091","Laptop Acer Predator Helios 300 G3-572-79S6","31.990.000",31990000,"images/ACER/3.jpg","AC");
sp[91]= new sanpham("SP092","Laptop Acer Swift 5 SF514-52T-87TF","28.499.000",28499000,"images/ACER/4.jpg","AC");
sp[92]= new sanpham("SP093","Laptop Acer Swift 5 SF514-52T-592W","25.690.000",25690000,"images/ACER/5.jpg","AC");
sp[93]= new sanpham("SP094","Laptop Acer Nitro 5 AN515-51-79WJ","24.990.000",24990000,"images/ACER/6.jpg","AC");
sp[94]= new sanpham("SP095","Laptop Acer Nitro 5 AN515-51-739L","23.490.000",23490000,"images/ACER/7.jpg","AC");
sp[95]= new sanpham("SP096","Laptop Acer Nitro AN515-52-51LW","22.999.000",22999000,"images/ACER/8.jpg","AC");
sp[96]= new sanpham("SP097","Laptop Acer Spin 5 SP513-52N-556V","20.999.000",20999000,"images/ACER/9.jpg","AC");
sp[97]= new sanpham("SP098","Laptop Acer A7 A715-71G-57LL","19.490.000",19490000,"images/ACER/10.jpg","AC");
sp[98]= new sanpham("SP099","Laptop Acer Swift SF315-52-50T9","18.399.000",18399000,"images/ACER/11.jpg","AC");
sp[99]= new sanpham("SP100","Laptop Acer E5-576G-82UE","17.990.000",17990000,"images/ACER/12.jpg","AC");
sp[100]= new sanpham("SP101","Laptop Acer E5-576G-87FG","16.990.000",16990000,"images/ACER/13.jpg","AC");
sp[101]= new sanpham("SP102","Laptop Acer E5-575G-73J8","16.490.000",16490000,"images/ACER/14.jpg","AC");
sp[102]= new sanpham("SP103","Laptop Acer Spin 3 SP314-51-57RM","16.489.000",16489000,"images/ACER/15.jpg","AC");
sp[103]= new sanpham("SP104","Laptop Acer Aspire A515-51G-52QJ","14.899.000",14899000,"images/ACER/16.jpg","AC");
sp[104]= new sanpham("SP105","Laptop Acer E5-576G-58R4","14.690.000",14690000,"images/ACER/17.jpg","AC");
sp[105]= new sanpham("SP106","Laptop Acer E5-576-56GY","12.590.000",12590000,"images/ACER/18.jpg","AC");
sp[106]= new sanpham("SP107","Laptop Acer A515-51-37DW","11.799.000",11799000,"images/ACER/19.jpg","AC");
sp[107]= new sanpham("SP108","Laptop MacBook 12 MNYN2","38.300.000",38300000,"images/MK/1.jpg","MK");
sp[108]= new sanpham("SP109","Laptop MacBook 13.3 MPXU2","38.100.000",38100000,"images/MK/2.jpg","MK");
sp[109]= new sanpham("SP110","Laptop MacBook 13.3 MPXT2LL/A","37.200.000",37200000,"images/MK/3.jpg","MK");
sp[110]= new sanpham("SP111","Laptop MacBook 12 MNYL2ZP/A","36.000.000",36000000,"images/MK/4.jpg","MK");
sp[111]= new sanpham("SP112","Laptop MacBook 13.3 MPXR2","33.700.000",33700000,"images/MK/5.jpg","MK");
sp[112]= new sanpham("SP113","Laptop MacBook 13.3 MPXQ2","31.700.000",31700000,"images/MK/6.jpg","MK");
sp[113]= new sanpham("SP114","Laptop MacBook Air MQD42LL/A","328.890.000",328890000,"images/MK/7.jpg","MK");
sp[114]= new sanpham("SP115","Laptop MacBook Air MQD32HN/A","23.890.000",23890000,"images/MK/8.jpg","MK");
//-------------------------------------------------------------------------------------------------------
function cauhinh(masp ,baohanh, thuonghieu, monitor, cpu, ram, graphics, harddisk, congketnoi, bamphim, hedieuhanh, pin, trongluong) {
	this.masp = masp;
	this.baohanh = baohanh;
	this.thuonghieu = thuonghieu;
	this.monitor = monitor;
	this.cpu = cpu;
	this.ram = ram;
	this.graphics= graphics;
	this.harddisk = harddisk;
	this. congketnoi = congketnoi;
	this.bamphim = bamphim;
	this.hedieuhanh = hedieuhanh;
	this.pin = pin;
	this.trongluong = trongluong;
}
var ch = new Array();
ch[0]= new cauhinh("SP001","12 tháng","Asus","14 INCH (1920x1080), Webcam, Finger print","Core i5-8250U (1.6GHz up to 3.4GHz, 6MB Cache)","4GB Onboard DDR4 2400MHz, 1 Slot","Intel UHD Graphics 620, SHARE","1TB 5400rpm, Khe mở rộng: M.2 2280 Sata","2x USB 2.0, USB 3.0, USB-C, HDMI, Bluetooth 4.2","led, không phím số","Windows 10 Home SL 64bit","1.43kg","3 cell","NO LAN, Wifi AC, Reader, 326(W) x 226(D) x 18.8(H) mm");
ch[1]= new cauhinh("SP002","12 tháng","Asus","14 INCH (1920 x 1080), Webcam","Intel Core i7-7500U (2.70 Ghz up to 3.50 Ghz, 4MB Cache)","8GB LPDDR3 (Không nâng cấp được)","Intel HD Graphics 620","SSD M.2 NVMe 512GB","1 x USB Type C, 2 x Thunderbolt","thuong","Win 10 Home","1.17kg","4cell","Wifi AC, Bluetooth 4.2, DVD-RW"); 
ch[3]= new cauhinh("SP004","12 tháng","Asus", "14 INCH (1920 x 1080), Webcam "," Intel Core i7-8550U (1.80 Ghz up to 4.0 Ghz, 8MB Cache)"," 8GB onboard LPDDR3 (Không nâng cấp được)"," Intel UHD Graphics 620","SSD M.2 SATA 512GB ","1 x HDMI, 1 x USB Type C ","bàm phím","Win 10 Home","3 cell ","1.49 Kg "," Wifi AC, LAN 1Gbit, Bluetooth 4.2, Card reader ");
ch[4]= new cauhinh("SP005","12 tháng","Asus", "13,3 INCH, 1920x1080, Webcam","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz ","8GB Onboard, LPDDR3"," Intel UHD Graphics 620","512GB M.2","USB Type C / DisplayPort, 2 x Thunderbolt, Audio combo ","bàm phím","Windows 10 Home SL 64 bit ","4 Cell ","1.0 Kg "," NO LAN, Wifi AC, Reader, 31.1 x 21.3 x 1.29 cm ");
ch[5]= new cauhinh("SP006","12 tháng","Asus", "15.6 INCH (1920 x 1080), Webcam HD "," Intel Core i5-7300HQ (2.50 Ghz up to 3.50 Ghz, 6M Cache)"," 8GB DDR4 2400 MHz (2 slots - max 32GB)"," NVIDIA GeForce GTX 1060 6GB + Intel HD Graphics 630","HDD 1TB 5400rpm ","HDMI, 2x USB 3.0, USB 2.0","Led Keyboard ","Win 10 Home","4 cell ","2.6 Kg "," Wifi AC, LAN 1Gbit, Bluetooth 4.2, Card reader ");
ch[6]= new cauhinh("SP007","12 tháng","Asus", "14 INCH (1920 x 1080), Webcam"," Intel Core i7-8550U (1.8 Ghz up to 4.0 Ghz, 8MB Cache)"," 8GB LPDDR3"," NVIDIA GeForce MX150 2G + Intel UHD Graphics 620","SSD M.2 256GB ","HDMI,, 1x USB 3.0, 1x USB 2.0, 1x USB-Type C ","bàm phím","Win 10 Home","3 cell ","1.28 kg "," Wifi AC, Bluetooth 4.2");
ch[7]= new cauhinh("SP008","12 tháng","Asus", "13 INCH (1920 x 1080), Webcam"," Intel Core i7-8550U (1.80 Ghz up to 4.00 Ghz, 8MB Cache)"," 8GB LPDDR3 (Không nâng cấp)"," Intel UHD Graphics 620","SSD 512GB","HDMI, USB Type-C, 2x USB 3.0","Led Keyboard ","Win 10 Home","3 cell ","0.98 Kg "," Wifi AC, Bluetooth 4.2, Finger print, Card reader ");
ch[8]= new cauhinh("SP009","12 tháng","Asus", "14 INCH, 1920x1080, Touch Screen, Webcam, Finger print ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","8GB Onboard, LPDDR3, 2133MHz "," Intel UHD Graphics 620, SHARE ","512GB M.2 2280","2x USB 3.0, USB-C, HDMI, Bluetooth 4.2","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.48 Kg "," NO LAN, Wifi AC, Reader, 327(W) x 226(D) x 13.9(H) mm ");
ch[9]= new cauhinh("SP010","12 tháng","Asus", "14 INCH (1920 x 1080) "," Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6M Cache)"," 8GB DDR3L 1866 MHz (Không nâng cấp được) "," Intel HD Graphics 620 ","SSD M.2 2280 512GB ","micro HDMI, USB 2.0, USB 3.0, USB Type-C 3.1 Gen1 Port/DP  ","bàm phím","Win 10 Home","3 cell ","1.29 Kg "," Wifi AC, Bluetooth 4.2, Webcam, Card reader  ");
ch[10]= new cauhinh("SP011","12 tháng","Asus", "14 INCH, 1920x1080, Webcam","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","8GB Onboard, LPDDR3"," NVIDIA GeForce MX150 // Intel UHD Graphics 620, 2GB ","256GB M.2","USB 2.0, USB 3.0, USB-C 3.1 Gen 1 port/DP, Micro HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64 bit ","3 Cell ","1.3 Kg "," NO LAN, Wifi AC, Reader, 324(W) x 225(D) x 15.9(H) mm ");
ch[11]= new cauhinh("SP012","12 tháng","Asus", "15.6 INCH, 1920x1080, Webcam HD ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","1x 4GB, DDR4, 2400MHz, 2 Slots "," NVIDIA GeForce MX150// Intel UHD Graphics 620, 2GB ","256GB M.2 2280 Sata, Khe M.2: M.2 2280 Sata ","2x USB 2.0, USB 3.0, USB-C, HDMI, Audio Combo, BT 4.2","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.8 Kg "," NO LAN, Wifi AC, Reader, 361.4(W) x 243.5(D) x 18(H) mm ");
ch[12]= new cauhinh("SP013","12 tháng","Asus", "14 INCH, 1920x1080, Touch Screen, Webcam HD ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","4GB Onboard, DDR4, 2400MHz, 1 Slot "," Intel HD Graphics 620, SHARE ","256GB M.2 2280 (Sata, PCIe)"," USB 3.0, 2x USB 2.0, USB-C, HDMI, Audio Combo, BT 4.2","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.5 Kg "," NO LAN, Wifi AC, Reader, 327(W) x 224.75(D) x 17.6(H) mm ");
ch[13]= new cauhinh("SP014","12 tháng","Asus", "14 INCH (1366 x 768), Webcam"," Intel Core i7-8550U (1.80 Ghz up to 4.0 Ghz, 8MB Cache)"," 4GB DDR4 2400 MHz (2 slots)"," NVIDIA GeForce MX110 2GB + Intel ỤHD Graphics 620","HDD 1TB 5400rpm ","1x HDMI, 1x USB 3.0, 1x USB 2.0","bàm phím","Windows 10 Home SL 64bit ","3 cell ","1.52 Kg "," Wifi n, Bluetooth 4.0, Card reader ");
ch[14]= new cauhinh("SP015","12 tháng","Asus", "15.6 INCH, 1366 x 768, DVD-WR, Webcam","Core I7, 8550U, 1.8 GHz, 8M, Up to: 4 GHz ","1x 4GB, DDR4, 2400MHz, 2 Slots "," NVIDIA GeForce 940MX // Intel HD Graphics 620, 2GB ","1TB 5400rpm Sata3, Khe mở rộng: M2 2280 SATA ","USB 2.0, 2 x USB 3.0, USB-C, D-Sub, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64 bit ","2 Cell ","2.3 Kg ","1 GB, AC, Reader, 380(W) x 251(D) x 23.2~23.2(H) mm ");
ch[15]= new cauhinh("SP016","12 tháng","Asus", "15.6 INCH, 1920x1080, Webcam, Finger print ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz "," NVIDIA GeForce 940MX // Intel UHD Graphics 620, 2GB ","1TB 5400rpm, Khe mở rộng: M.2 2280 Sata ","2x USB 2.0, USB 3.0, USB-C, HDMI, Bluetooth 4.2","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.6 Kg "," NO LAN, Wifi AC, Reader, 362(W) x 245(D) x 17(H) mm ");
ch[16]= new cauhinh("SP017","12 tháng","Asus", "14 INCH, 1920x1080, Webcam, Finger print ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","4GB Onboard, DDR4, 2400MHz "," Intel UHD Graphics 620, SHARE ","1 Slot, 256GB M.2 2280","2x USB 2.0, USB 3.0, USB-C, HDMI, Bluetooth 4.2","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.43 Kg "," NO LAN, Wifi AC, Reader, 326(W) x 226(D) x 18.8(H) mm ");
ch[17]= new cauhinh("SP018","12 tháng","Asus", "15.6 INCH, 1920x1080, Webcam HD ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","1x4GB, DDR4, 2400MHz, 2 Slots "," NVIDIA GeForce MX150 // Intel UHD Graphics 620, 2GB ","1TB 5400rpm, Khe mở rộng: M.2 2280 Sata ","2x USB 2.0, USB 3.0, USB-C, HDMI, Audio Combo, BT 4.2","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.65 Kg "," NO LAN, Wifi AC, 361.4(W) x 243.5(D) x 19.4(H) mm ");
ch[18]= new cauhinh("SP019","12 tháng","Asus",  "14 INCH, 1920x1080, Webcam HD "," Core i5-8250U, 1.6GHz, 6MB, Up to: 3.4GHz ","4GB Onboard, DDR4, 2400MHz, 1 Slot "," Intel UHD Graphics 620, Share"," 1TB 5400rpm, Khe mở rộng: M.2 2280 Sata/PCle ","2x USB 2.0, USB 3.0, USB-C, HDMI, Finger print, Audio Combo, BT 4.1","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.4 Kg "," NO LAN, Wifi AC, Reader, 323(W) x 226(D) x 18(H) mm ");

ch[19]= new cauhinh("SP020","12 tháng","MSI", "14 INCH, 1920x1080, Webcam HD","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","1x8GB, DDR4, 2666MHz, 1 Slot","Intel UHD Graphics 620, Share","256GB M.2 2280 PCIe, Khe mở rộng: M.2 2280 Sata/PCIe","2x USB-C, 2x USB 3.0, HDMI, Bluetooth 4.2","Led Keyboard","Windows 10 Home SL 64bit","4 cell","1.9 kg","LAN: No LAN, Wifi AC, Reader, 322(W) x 222(D) x 15.9(H) mm");
ch[20]= new cauhinh("SP021","12 tháng","MSI", "18.4 INCH, 1920x1080, Webcam HD","CM246, i7 8850H, 2.6GHz, 9M, Up to: 4.3GHz","2x16GB, DDR4, 2666MHz, 4 Slots",": NVIDIA GeForce GTX 1080 SLI, 8GB","1TB + 512GB NBMe PCIe Gen 3","3x USB-A 3.1 Gen 1, 2x USB-A 3.1 Gen 2, USB-C, Mini DisplayPort, HDMI, Bluetooth 5.0","Led Keyboard","Windows 10 Home SL 64bit","8 cell","5.5 kg","LAN: Multi-Gig LAN, Wifi AC, Reader, 458(W) x 339(D) x 42-69(H) mm");
ch[21]= new cauhinh("SP022","12 tháng","MSI", "17.3 INCH, 1920x1080, Webcam HD","CM246, i9 8950HK, 2.9GHz, 12M, Up to: 4.8GHz","2x16GB, DDR4, 2666MHz, 4 Slots","NVIDIA GeForce GTX 1080, 8GB","1TB + 256GB NVMe PCIe Gen 3","5x USB-A 3.1 Gen 2, USB-C, HDMI, Mini DisplayPort, Bluetooth 5.0","Led Keyboard","Windows 10 Home SL 64bit","8 cell","4.56 kg","LAN: Multi-Gig LAN, Wifi AC, Reader, 428(W) x 314(D) x 31-58(H) mm");
ch[22]= new cauhinh("SP023","12 tháng","MSI", "17.3 INCH, 1920x1080, Webcam HD","CM246, i7 8750H, 2.2GHz, 9M, Up to: 4.1GHz","2x16GB, DDR4, 2666MHz, 4 Slots","NVIDIA GeForce GTX 1070, 8GB","1TB + 256GB NBMe PCIe Gen 3","5x USB-A 3.1 Gen 2, USB-C, HDMI, Mini DisplayPort, BT 5.0","Led Keyboard","Windows 10 Home SL 64bit","8 cell","4.56 kg","LAN: Multi-Gig LAN, Wifi AC, Reader, 428(W) x 314(D) x 31-58(H) mm");
ch[23]= new cauhinh("SP024","12 tháng","MSI", "15.6 INCH (1920 x 1080), Webcam","Intel Core i7-8750H (2.20 Ghz up to 4.10 Ghz, 9MB Cache)","16GB DDR4 2666 MHz (2 slots - tối đa 32GB)","GeForce GTX 1070 8GB + Intel UHD Graphics 630","SDD 512GB M.2 2280 NVMe","1x HDMI, 1x Mini DisplayPort, 1x USB Type C(Gen2/DisplayPort/ThunderBolt 3), 2x USB 3.1 (Gen1), 1x USB 3.1 (Gen2","thường","Windows 10 Home SL 64-bits","4 cell","1.88 kg","Wifi AC, LAN 1Gbit, Bluetooth 5.0, FingerPrint");
ch[24]= new cauhinh("SP025","12 tháng","MSI", "17.3 INCH (1920 x 1080), Webcam","Intel Core i7-8750H (2.20 Ghz up to 4.10 Ghz, 9MB Cache)","2x 8GB DDR4 2666 MHz (2 slots)","NVIDIA GeForce GTX 1070 8GB + Intel UHD Graphics 630","HDD 1TB 7200rpm + SSD 256GB. Hỗ trợ khe cắm M.2","HDMI, miniDisplayport, USB Type-C, 3x USB 3.0","thường","Win 10 Home","6 cell","2.89 kg","Wifi AC, LAN 1Gbit, Bluetooth 5.0, Card reader, RGB Keyboard");
ch[25]= new cauhinh("SP026","12 tháng","MSI", "15.6 INCH (1920 x 1080) 144 Hz, Webcam","Intel Core i7-8750H (2.20 Ghz up to 4.10 Ghz, 9MB Cache)","2x 8GB DDR4 2400 MHz (2 slots - tối đa 32GB)","NVIDIA GeForce GTX 1060 6GB + Intel UHD Graphics 630","SSD M.2 NVMe 256GB. Hỗ trợ khe cắm M.2: M.2 NVMe","mini Displayport, HDMI, Thunderbolt 3, 3x USB 3.1","Led Keyboard","Win 10 Home","4 cell","1.88 kg","Wifi AC, LAN 1Gbit, Bluetooth 5.0, Card reader");
ch[26]= new cauhinh("SP027","12 tháng","MSI", "17.3 INCH, 1920x1080, Webcam HD","Core i7, 8750H, 2.2GHz, 9M, Up to: 4.1GHz","1x8GB, DDR4, 2666MHz, 2 Slots","NVIDIA GeForce GTX 1060, 6GB","128GB M.2 + 1TB 7200rpm, Khe mở rộng: 2x M.2 2280 (Sata/PCIe)","USB-C Gen2, 3x USB-A Gen1/Gen2, HDMI, Mini DisplayPort, BT 5.0","Led Keyboard","Windows 10 Home SL 64bit","6 cell","2.67 kg","LAN: 1G, Wifi AC, Reader, 419(W) x 287(D) x 32(H) mm");
ch[27]= new cauhinh("SP028","12 tháng","MSI", "15.6 INCH (1920 x 1080), Webcam","Intel Core i7-8750H (2.20 Ghz up to 4.10 Ghz, 9MB Cache)","2x8GB DDR4 2666 MHz (2 slots)","NVIDIA GeForce GTX 1060 6GB + Intel UHD Graphics 630","HDD 1TB 7200rpm + SSD M.2 PCIe 128GB. Hỗ trợ khe cắm M.2: M.2 PCIe/SATA","HDMI, miniDisplayport, USB Type-C, 3x USB 3.0","Led Keyboard","Win 10 Home","6 cell","2.2 kg","Wifi AC, LAN 1Gbit, Bluetooth 5.0, Card reader");
ch[28]= new cauhinh("SP029","12 tháng","MSI", "15.6 INCH (1920 x 1080), Webcam","Intel Core i7-8750H (2.20 Ghz up to 4.10 Ghz, 9MB Cache)","16GB DDR4 2666 MHz (2 slots - tối đa 32GB)","NVIDIA GeForce GTX 1050 Ti 4GB + Intel UHD Graphics 630","HDD 1TB 7200rpm + SSD M.2 NVMe 128GB. Hỗ trợ khe cắm M.2: M.2 NVMe/SATA","HDMI, miniDisplayport, USB Type-C, 3x USB 3.1","Led Keyboard","Win 10 Home","6 cell","2.2 kg","Wifi AC, LAN 1Gbit, Bluetooth 5.0, Card reader");
ch[29]= new cauhinh("SP030","12 tháng","MSI", "14 INCH (1920 x 1080), HD Webcam","Intel Core i7-8550U (1.8 Ghz up to 4.0 Ghz, 8MB Cache)","8GB DDR4 2666 MHz (1 slots - tối đa 16GB)","NVIDIA GeForce MX150 2GB + Intel UHD Graphics 620","SSD M.2 NVMe 256GB. Hỗ trợ khe cắm M.2: M.2 SSD SATA/NVMe","HDMI, 2x USB Type-C, 2x USB 3.1","thường","Win 10 Home","4 cell","1.19 kg","Wifi AC, Bluetooth 4.2, SD Card reader");
ch[30]= new cauhinh("SP031","12 tháng","MSI", "15.6 INCH (1920 x 1080), Webcam","Intel Core i7-8750H (2.20 Ghz up to 4.10 Ghz, 9MB Cache)","8GB DDR4 2666 MHz (2 slots - tối đa 32GB)","NVIDIA GeForce GTX 1050 4GB + Intel UHD Graphics 630","HDD 1TB 5400rpm + SSD M.2 128GB. Hỗ trợ khe cắm M.2: Có","HDMI, miniDisplayport, USB Type-C, 3x USB 3.0","Led Keyboard","Win 10 Home","6 cell","2.2 kg","Wifi AC, LAN 1Gbit, Bluetooth 5.0, Card reader");
ch[31]= new cauhinh("SP032","12 tháng","MSI", "15.6 INCH, 1920x1080, Webcam","Core i7, 7700HQ, 2.8GHz, 6M, Up to: 3.8GHz","32GB, 1x8GB, DDR4, 2400MHz, 2 Slots","NVIDIA GeForce GTX 1050 Ti // Intel HD Graphics 630, 4GB","1TB 7200rpm, Khe mở rộng: M.2 2280 (Sata, PCIe 3 x4)","USB 2.0, 2x USB 3.0, USB-C, Mini DP, HDMI, Bluetooth 4.2","Led Keyboard","MacOS","6 cell","2.2 kg","LAN: 1G, Wifi AC, Reader, 383 x 260 x 22-29 mm");
ch[32]= new cauhinh("SP033","12 tháng","MSI", "14 INCH, 1920x1080, Webcam HD","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","1x8GB, DDR4, 2666MHz, 1 Slot","NVIDIA GeForce MX150// Intel UHD Graphics 620, 2GB","256GB M.2 2280 PCIe, Khe mở rộng: M.2 2280 Sata/PCIe","2x USB-C, 2x USB 3.0, HDMI, BT 4.2, 4 Cell","Led Keyboard","Windows 10 Home SL 64bit","4 cell","1.19 kg","LAN: No LAN, Wifi AC, Reader, 322(W) x 222(D) x 15.9(H) mm");
ch[33]= new cauhinh("SP034","12 tháng","MSI", "15.6 INCH, 1920x1080, Webcam HD","Core i5, 8300H, 2.3GHz, 8M, Up to: 4.0GHz","1x8GB, DDR4, 2666MHz, 2 Slots","NVIDIA GeForce GTX 1050Ti // Intel UHD Graphics 630, 4GB","1TB 7200rpm, Khe mở rộng: M.2 2280 (Sata, PCIe)","3x USB 3.0, USB-C, HDMI, Audio Combo, Bluetooth 5.0","Led Keyboard","Windows 10 Home SL 64bit","3 cell","1.86 kg","LAN: 1G, Wifi AC, 359(W) x 254(D) x 21.7(H) mm");
ch[34]= new cauhinh("SP035","12 tháng","MSI", "15.6 INCH, 1920x1080, Webcam HD","Core i5, 8300H, 2.3GHz, 8M, Up to: 4.0GHz","1x8GB, DDR4, 2666MHz, 2 Slots","NVIDIA GeForce GTX 1050 // Intel UHD Graphics 630, 4GB","128GB M.2 2280 (Sata, PCIe) + 1TB 5400rpm","3x USB 3.0, USB-C, HDMI, Audio Combo","Led Keyboard","Windows 10 Home SL 64bit","3 cell","1.86 kg","LAN: 1G, Wifi AC, 359(W) x 254(D) x 21.7(H) mm");

ch[35]= new cauhinh("SP036","12 tháng","DELL", " 14 INCH, 1366x768, DVD-RW, Webcam HD ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","1x4GB, DDR4, 2400MHz, 2 Slots, "," Intel UHD Graphics 620, SHARE ","1TB 5400rpm ","USB 2.0, 2x USB 3.0, HDMI, Audio Combo, BT 4.1","bàm phím"," Ubuntu ","4 Cell "," 2.0 Kg "," LAN: 100M, Wifi AC, Reader, 345(W) x 243(D) x 23.35(H) mm ");
ch[36]= new cauhinh("SP037","12 tháng","DELL", "13.3 INCH, 1920x1080, Webcam, Finger print, Led_KB ","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz ","16GB, DDR4, 2400MHz "," Intel UHD Graphics 620, SHARE ","512GB M.2 2280","USB 3.1 Gen1 Type C (Port, DP), 2x USB 3.1 Gen1, HDMI, Bluetooth 4.2","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.5 Kg "," LAN: NO LAN, Wifi AC, Reader, 309.66(W) x 215.7(D) x 15.19(H) mm ");
ch[37]= new cauhinh("SP038","12 tháng","DELL", "15.6 INCH, 1920x1080, Webcam HD, Led_KB ","Core i7, 8750H, 2.2GHz, 9M, Up to: 4.1GHz ","1x8GB, DDR4, 2666MHz, 2 Slots ","NVIDIA GeForce GTX 1050Ti // Intel UHD Graphics 630, 4GB","1TB 5400rpm + 128GB M.2 SATA, Khe mở rộng: M.2 2280 SATA/PCle "," Thunderbolt, 3x USB 3.0, HDMI, Audio Combo, Finger print, BT 5.0","bàm phím","Windows 10 Home SL 64bit ","4 Cell ","2.7 Kg "," LAN: 1G, Wifi AC, Reader, 389(W) x 274.7(D) x 24.95(H) mm ");
ch[38]= new cauhinh("SP039","12 tháng","DELL", "15.6 INCH, 1920x1080, Webcam HD, Led_KB "," Intel Core i7-8550U (1.80 Ghz up to 4.0 Ghz, 8MB Cache)"," 8GB DDR4 2400 MHz (2 slots - tối đa 32GB "," NVIDIA GeForce MX130 4GB + Intel UHD Graphics 620","HDD 1TB 5400rpm + SSD M.2 128GB","HDMI, DVI-D, 3x USB 3.0, 1x USB Type C ","bàm phím","Win 10 Home","3 cell ","1.95 Kg "," Wifi AC, LAN 1Gbit, Bluetooth 4.1, DVD-RW, Card reader ");
ch[39]= new cauhinh("SP040","12 tháng","DELL", "13.3 INCH, 1920x1080, Touch Screen, Webcam, Led_KB ","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz ","1x8GB, DDR4, 2400MHz, 2 Slots "," Intel UHD Graphics 620, SHARE ","1TB 5400rpm ","USB 2.0, 2x USB 3.0, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.68 Kg "," NO LAN, Wifi AC, Reader, 324(W) x 224.7(D) x 19.5(H) mm ");
ch[40]= new cauhinh("SP041","12 tháng","DELL", "15.6 INCH, 1920x1080, DVD-RW, Webcam, Led_KB ","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz ","1x8GB, DDR4, 2400MHz, 2 Slots ","AMD Radeon(R) 530 // Intel UHD Graphics 620, 4GB ","2TB 5400rpm, Khe mở rộng: M.2 2280 (Sata/PCIe 3 x4)"," USB 2.0, 2x USB 3.0, USB 3.1 Gen1 (Type C) port/DisplayPort, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","2.12 Kg "," LAN: 100M, Wifi AC, Reader, 22.70 x 380 x 258 mm ");
ch[41]= new cauhinh("SP042","12 tháng","DELL", "13.3 INCH, 1920x1080, Webcam, Finger print ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","1x4GB, DDR4, 2400MHz, 2 Slots ","AMD Radeon(R) 530 // Intel UHD Graphics 620, 2GB ","256GB M.2 2280","HDMI, 2x USB 3.0 (1x Power Share), USB-C 3.1 Gen1 Port/DP, Bluetooth 4.1","Led_KB ","Windows 10 Home SL 64bit ","3 Cell ","1.42 Kg "," NO LAN, Wifi AC, Reader, 323.9(W) x 219.9(D) x 15.81(H) mm ");
ch[42]= new cauhinh("SP043","12 tháng","DELL", "13.3 INCH, 1920x1080, Webcam"," Intel Core i5-8250U (1.6 Ghz up to 3.4 Ghz, 6MB Cache)"," 4GB DDR4 2400 MHz (2 slots - tối đa 16GB)"," Intel UHD Graphics 620","SSD M.2 SATA 256GB ","HDMI, 2x USB 3.0, USB 2.0","bàm phím"," Win 10","3 cell ","1.62 Kg "," Wifi AC, LAN 1Gb, Bluetooth 4.1, Card reader ");
ch[43]= new cauhinh("SP044","12 tháng","DELL", "13.3 INCH, 1920x1080, Webcam HD ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","1x4GB, DDR4, 2400MHz, 2 Slots "," Intel UHD Graphics 620, Share ","128GB, Khe mở rộng: M.2 2280 (Sata, PCIe)"," 2x USB 3.0, USB-C/ DP, HDMI, Finger print, BT 4.1","Led_KB ","Windows 10 Home SL English 64bit ","3 Cell ","1.4 Kg "," NO LAN, Wifi AC, Reader, 323.9(W) x 219.9(D) x 15.81(H) mm ");
ch[44]= new cauhinh("SP045","12 tháng","DELL", " NO LAN, Wifi AC, Reader, 323.9(W) x 219.9(D) x 15.81(H) mm ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","1x4GB, DDR4, 2400MHz, 2 Slots ","AMD Radeon 530 // Intel UHD Graphics 620, 2GB ","1TB 5400rpm, Khe mở rộng: M.2 2280 (Sata, PCIe 3 x4)"," USB-C 3.1 Gen1 Port/DP, 2x USB 3.1 Gen1, USB 2.0, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","2.33 Kg "," LAN: 100Mbps, Wifi AC, Reader, 380(W) x 258(D) x 22.7(H) mm ");
ch[45]= new cauhinh("SP046","12 tháng","DELL", "14 INCH, 1920x1080, Webcam, Finger print ","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","1x4GB, DDR4, 2400MHz, 2 Slots "," Intel UHD Graphics 620, SHARE ","1TB 5400rpm, Khe mở rộng: M.2 2280 (PCIe 3 x4, Sata)"," 2x USB 3.0, USB-C 3.1 Gen1 Port/DP, HDMI, Bluetooth 4.2","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.66 Kg "," LAN: 1G, Wifi AC, Reader, 343(W) x 240.8(D) x 16.1(H) mm ");
ch[46]= new cauhinh("SP047","12 tháng","DELL", "13.3 INCH, 1920x1080, Webcam HD ","Core i3, 8130U, 2.2GHz, 4M, Up to: 3.4GHz ","1x4GB, DDR4, 2400MHz, 2 Slots "," Intel UHD Graphics 620, SHARE ","128GB M.2 2280","2x USB 3.0, USB-C/DP, HDMI, Audio Combo, BT 4.2 ","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.4 Kg "," NO LAN, Wifi AC, Reader, 323.9(W) x 219.9(D) x 15.81(H) mm ");
ch[47]= new cauhinh("SP048","12 tháng","DELL", "13.3 INCH, 1920x1080, Webcam HD, Led_KB ","Core i3, 8130U, 2.2GHz, 4M, Up to: 3.4GHz ","1x4GB, DDR4, 2400MHz, 2 Slots "," Intel UHD Graphics 620, SHARE ","128GB M.2 2280"," NO LAN, Wifi AC, Reader, 323.9(W) x 219.9(D) x 15.81(H) mm ","2x USB 3.0, USB-C/DP, HDMI, Audio Combo, BT 4.2 ","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.4 Kg "," NO LAN, Wifi AC, Reader, 323.9(W) x 219.9(D) x 15.81(H) mm ");
ch[48]= new cauhinh("SP049","12 tháng","DELL", "15.6 INCH (1920 x 1080), Webcam"," Intel Core i5-8250U (1.60 Ghz up to 3.4 Ghz, 6MB Cache)"," 4GB DDR4 2133 MHz (2 slots - tối đa 16GB)"," Intel UHD Graphics 620","HDD 1TB 5400rpm ","HDMI, 2x USB 3.0, USB 2.0","bàm phím","Win 10 Home","4 cell ","2.3 Kg "," Wifi AC, LAN 1Gbit, Bluetooth 4.1, DVD-RW, Card reader ");
ch[49]= new cauhinh("SP050","12 tháng","DELL", "13.3 INCH, 1920x1080, Webcam, Finger print ","Core i3, 7130U, 2.7GHz, 3M ","1x4GB, DDR4, 2400MHz, 2 Slots "," Intel HD Graphics 620, SHARE ","128GB M.2 2280","2x USB 3.0, USB-C 3.1 Gen1 Port/DP, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64bit","3 Cell ","1.4 Kg "," NO LAN, Wifi AC, Reader, 323.9(W) x 219.9(D) x 15.81(H) mm ");
ch[50]= new cauhinh("SP051","12 tháng","DELL", "14 INCH (1366 x 768), Webcam"," Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6M Cache)"," 4GB DDR4 2400 MHz (2 slots)"," AMD Radeon R5 520 2GB + Intel UHD Graphics 620","HDD 1TB5400rpm ","HDMI, VGA/D-Sub, 2x USB 3.0, USB 2.0","bàm phím"," Linux ","4 cell ","2.29 Kg "," Wifi AC, LAN 1Gbit, Bluetooth 4.1, DVD-RW, Finger print, Card reader ");
ch[51]= new cauhinh("SP052","12 tháng","DELL", "15.6 INCH, 1366x768, NO DVD, Webcam, Finger print 1.0","Core i3, 7100U, 2.4 GHz, 3M, Up to: 2.4 GHz ","4 GB, DDR4, 2133(2400) MHz, 2 Slot "," NVIDIA 940MX // Intel HD Graphic 620, 2GB ","1TB 5400rpm Sata3, Khe mở rộng: M.2 2280","3x USB 3.0, USB 2.0, VGA, HDMI, Bluetooth 4.2","bàm phím","Windows 10 Home SL 64bit ","3 CELL ","1.98 Kg "," LAN: 1G, AC/B/G/N, Reader, 380mm x 252.5mm x 19.2mm ");
ch[52]= new cauhinh("SP053","12 tháng","DELL", "15.6 INCH, 1366x768, NO DVD, Webcam"," Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6MB Cache)"," 4GB DDR4 2400 MHz (2 slots)"," Intel UHD Graphics 620","HDD 1TB 5400rpm ","1x HDMI, 1x VGA/D-Sub, 2x USB 3.0, 1x USB 2.0","bàm phím"," Linux ","4 cell ","2.25 Kg "," LAN 1Gbit, Bluetooth 4.1, DVD-RW, Card reader, FingerPrint ");
ch[53]= new cauhinh("SP054","12 tháng","DELL", "14 INCH, 1366x768, DVD-RW, Webcam, Finger print 1.0","Core i5, 7200U, 2.5 GHz, 3M, Up to: 3.1 GHz ","4 GB, DDR4, 2133(2400) MHz, 2 slots "," Intel HD Graphics 620, Share ","1TB 5400rpm ","USB 3.0, USB 2.0, D-Sub, HDMI, Bluetooth ","bàm phím"," Intel HD Graphics 620, Share ","4Cell ","1.95 Kg "," LAN: 1G, AC, Reader, 345 (W) x 243 (D) x 23.35 (H) mm ");

ch[54]= new cauhinh("SP055","12 tháng","HP", "15.6 INCH (1920 x 1080), Webcam","Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6MB Cache)","4GB DDR4 2666 MHz (2 slots)","NVIDIA GeForce MX 130 2GB + Intel UHD Graphics 620","HDD 1TB 5400rpm. Hỗ trợ khe cắm M.2: M.2 SATA/PCIe","HDMI, USB Type-C, 2x USB 3.0","thường","Win 10 Home","3 cell","1.86 kg","Wifi AC, LAN 1Gbit, Bluetooth 4.2, Card reader");
ch[55]= new cauhinh("SP056","12 tháng","HP", "13 INCH (Màn hình gương), 3000x2000, Touch Screen, Webcam HD","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz","8GB Onboard, LPDDR3, (No upgrade),","Intel UHD Graphics 620, SHARE","256GB PCIe SSD","USB-C/DP, 2x Thunderbolt, Audio Combo, Bluetooth 4.2","Led Keyboard","Windows 10 Pro 64bit","4 cell","1.25 kg","LAN: NO LAN, Wifi AC, 305.8(W) x 205(D) x 15.8(H) mm");
ch[56]= new cauhinh("SP057","12 tháng","HP", "13 INCH 3000x2000, Touch Screen, Webcam 5MP Front +8MP","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","8 GB Onboard, LPDDR3, No Upgrade","Intel UHD Graphics 620, Share","256GB","1x USB-C/ DP/ Data/ Power Delivery, 2x Thunderbolt, BT 4.2","Led Keyboard","Windows 10 Pro 64 bit","4 cell","0.82 kg","LAN: No LAN, Wifi AC, Reader, 300(W) x 231.4(D) x 7.9(H) mm");
ch[57]= new cauhinh("SP058","12 tháng","HP", "13.3 INCH (1920 x 1080), Cảm ứng, Webcam","Intel Core i7-8550U (1.80 Ghz up to 4.00 Ghz, 8MB Cache)","8GB LPDDR3 (Không nâng cấp được)","Intel HD Graphics 620","SSD M.2 256GB. Hỗ trợ khe cắm M.2: Có","2x Thunderbolt, USB Type-C, kèm cáp USB Type-C to HDMI","Led Keyboard","Win 10 Home","3 cell","1.3 kg","Wifi AC, Bluetooth 4.2, Finger print, Card reader");
ch[58]= new cauhinh("SP059","12 tháng","HP", "13.3 INCH (1920 x 1080), Webcam","Intel Core i7-8550U (1.80 Ghz up to 4.0 Ghz, 8MB Cache)","8GB LPDDR3 (Không nâng cấp được)","Intel UHD Graphics 620","SSD M.2 NVMe 256GB. Hỗ trợ khe cắm M.2: M.2 SATA / NVMe","1x USB Type C, 2x Thunderbolt","thường","Win 10 Home","4 cell","1.11 kg","Wifi AC, Bluetooth 4.2");
ch[59]= new cauhinh("SP060","12 tháng","HP", "13.3 INCH (1920 x 1080)","Intel Core i7-8550U (1.80 Ghz up to 4.00 Ghz, 8MB Cache)","8GB LPDDR3 2133 MHz (Không nâng cấp được)","Intel UHD Graphics 620","SSD M.2 256GB. Hỗ trợ khe cắm M.2: Có","CKN","Led Keyboard","Win 10 Home","4 cell","1.29 kg","Wifi AC, Bluetooth 4.2, Finger print, Webcam, Card reader");
ch[60]= new cauhinh("SP061","12 tháng","HP", "15.6 INCH (1920 x 1080), Webcam","Intel Core i5-8300H (2.3 Ghz up to 4.0 Ghz, 8MB Cache)","8GB DDR4 2666 MHz (2 slots - tối đa 16GB)","NVIDIA GeForce GTX 1050 4GB + Intel UHD Graphics 630","HDD 1TB 7200rpm. Hỗ trợ khe cắm M.2: M.2 SATA/PCIe","HDMI, 3x USB 3.0, USB Type C/DisplayPort","thường","Win 10","3 cell","1.27 kg","Wifi AC, LAN 1Gbit, Bluetooth 5.0, Card reader");
ch[61]= new cauhinh("SP062","12 tháng","HP", "15.6 INCH (1920 x 1080), Webcam","Intel Core i5-7300HQ (2.50 Ghz up to 3.50 Ghz, 6MB Cache)","8GB DDR4 2666 MHz (2 slots)",": NVIDIA GeForce GTX 1050 4GB + Intel UHD Graphics 630","HDD 1TB 7200rpm + SSD M.2 128GB. Hỗ trợ khe cắm M.2: M.2 PCIe/SATA","HDMI, USB Type-C/DP, 3x USB 3.0","Led Keyboard","Win 10 Home","4 cell","2.29 kg","Wifi AC, LAN 1Gbit, Bluetooth 4.2, DVD-RW, Card reader");
ch[62]= new cauhinh("SP063","12 tháng","HP", "13.3 INCH 1920x1080, Webcam, Finger print","Core i7, 8550U, 1.8GHz, 6M, Up to: 4GHz","1x8GB, DDR4, 2400MHz, 2 Slots","Intel UHD Graphics 620, SHARE","1TB 5400rpm, Khe mở rộng: M.2 2280 (Sata, PCIe 3 x4)","USB-C 3.1 Gen 1 Port/DisplayPort, 2x USB 3.1 Gen 1, HDMI, D-Sub, Bluetooth 4.1","Led Keyboard","MacOS","3 cell","1.6 kg","LAN: 1G, Wifi AC, Reader, 326(W) x 234(D) x 19.8(H) mm");
ch[63]= new cauhinh("SP064","12 tháng","HP", "13.3 INCH (1920 x 1080)","Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 3MB Cache)","8GB LPDDR3 2133 MHz (Không nâng cấp được)","Intel UHD Graphics 620","SSD M.2 128GB. Hỗ trợ khe cắm M.2: Có","USB Type-C/DP, 2x USB 3.1","Led Keyboard","Win 10 Home","4 cell","1.23 kg","Wifi AC, Bluetooth 4.2, Finger print, Webcam, Card reader");
ch[64]= new cauhinh("SP065","12 tháng","HP", "15.6 INCH (1920 x 1080), Webcam","Intel Core i5-7500U (2.70 Ghz up to 3.50 Ghz, 4MB Cache)","4GB DDR4 2666 MHz (2 slots)","NVIDIA GeForce 940MX 2GB + Intel HD Graphics 620","HDD 1TB 5400rpm. Hỗ trợ khe cắm M.2: Có","HDMI, USB Type-C, 2x USB 3.0","thường","Win 10 Home","3 cell","2.15 kg","Wifi AC, LAN 1Gbit, Bluetooth 4.2, DVD-RW, Card reader");
ch[65]= new cauhinh("SP066","12 tháng","HP", "14 INCH 1920x1080, Touch Screen, Webcam","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","1x4GB, DDR4, 2400MHz, 2 Slots","Intel UHD Graphics 620, SHARE","500GB 5400rpm, Khe mở rộng: M.2 2280 (PCIe 3 x4)","2x USB 3.0, USB-C, HDMI, Bluetooth 4.2","thường","Windows 10 Home SL 64bit","3 cell","1.78 kg","LAN: NO LAN, Wifi AC, Reader, 334.8(W) x 226.9(D) x 19.9(H) mm");
ch[66]= new cauhinh("SP067","12 tháng","HP", "13.3 INCH 1920x1080, Webcam","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","4GB Onboard, LPDDR3","Intel UHD Graphics 620, SHARE","128GB M.2","2x USB-C 3.1 Gen 1 Port/DisplayPort, 2x USB 3.1 Gen 1, Bluetooth 4.2","Led Keyboard","Windows 10 Home SL 64bit","6 cell","1.23 kg","LAN: NO LAN, Wifi AC, Reader, 305.4(W) x 215.6(D) x 13.9(H) mm");
ch[67]= new cauhinh("SP068","12 tháng","HP", "14 INCH (1920 x 1080), Cảm ứng, Webcam","Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6MB Cache)","4GB DDR4 2666 MHz (2 slots)","Intel UHD Graphics 620","HDD 1TB 5400rpm. Hỗ trợ khe cắm M.2: M.2 NVMe/SATA","Win 10 Home","thường","HDH","3 cell","1.76 kg","Wifi AC, LAN 1Gbit, Bluetooth 4.2, Card reader");
ch[68]= new cauhinh("SP069","12 tháng","HP", "14 INCH 1920x1080, Touch Screen, Webcam","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","1x4GB, DDR4, 2400MHz, 2 Slots","Intel UHD Graphics 620, SHARE","500GB 5400rpm, Khe mở rộng: M.2 2280 (PCIe 3 x4)","2x USB 3.0, USB-C, HDMI, Bluetooth 4.2","thường","Windows 10 Home SL 64bit","3 cell","1.78 kg","LAN: NO LAN, Wifi AC, Reader, 334.8(W) x 226.9(D) x 19.9(H) mm");
ch[69]= new cauhinh("SP070","12 tháng","HP", "13 INCH 1920x1080, Webcam","Core i5, 7200U, 2.5GHz, 3M, Up to: 3.1GHz","4GB, LPDDR3, (No upgrade)","Intel HD Graphics 620","128GB M.2, Khe mở rộng: M.2 2280 (Sata, PCIe 3 x4)","USB 3.0, 2x USB-C, USB-C to D-Sub, Bluetooth 4.2","Led Keyboard","Windows 10 Home SL 64bits","4 cell","1.23 kg","LAN: NO LAN, Wifi AC, Reader, 305.4(W) x 215.6(D) x 13.9(H) mm");
ch[70]= new cauhinh("SP071","12 tháng","HP", "13.3 INCH, 1366x768, Webcam, Finger print","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","1x4GB, DDR4, 2400MHz","Intel UHD Graphics 620, SHARE","2 Slots, 256GB M.2","USB-C 3.1 Gen 1 Port/DisplayPort, 2x USB 3.1 Gen 1, HDMI, D-Sub, Bluetooth 4.1","Led Keyboard","MacOS","3 cell","1.5 kg","LAN: 1G, Wifi AC, Reader, 326(W) x 234(D) x 19.8(H) mm");
ch[71]= new cauhinh("SP072","12 tháng","HP", "13.3 INCH, 1366x768, Webcam, Finger print","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","1x4GB, DDR4, 2400MHz, 2 Slots","Intel UHD Graphics 620, SHARE","500GB 7200rpm, Khe mở rộng: M.2 2280 (Sata, PCIe 3 x4)","USB-C 3.1 Gen1 Port/DP, 2x USB 3.0, HDMI, D-Sub, Bluetooth 4.1","Led Keyboard","MacOS","3 cell","1.6 kg","LAN: 1G, Wifi AC, Reader, 326(W) x 234(D) x 19.8(H) mm");

ch[72]= new cauhinh("SP073","12 tháng","Lenovo", "14 INCH, 1366x768, Webcam","Core i3, 6006U, 2.0GHz, 3M","4GB, DDR4, 2133MHz","Intel HD Graphics 520, SHARE","1 Slot, 500GB 5400rpm","USB 2.0, USB-C, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64bit","2 Cell","2.1 kg","LAN: 1G, Wifi AC, Reader, 338.3(W) x 249.9(D) x 22.7(H) mm");
ch[73]= new cauhinh("SP074","12 tháng","Lenovo", "15.6 INCH (1920 x 1080)","Intel Core i7-7700HQ (2.80 Ghz up to 3.80 Ghz, 6M Cache)","8GB DDR4 2400 MHz (2 slots - max 32GB)","NVIDIA GeForce GTX 1050 4GB + Intel HD Graphics 630","HDD 1TB 5400rpm + SSD M.2 128GB","HDMI, USB Type-C/DP, 2x USB 3.0, USB 2.0","Led Keyboard","Win 10 Home","3 cell","2.4 kg","Wifi AC, LAN 1Gbit, Bluetooth 4.2, Webcam HD, Card reader");
ch[74]= new cauhinh("SP075","12 tháng","Lenovo", "13.3 INCH (1920 x 1080), Webcam","Intel Core i7-8550U (1.80 Ghz up to 4.00 Ghz, 8MB Cache)","8GB DDR4 2400 MHz (2 slots)","Intel UHD Graphics 620","SSD M.2 256GB ","HDMI, 2x USB Type-C, 2x USB 3.0","Led Keyboard","Không","3 cell","1.47 kg","Wifi AC, LAN 1Gbit, Bluetooth 4.2, DVD-RW, Card reader");
ch[75]= new cauhinh("SP076","12 tháng","Lenovo", "13.3 INCH, 1920x1080, Webcam, Finger print","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz","8GB Onboard, DDR4, 2400MHz","Intel UHD Graphics 620, SHARE","256GB M.2 2280","2x USB 3.0, USB-C 3.1 (DP + Power Delivery + Thunderbolt), USB-C 3.1 (Power Delivery), Bluetooth 4.2","Led Keyboard","Windows 10 Home SL 64bit","4 Cell","1.11 kg","LAN: NO LAN, Wifi AC, Reader, 305.9(W) x 213.8(D) x 13.6(H) mm");
ch[76]= new cauhinh("SP077","12 tháng","Lenovo", "15.6 INCH, 1920x1080, Webcam","Core i5, 7300HQ, 2.5GHz, 6M, Up to: 3.5GHz","1x8GB, DDR4, 2400MHz, 2 Slots","NVIDIA GeForce GTX 1050// Intel HD Graphics 630, 4GB","128GB M.2 + 1TB 5400rpm","2x USB 3.0, USB 2.0, USB-C 3.1 Gen 1 port/DP, HDMI, Bluetooth 4.2","Led Keyboard","Windows 10 Home SL 64 bit","3 Cell","2.4 kg","LAN: 1G, Wifi AC, Reader, 380(W) x 265(D) x 25.8(H) mm");
ch[77]= new cauhinh("SP078","12 tháng","Lenovo", "15.6 INCH, 1920x1080, Webcam",": Core i7, 7700HQ, 2.8GHz, 6M, Up to: 3.8GHz","1x8GB, DDR4, 2666MHz, 2 Slots","NVIDIA Geforce GTX 1050 // Intel HD Graphics 630, 4GB","128GB M.2 + 1TB 5400rpm","2x USB 3.0, USB 2.0, USB-C Gen1 Port/DP, HDMI, Bluetooth 4.2","Led Keyboard","Windows 10 Home SL 64bit","3 cell","2.4 kg","LAN: 1G, Wifi AC, Reader, 380(W) x 265(D) x 25.8(H) mm");
ch[78]= new cauhinh("SP079","12 tháng","Lenovo", "13.3 INCH, 1920x1080, Webcam, Finger print","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","8GB Onboard, DDR4, 2400MHz","Intel UHD Graphics 620, SHARE","256GB M.2 2280","2x USB 3.0, 2x USB-C 3.1, Bluetooth 4.2","Led Keyboard","Windows 10 Home SL 64bit","4 Cell","1.11 kg","LAN: NO LAN, Wifi AC, Reader, 305.9(W) x 213.8(D) x 13.6(H) mm");
ch[79]= new cauhinh("SP080","12 tháng","Lenovo", "13.3 INCH (1920 x 1080)","Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6M Cache)","4GB DDR4 2400 MHz (2 slots - max 16GB)","Intel HD Graphics 620","SSD M.2 256GB","HDMI, 2x USB Type-C, 2x USB 3.0","Led Keyboard","không","3 cell","1.47 kg","Wifi AC, miniLAN 1Gbit, Bluetooth 4.2, Webcam HD, Card reader");
ch[80]= new cauhinh("SP081","12 tháng","Lenovo", "15.6 INCH, 1920x1080, Webcam","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz","4GB Onboard, DDR4, 2133MHz, 1 Slot","NVIDIA GeForce MX150 // Intel UHD Graphics 620, 2GB","1TB 5400rpm","USB 3.0, USB-C, HDMI, Bluetooth 4.1","thường","Windows 10 Home SL 64bit","2 cell","1.9 kg","LAN: 1G, Wifi AC, Reader, 378(W) x 260(D) x 22.9(H) mm");
ch[81]= new cauhinh("SP082","12 tháng","Lenovo", "13.3 INCH, 1920x1080, Webcam","Core i3, 7100U, 2.4 GHz, 3M","4 GB, LPDDR3, No upgrade","Intel HD Graphics 620, Share","128GB M.2","2x USB 3.0, Micro HDMI, Bluetooth 4.2","Led Keyboard","Windows 10 Home SL 64bits","4 cell","1.2 kg","Wifi AC, Reader, 307(W) x 214(D) x 13.9(H) mm");
ch[82]= new cauhinh("SP083","12 tháng","Lenovo", "14 INCH (1366 x 768)","Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 3M Cache)","4GB DDR4 2400 MHz (2 slots - max 32GB)","Intel HD Graphics 620","HDD 1TB 5400rpm","HDMI, USB Type-C, 2x USB 3.0, USB 2.0","thường","không","3 cell","1.75 kg","Wifi AC, LAN 1Gbit, Bluetooth 4.1, Webcam HD, Card reader");
ch[83]= new cauhinh("SP084","12 tháng","Lenovo", "14 INCH, 1920x1080, Webcam","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","1x4GB, DDR4, 2400MHz, 1 Slot","Intel UHD Graphics 620, SHARE","1TB 5400rpm, Khe mở rộng: M.2 2280 (PCIe 3 x4)","USB 3.0, USB 2.0, USB-C, HDMI, Bluetooth 4.1","Led Keyboard","Windows 10 Home SL 64bit","2 cell","1.53 kg","LAN: NO LAN, Wifi AC, Reader, 327.4(W) x 236.5(D) x 19.3(H) mm");
ch[84]= new cauhinh("SP085","12 tháng","Lenovo", "14 INCH, 1920x1080, Touch Screen, Webcam, Finger print","Core i3, 7130U, 2.7GHz, 3M","1x4GB, DDR4, 2400MHz, 1 Slot","Intel HD Graphics 620, SHARE","256GB SSD, Khe mở rộng: M.2 2280 (PCIe 3 x4)","USB 2.0, USB 3.0, USB-C, HDMI, Bluetooth 4.1","Led Keyboard","Windows 10 Home SL 64bit","2 cell","1.73 kg","LAN: NO LAN, Wifi AC, Reader, 330(W) x 235(D) x 19.9(H) mm");
ch[85]= new cauhinh("SP086","12 tháng","Lenovo", "14 INCH, 1920x1080, Touch Screen, Webcam, Finger print","Core i5, 7200U, 2.5GHz, 3M, Up to: 3.1GHz","1x4GB, DDR4, 2400MHz, 1 Slot","Intel HD Graphics 620, SHARE","1TB 5400rpm, Khe mở rộng: M.2 2280 (PCIe 3 x4)","USB 3.0, USB 2.0, USB-C, HDMI, Bluetooth 4.1","Led Keyboard","Windows 10 Home SL 64bit","2 cell","1.74 kg","LAN: NO LAN, Wifi AC, Reader, 330(W) x 235(D) x 19.9(H) mm");
ch[86]= new cauhinh("SP087","12 tháng","Lenovo", "15.6 INCH, 1920x1080, Webcam","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz","4GB Onboard, DDR4, 2133MHz","NVIDIA GeForce MX150 // Intel UHD Graphics 620, 2GB","1 Slot, 1TB 5400rpm","2x USB 3.0, USB-C, HDMI, Bluetooth 4.1","thường","Windows 10 Home SL 64bit","2 cell","2.61 kg","LAN: 1G, Wifi AC, Reader, 534(W) x 338(D) x 68(H) mm");

ch[87]= new cauhinh("SP088","12 tháng","Acer", "15.6 INCH 1920x1080","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ",": 1x4GB, DDR3L, 1600MHz, 2 Slots "," Intel UHD Graphics 620, SHARE ","1TB 5400rpm, Khe mở rộng: M.2 2280 (Sata, PCIe 3 x4)"," USB 2.0, 2x USB 3.0, USB-C, D-Sub, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64bit ","4 Cell ","2.17 Kg "," LAN: 1G, Wifi AC, Reader, 381.6(W) x 259(D) x 30.2(H) mm ");
ch[88]= new cauhinh("SP089","12 tháng","Acer", "17 INCH, UHD 4K(3480x2160), Webcam HD, Led_KB "," Core i9, 8950HK, 2.9GHz, 12M, Up to: 4.8GHz ","2x16GB, DDR4, 2666MHz, 2 Slots "," NVIDIA GeForce GTX 1070, 8GB "," 256GB M.2 2280 (PCIe) + 2TB 5400rpm "," LAN: 1G, Wifi AC, Reader, 428(W) x 298(D) x 38.7(H) mm 3x USB 3.0, 2x USB Type-C, HDMI, Displayport, Audio Combo, BT 5.0","bàm phím","Windows 10 Home SL 64bit ","4 Cell ","3.6 Kg"," LAN: 1G, Wifi AC, Reader, 428(W) x 298(D) x 38.7(H) mm ");
ch[89]= new cauhinh("SP090","12 tháng","Acer", "17.3 INCH, 1920x1080, Webcam HD, Led_KB ","Core i7, 8750H, 2.2GHz, 9M, Up to: 4.1GHz ","2x16GB, DDR4, 2666MHz, 2 Slots "," NVIDIA GeFore GTX 1070, 8GB ","256GB M.2 2280 (PCIe)","3x USB 3.0, 2x USB Type-C, HDMI, Displayport, Audio Combo, BT 5.0","bàm phím"," Linux","4 Cell ","3.6 Kg "," LAN: 1G, Wifi AC, Reader, 428(W) x 298(D) x 38.7(H) mm ");
ch[90]= new cauhinh("SP091","12 tháng","Acer", "15.6 INCH, 1920x1080, Webcam, Led_KB ","Core i7, 7700HQ, 2.8GHz, 6M, Up to: 3.8GHz ","1x8GB, DDR4, 2666MHz, 2 Slots "," NVIDIA GeForce GTX 1060 // Intel HD Graphics 630, 6GB ","128GB M.2 + 1TB 5400rpm "," 2x USB 2.0, USB 3.0, USB-C, HDMI, Bluetooth 4.2","bàm phím"," Linux ","4 Cell ","2.57 Kg"," LAN: 1G, Wifi AC, Reader, 390(W) x 266(D) x 26.75(H) mm ");
ch[91]= new cauhinh("SP092","12 tháng","Acer", "14 INCH, 1920x1080, Touch Screen, Webcam, Finger print, Led_KB ","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz ","8GB Onboard, LPDDR3, 1866MHz "," Intel UHD Graphics 620, SHARE ","256GB M.2 2280"," 2x USB 3.0, USB-C 3.1 Gen1 (Port/DP), HDMI, Bluetooth 4.2","bàm phím","Windows 10 Home SL 64bit ","2 Cell ","0.94 Kg "," LAN: NO LAN, Wifi AC, 327(W) x 228(D) x 14.58(H) mm ");
ch[92]= new cauhinh("SP093","12 tháng","Acer", "14 INCH (1920 x 1080), Cảm ứng "," Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 3MB Cache)"," 8GB LPDDR3 1866 MHz (Không nâng cấp được)"," Intel UHD Graphics 620","SSD M.2 256GB ","HDMI, USB Type-C/DP, 2x USB 3.0 ","bàm phím","Win 10 Home","2 cell ","0.94 Kg "," Wifi AC, Bluetooth 4.2, Finger print ");
ch[93]= new cauhinh("SP094","12 tháng","Acer", "15.6 INCH, 1920x1080, Webcam, Led_KB ","Core i7, 7700HQ, 2.8GHz, 6M, Up to: 3.8GHz","1x8GB, DDR4, 2133MHz, 2 Slots ","NVIDIA Force GTX 1050Ti // Intel HD Graphics 630, 4GB","128GB M.2 2280 + 1TB 5400rpm "," 2x USB 2.0, USB 3.0, USB-C, HDMI, Bluetooth 4.1","bàm phím"," Linux","4 Cell ","3.85 Kg "," LAN: 1G, Wifi AC, Reader, 550(W) x 320(D) x 75(H) mm ");
ch[94]= new cauhinh("SP095","12 tháng","Acer", "15.6 INCH, 1920x1080, Webcam, Led_KB ","Core i7, 7700HQ, 2.8GHz, 6M, Up to: 3.8GHz ","1x8GB, DDR4, 2133(2400) MHz, 2 Slots ","NVIDIA GTX 1050 // Intel HD Graphics 630, 2GB","1TB 5400rpm, Khe mở rộng: M.2 2280 (PCIe Gen3 x4, Sata)"," USB 3.0, 2x USB 2.0, USB-C, Bluetooth 4.2","bàm phím","Windows 10 Home SL 64bits ","4 Cell ","2.45 Kg "," LAN: 1G, Wifi AC, Reader, 390(W) x 266(D) x 26.75(H) mm ");
ch[95]= new cauhinh("SP096","12 tháng","Acer", "15.6 INCH, 1920x1080, Webcam HD, Led_KB ","Core i5, 8300H, 2.3GHz, 8M, Up to: 4.0GHz ","1x8GB, DDR4, 2666MHz, 2 Slots "," NVIDIA GeForce GTX 1050Ti // Intel UHD Graphics 630, 4GB GDDR5","128GB M.2 2280 + 1TB 5400rpm, Khe mở rộng: M.2 2280 (Sata/PCIe)"," 2x USB 2.0, USB 3.0, USB-C, HDMI, Audio Combo, BT 5.0","bàm phím"," Linux ","4 Cell ","2.45 Kg "," LAN: 1G, Wifi AC, Reader, 390(W) x 226(D) x 26.75(H) mm ");
ch[96]= new cauhinh("SP097","12 tháng","Acer", "13.3 INCH (1920 x 1080) - Cảm ứng "," Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6M Cache)"," 8GB DDR4 2400 MHz (Không nâng cấp được)"," Intel HD Graphics 620","SSD M.2 256GB ","HDMI, USB Type-C/DP, 2x USB 3.0, USB 2.0","LedKeyboard ","Win 10 Home","3 cell ","1.54 Kg "," Wifi AC, NO LAN, Bluetooth 4.1, Finger print, Webcam HD, Card reader ");
ch[97]= new cauhinh("SP098","12 tháng","Acer", "15.6 INCH, 1920x1080, Webcam, Finger print, Led_KB ","Core i5, 7300HQ, 2.5GHz, 6M, Up to: 3.5GHz ","1x8GB, DDR4, 2133MHz, 2 Slots ","NVIDIA GeForce GTX 1050 // Intel HD Graphics 630, 2GB","1TB 5400rpm, Khe mở rộng: M.2 2280 (PCIe Gen3 x4, Sata)"," 2x USB 2.0, USB 3.0, USB-C, HDMI, Bluetooth 4.2","bàm phím","Windows 10 Home SL 64bit ",": 4 Cell ","2.37 Kg "," LAN: 1GB, Wifi AC, Reader, 381.6(W) x 262.8(D) x 23.95(H) mm ");
ch[98]= new cauhinh("SP099","12 tháng","Acer", "15.6 INCH (1920 x 1080), Webcam"," Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6MB Cache)"," 8GB DDR4 2666 MHz (2 slots)"," Intel UHD Graphics 620","SSD 256GB ","HDMI, USB Type-C, 2x USB 3.0, USB 2.0","Led Keyboard ","Win 10 Home","4 cell ","1.7 Kg "," Wifi AC, LAN 1Gbit, Bluetooth 4.2, Finger print Card reader ");
ch[99]= new cauhinh("SP100","12 tháng","Acer", "15.6 INCH, 1920x1080, DVD-RW, Webcam","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz ","1x4GB, DDR3L, 1600MHz, 2 Slots "," NVIDIA GeForce MX150 // Intel UHD Graphics 620, 2GB","1TB 5400rpm, Khe mở rộng: M.2 2280 (Sata, PCIe 3 x4)"," USB 2.0, 2x USB 3.0, USB-C, D-Sub, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64bit ","4 Cell ",": 2.17 Kg "," LAN: 1G, Wifi AC, Reader, 381.6(W) x 259(D) x 30.2(H) mm ");
ch[100]= new cauhinh("SP101","12 tháng","Acer", "15.6 INCH, 1920x1080, DVD-RW, Webcam","Core i7, 8550U, 1.8GHz, 8M, Up to: 4.0GHz ","1x4GB, DDR3L, 1600MHz, 2 Slots "," NVIDIA GeForce MX 150 // Intel UHD Graphics 620, 2GB ","1TB 5400rpm, Khe mở rộng: M.2 2280 (Sata, PCIe Gen3 x4)"," 2x USB 3.0, USB 2.0, USB-C, D-Sub, HDMI, Bluetooth 4.2","bàm phím"," Linux ","4 Cell ","2.19 Kg "," LAN: 1G, Wifi AC, Reader, 381.6(W) x 259(D) x 30.2(H) mm ");
ch[101]= new cauhinh("SP102","12 tháng","Acer", "15.6 INCH (1920 x 1080)"," Intel Core i7-7500U (2.70 GHz up to 3.50 GHz, 4M Cache,)"," 4GB DDR4 2133 MHz (2 slots - max 16GB)"," Intel HD Graphics 620 + NVIDIA GeForce 940MX 2GB ","HDD 500GB 5400rpm ","D-Sub, HDMI, 2x USB 3.0, USB 2.0, USB Type-C","bàm phím","Win 10 Home","4 cell ","2.23 Kg "," Wifi AC, LAN 1Gbit, Bluetooth 4.1, DVD-RW, Webcam HD, Card reader ");
ch[102]= new cauhinh("SP103","12 tháng","Acer", "14 INCH, 1920x1080, Touch Screen, Webcam","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","4GB Onboard, DDR4, 2400MHz "," Intel UHD Graphics 620, SHARE ","1TB 5400rpm, Khe mở rộng: M.2 2280 (Sata/PCIe 3 x4)"," USB 2.0, 2x USB 3.0, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64bit ","3 Cell ","1.72 Kg "," LAN: NO LAN, Wifi AC, Reader, 335(W) x 230(D) x 20.8(H) mm ");
ch[103]= new cauhinh("SP104","12 tháng","Acer", "15.6 INCH (1920 x 1080), Webcam"," Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6MB Cache)"," 4GB Onboard DDR4 2400 MHz (1 slot trống)"," NVIDIA GeForce MX150 2GB + Intel UHD Graphics 620","HDD 1TB 5400rpm ","HDMI, USB Type-C, USB 3.0, 2x USB 2.0","bàm phím","HDH","4 cell ","2.2 Kg "," Wifi AC, LAN 1Gbit, Bluetooth 4.1, Card reader ");
ch[104]= new cauhinh("SP105","12 tháng","Acer", "15.6 INCH (1920 x 1080), Webcam"," Intel Core i5-8250U (1.60 Ghz up to 3.40 Ghz, 6M Cache)"," 4GB DDR3L 1600 MHz (2 slots - max 16GB)"," NVIDIA GeForce MX130 2GB + Intel HD Graphics 620","HDD 1TB 5400rpm ","HDMI, VGA/D-Sub, USB Type-C, 2x USB 3.0, USB 2.0","bàm phím","Win 10 Home","4 cell ","2.22 Kg "," Wifi AC, LAN 1Gbit, Bluetooth 4.2, DVD-RW, Webcam HD, Card reader ");
ch[105]= new cauhinh("SP106","12 tháng","Acer", "15.6 INCH, 1920x1080, DVD-RW, Webcam","Core i5, 8250U, 1.6GHz, 6M, Up to: 3.4GHz ","1x4GB, DDR3L, 1600MHz, 2 Slots "," Intel UHD Graphics 620, SHARE ","1TB 5400rpm, Khe mở rộng: M.2 2280 (Sata, PCIe 3 x4)"," 2x USB 3.0, USB 2.0, USB-C, HDMI, Bluetooth 4.0","bàm phím"," Linux","4 Cell ","2.19 Kg "," LAN: 1G, Wifi AC, Reader, 381.6(W) x 259(D) x 30.2(H) mm ");
ch[106]= new cauhinh("SP107","12 tháng","Acer", "15.6 INCH, 1920x1080, Webcam","Core i3, 7130U, 2.7GHz, 3M ","4GB Onboard, DDR4, 2133MHz, 1 Slot "," Intel HD Graphics 620, SHARE ","1TB 5400rpm, Khe mở rộng: M.2 2280 (Sata, PCIe 3 x4)"," 2x USB 2.0, USB 3.0, USB-C, HDMI, Bluetooth 4.1","bàm phím","Windows 10 Home SL 64bit ","4 Cell ","2.45 Kg "," LAN: 1G, Wifi AC, Reader, 390(W) x 266(D) x 26.8(H) mm ");

ch[2]= new cauhinh("SP003","12 tháng","Apple", "15 INCH ( 2880 x 1800 ) không cảm ứng","Intel Core i7-7820HQ ( 2.9 GHz - 3.9 GHz / 4 nhân, 8 luồng ) 8MB","16GB","Intel HD Graphics 630 / AMDRadeon Pro 560 4GB","512GB SSD","","không đèn thường , không phím số","macOS","Pin liền","1.3 kg","VR:	không hỗ trợ");
ch[107]= new cauhinh("SP108","12 tháng","Apple", "12 INCH ( 2304 x 1440 ) không cảm ứng","Core M ( 1.2 GHz)","8GB","Intel HD Graphics 615","512GB SSD","1 x SD card slot","không đèn thường , không phím số","macOS","Pin liền","1.3 kg","VR:	không hỗ trợ");
ch[108]= new cauhinh("SP109","12 tháng","Apple", "13.3 INCH ( 2560 x 1600 ) không cảm ứng","Core i5 (2.3 GHz)","8GB","Intel HD Graphics","256GB SSD","1 x SD card slot","không đèn thường , không phím số","macOS","Pin liền","1.4 kg","VR:	không hỗ trợ");
ch[109]= new cauhinh("SP110","12 tháng","Apple", "13.3 INCH ( 2560 x 1600 ) không cảm ứng","Core i5 ( 2.3 GHz)","8GB","Intel Iris Plus Graphics 640","256GB SSD","","không đèn thường , không phím số","macOS","Pin liền","1.4 kg","VR:	không hỗ trợ");
ch[110]= new cauhinh("SP111","12 tháng","Apple", "12 INCH ( 2304 x 1440 ) không cảm ứng","Core i5 ( 1.3 GHz)","8GB","Intel HD Graphics 615","512GB SSD","1 x SD card slot","không đèn thường , không phím số","macOS","Pin liền","1.3 kg","VR:	không hỗ trợ");
ch[111]= new cauhinh("SP112","12 tháng","Apple", "13.3 INCH ( 2560 x 1600 ) không cảm ứng","Core i5 ( 2.3 GHz)","8GB","Intel Iris Plus Graphics 640","128GB SSD","1 x SD card slot","không đèn thường , không phím số","macOS","Pin liền","1.3 kg","VR:	không hỗ trợ");
ch[112]= new cauhinh("SP113","12 tháng","Apple", "13.3 INCH ( 2560 x 1600 ) không cảm ứng","Core i5 ( 2.3 GHz)","8GB","Intel Iris Plus Graphics 640","128GB SSD","1 x SD card slot","không đèn thường , không phím số","macOS","Pin liền","1.3 kg","VR:	không hỗ trợ");
ch[113]= new cauhinh("SP114","12 tháng","Apple", "13.3 INCH ( 1440 x 900 ) không cảm ứng", "Core i5 ( 1.8 GHz)","8GB DDR3L 1600MHz","Intel HD Graphics","256GB SSD","2 x USB 3.0 , 1 x Thunderbolt , 1 x SD card slot","không đèn thường , có phím số","macOS","Pin liền","1.3 kg","VR: không hỗ trợ");
ch[114]= new cauhinh("SP115","12 tháng","Apple", "13.3 INCH ( 1440 x 900 ) không cảm ứng","Core i5 ( 1.8 GHz)","8GB DDR3L 1600MHz","Intel HD Graphics 6000","128GB SSD","2 x USB 3.0 , 1 x Thunderbolt , 1 x SD card slot","không đèn thường , có phím số","macOS","Pin liền","1.3 kg","VR:	không hỗ trợ");

function chitiet ()
{
	var url =  window.location.href;
	console.log(url);
	var params = url.split('?');
	var masanpham = params[1];
	console.log(masanpham);
	var temp1 = new sanpham();
	for (var i = 0; i < sp.length; i++) {
		if(sp[i].masp == masanpham){
			temp1 = sp[i];
			break;
		}		
	}
	var temp = new cauhinh();
	for (var i = 0; i < ch.length; i++) {
		if(ch[i].masp == masanpham){
			temp=ch[i];
			break;
		}
	}
	var hinh = temp1.hinh;
	hinh = hinh.split('.');
	console.log(hinh[1]); console.log(hinh[0]);
	console.log(temp);	console.log(temp1);
	document.getElementById("hinh_sp1").innerHTML='<img src="'+hinh[0]+'%1.'+hinh[1]+'" width="64px" height="64px"/>';
	document.getElementById("hinh_sp2").innerHTML='<img src="'+hinh[0]+'%2.'+hinh[1]+'" width="64px" height="64px"/>';
	document.getElementById("hinh_sp3").innerHTML='<img src="'+hinh[0]+'%3.'+hinh[1]+'" width="64px" height="64px"/>';
	document.getElementById("ten_sp").innerHTML=temp1.tensp;
	document.getElementById("gia_sp").innerHTML=temp1.gia +' VNĐ';
	document.getElementById("hinh_sp").innerHTML='<img src="'+temp1.hinh+'" width="350px" height="350px" />';
	document.getElementById("baohanh").innerHTML=temp.baohanh;
	document.getElementById("thuonghieu").innerHTML=temp.thuonghieu;
	document.getElementById("monitor").innerHTML=temp.monitor;
	document.getElementById("cpu").innerHTML=temp.cpu;
	document.getElementById("ram").innerHTML=temp.ram;
	document.getElementById("graphics").innerHTML=temp.graphics;
	document.getElementById("harddisk").innerHTML=temp.harddisk;
	document.getElementById("cong").innerHTML=temp.congketnoi;
	document.getElementById("phim").innerHTML=temp.bamphim;
	document.getElementById("os").innerHTML=temp.hedieuhanh;
	document.getElementById("pin").innerHTML=temp.pin;
	document.getElementById("kl").innerHTML=temp.trongluong;
}
function thaydoihinh(giatri)
{
	var url =  window.location.href;
	console.log(url);
	var params = url.split('?');
	var masanpham = params[1];
	console.log(masanpham);
	var temp1 = new sanpham();
	for (var i = 0; i < sp.length; i++) {
		if(sp[i].masp == masanpham){
			temp1 = sp[i];
			break;
		}		
	}
	console.log(temp1);
	var hinh1=temp1.hinh;
	hinh1 = hinh1.split(".");
	console.log(hinh1[0]); console.log(hinh1[1]);
	switch(giatri){
		case 0: document.getElementById("hinh_sp").innerHTML='<img src="'+temp1.hinh+'" width="350px" height="350px" />';
				break;
		case 1: document.getElementById("hinh_sp").innerHTML='<img src="'+hinh1[0]+'%1.'+hinh1[1]+'"width="350px" height="350px"/>';		
				break;
		case 2: document.getElementById("hinh_sp").innerHTML='<img src="'+hinh1[0]+'%2.'+hinh1[1]+'"width="350px" height="350px"/>';		
				break;
		case 3: document.getElementById("hinh_sp").innerHTML='<img src="'+hinh1[0]+'%3.'+hinh1[1]+'"width="350px" height="350px"/>';		
				break;
	}
}
//---------------------------------------------------------------------------------------------------
 // sanpham

			function taomenu()
			{

				var s="";
				var vitri=0;
				for(var i=0;i<tl.length;i++)
				{	
					s=s+'<a href="index.html?'+tl[i].matheloai+'&'+vitri+'"> <div >'+'<h3>' + 'Laptop &nbsp;' + tl[i].tentheloai +'</h3> </div> </a>' ;
				
				}
				//alert(s);
			document.getElementById("noidungmenu").innerHTML=s;
			}//menu

			function taomangTemp(matheloai)
			{
				//alert(matheloai);
				var vt=0;
								var arrayTemp = new Array();
								for(var e=0; e<sp.length;e++) 
									if(sp[e].matheloai==matheloai)
									{
										arrayTemp[vt]= new sanpham();
										arrayTemp[vt++]=sp[e];
									}
								return arrayTemp;
			}

			function url ()
			{
				var url = window.location.href;
				//alert(url);
				var params = url.split('?');
				//alert(params[1]);// ben phai ?
				var chuoicon=params[1]; 
				chuoicon=chuoicon.split('&');
				//alert(chuoicon[1]); //lay vitri
				var vitrimenu=chuoicon[0];
				var vitrisp = chuoicon[1]; //lay url
				var s="";
				var sotrang=1;
				//alert(vitrimenu);
				switch(vitrimenu)
				{
					case 'AS': 
								var arrayAS = new Array();
								arrayAS=taomangTemp('AS'); 
								console.log(arrayAS);
								var dem =0;
								for(i=vitrisp ; i<arrayAS.length;i++)
								{
									s=s+'<a href="chitietsp.html?'+ arrayAS[i].masp +'"> <div class="thuoctinhsp">'+  '<img src="images/ASUS/'+i+'.jpg"; class="imgsp"  />'+  '<br/> <p class="tensp">' +arrayAS[i].tensp +'</p> <p class="giasp">'+arrayAS[i].gia +'VNĐ </p> </div> </a>';
									dem++;
									if(dem==12) break;
								}
								//alert(s);
								sotrang=Math.ceil(arrayAS.length/12);
								break;
					case 'MSI': 
								var arrayMSI = new Array();
								arrayMSI=taomangTemp('MSI');//console.log(arrayMSI);
								var dem =0;
								for(i=vitrisp ; i<arrayMSI.length;i++)
								{
									
									s=s+'<a href="chitietsp.html?'+ arrayMSI[i].masp +'"> <div class="thuoctinhsp">'+  '<img src="images/MSI/'+i+'.jpg"; class="imgsp"  />'+  '<br/> <p class="tensp">' +arrayMSI[i].tensp +'</p> <p class="giasp">'+arrayMSI[i].gia +'VNĐ </p> </div> </a>';
									dem++;
									if(dem==12) break;
								}
								sotrang=Math.ceil(arrayMSI.length/12);
								break;
					case 'DELL':
								var arrayDELL = new Array();
								arrayDELL=taomangTemp('DELL');
								var dem=0;
								for(i=vitrisp ; i<arrayDELL.length;i++)
								{
									s=s+'<a href="chitietsp.html?'+ arrayDELL[i].masp +'"> <div class="thuoctinhsp">'+  '<img src="images/DELL/'+i+'.jpg"; class="imgsp" />'+  '<br/> <p class="tensp">'+arrayDELL[i].tensp +'</p> <p class="giasp">'+arrayDELL[i].gia +'VNĐ </p> </div> </a>';
									dem++;
									if(dem==12) break;
								}
								sotrang=Math.ceil(arrayDELL.length/12);
								break;
					case 'HP':
								var arrayHP = new Array();
								arrayHP=taomangTemp('HP');
								var dem =0;
								for(i=vitrisp ; i<arrayHP.length;i++)
								{
									s=s+'<a href="chitietsp.html?'+ arrayHP[i].masp +'"> <div class="thuoctinhsp">'+  '<img src="images/HP/'+i+'.jpg"; class="imgsp"  />'+  '<br/> <p class="tensp">'+arrayHP[i].tensp +'</p> <p class="giasp">'+arrayHP[i].gia +'VNĐ </p> </div> </a>';
									dem++;
									if(dem==12) break;
								}
								sotrang=Math.ceil(arrayHP.length/12);
								break;
					case 'MK':
								var arrayMK = new Array();
								arrayMK=taomangTemp('MK');
								var dem =0;
								for(i=vitrisp ; i<arrayMK.length;i++)
								{
									s=s+'<a href="chitietsp.html?'+ arrayMK[i].masp +'"> <div class="thuoctinhsp">'+  '<img src="images/MK/'+i+'.jpg"; class="imgsp"  />'+  '<br/> <p class="tensp">'+arrayMK[i].tensp + '</p> <p class="giasp">'+arrayMK[i].gia +'VNĐ </p> </div> </a>';
									dem++;
									if(dem==12) break;
								}
								sotrang=Math.ceil(arrayMK.length/12);
								break;
					case 'LNV':
								var arrayLNV = new Array();
								arrayLNV=taomangTemp('LNV');
								var dem =0;
								for(i=vitrisp ; i<arrayLNV.length;i++)
								{
									s=s+'<a href="chitietsp.html?'+ arrayLNV[i].masp +'"> <div class="thuoctinhsp">'+  '<img src="images/LNV/'+i+'.jpg"; class="imgsp"  />'+  '<br/> <p class="tensp">'+arrayLNV[i].tensp +'</p> <p class="giasp">'+arrayLNV[i].gia +'VNĐ </p> </div> </a>';
									dem++;
									if(dem==12) break;
								}
								sotrang=Math.ceil(arrayLNV.length/12);
								break;
					case 'AC':
								var arrayAC = new Array();
								arrayAC=taomangTemp('AC');
								var dem =0;
								for(i=vitrisp ; i<arrayAC.length;i++)
								{
									s=s+'<a href="chitietsp.html?'+ arrayAC[i].masp +'"> <div class="thuoctinhsp">'+  '<img src="images/ACER/'+i+'.jpg"; class="imgsp"  />'+  '<br/> <p class="tensp">'+arrayAC[i].tensp +'</p> <p class="giasp">'+arrayAC[i].gia +'VNĐ </p> </div> </a>';
									dem++;
									if(dem==12) break;
								}
								sotrang=Math.ceil(arrayAC.length/12);
								break;
					
				}
				var lienket="";
				for(var i=1;i<=sotrang;i++)
							{
									vitrisp=(i-1)*12;
									lienket=lienket+'<a href="index.html?'+ vitrimenu +'&'+ vitrisp +'">'+'&nbsp;'+ i +'</a>'+'&nbsp;';
							}
							console.log(lienket); //lienket
			document.getElementById("sotrang").innerHTML=lienket;
			document.getElementById("url").innerHTML=s;
			
			}
function baotri(){
				alert("Hệ thống hiện tại đang bảo trì ! Chúng tôi xin lỗi vì sự bất tiện này !");
			}

function find()
{
	var timkiem=document.getElementById("timkiem").value;
	if (timkiem=="") return 0;
	timkiem=timkiem.toUpperCase();
	console.log(timkiem);
	var temp=new Array();
	var dem=0;
	for (var i = 0; i < sp.length; i++) {
		var tensanpham = sp[i].tensp.toUpperCase();
		if (tensanpham.search(timkiem)!=-1) {
			temp[dem++]=sp[i];
		}
	}
	console.log("co "+dem+" sp");
	var s="";
	for(i=0 ; i<temp.length;i++) {
		s=s+'<a href="chitietsp.html?'+ temp[i].masp +'"> <div class="thuoctinhsp">'+  '<img src="'+temp[i].hinh+'"; class="imgsp"  />'+  '<br/> <p class="tensp">' +temp[i].tensp +'</p> <p class="giasp">'+temp[i].gia +'VNĐ </p> </div> </a>';
		//dem++;
		//if(dem==12) break;
	}
	//sotrang=Math.ceil(arrayAS.length/12);
	document.getElementById("url").innerHTML=s;
}
function xoauser(){
	var result = confirm("Bạn có chắc chắn muốn xóa người dùng");
	if(result)
	{
		alert("Xóa thành công");
	}
	else
	{
		alert("Đã hủy thao tác");
	}
}
function quanliuser(){
	var s = '<table style="text-align:center"><tr><th>Tên user</th><th>Mật khẩu</th><th>Họ và tên</th><th>email</th><th>Số điện thoại</th><th>Xóa user</th></tr>';
	var tamtk,tammk,hoten,email,sdt;
	for(var i = 1 ; i <= parseInt(localStorage.numberuser) ; i++)
	{
		tamtk = "tendangnhap"+i;
		tammk = "matkhau"+i;
		hoten = "hoten"+i;
		email = "email"+i;
		sdt="sdt"+i;
		
		s +='<tr>'+'<td>'+localStorage.getItem(tamtk)+'</td>'+'<td>'+localStorage.getItem(tammk)+'</td>'+'<td>'+localStorage.getItem(hoten)+'</td>'+'<td>'+localStorage.getItem(email)+'</td>'+'<td>'+localStorage.getItem(sdt)+'</td>'+'<td><input type="button" value="-" onclick="xoauser()"/>'+'</tr>';	
	}
	s+='</table>';
	document.getElementById("taotheloai").innerHTML = s;
	
}

function thongbaotruockhixoa(){
	var a=confirm("Bạn có muốn xóa !");
	if(a)
		alert("Xóa thành công.");
	else
		alert("Đã hủy thao tác xóa !");
}
function kiemtrathem(){
	var a = confirm("Bạn có chác chắn muốn thêm sản phẩm này");
	if(a)
	{
	alert("Thêm thành công sản phẩm");
	}
	else
	{
		alert("Đã hủy thêm");
	}
}
function kiemtrathem2(){
	var a = confirm("Bạn có chác chắn muốn thêm thể loại này");
	if(a)
	{
	alert("Thêm thành công thể loại");
	}
	else
	{
		alert("Đã hủy thêm");
	}
}
function themsanphammoi(){
	var s = '<form>'+'<table><caption><p>Thêm thông tin sản phẩm</p></caption><tr><td>Nhập mã sản phẩm mới</td><td><input type="text" name="masanpham"></td></tr><tr><td>Nhập tên sản phẩm mới</td><td><input type="text" name="ten"/></td></tr><tr><td>Nhập vào giá sản phẩm</td><td><input type="number" name= "gia"/></td></tr><tr><td>Thêm hình cho sản phẩm</td><td><input type="file" name="hinh"></td></tr><tr><td>Nhập vào mã loại mới</td><td><input type="text" name="maloai"></td></tr><tr><td colspan="2"><input type="submit" value="Thêm" onclick="kiemtrathem()"></td></tr></table></form>';
	document.getElementById("taotheloai").innerHTML = s;
}
function themtheloaimoi(){
	var s='<form><table><caption>Thêm thông tin thể loại</caption><tr><td>Thêm mã thể loại</td><td><input type="text" name="matheloai"></td></tr><tr><td>Thêm tên thể loại</td><td><input type="text" name="tentheloai"></td></tr><tr><td colspan="2"><input type="submit" value="Thêm" onclick="kiemtrathem2()"></td></tr></table></form>';
	document.getElementById("taotheloai").innerHTML = s;
	
}
function timkiemnangcao(b,c){
	var be=b;
	var lon=c;
	var s;
	for(var i=0;i<sp.length;i++)
	{
		if(sp[i].dongia>be && sp[i].dongia<lon)
		{
			s=s+'<a href="chitietsp.html?'+ sp[i].masp +'"> <div class="thuoctinhsp">'+  '<img src="'+sp[i].hinh+'"; class="imgsp"  />'+  '<br/> <p class="tensp">' +sp[i].tensp +'</p> <p class="giasp">'+sp[i].gia +'VNĐ </p> </div> </a>';
		}
	}
	document.getElementById("url").innerHTML=s;
	clearInterval(function(){next()},0);
		
	
	
}
function kt_dangnhap() {
    if (localStorage.taikhoanhientai) {
    	themvaogio();
		alert("Thêm vào giỏ hàng thành công");
    } else {
        alert("Bạn phải đăng nhập tài khoản.");
        location.assign('dangnhap.html');
    }
}

function spgiohang(tenuser, masp, tensp, sl, dongia, thanhtien) {
    this.tenuser = tenuser;
    this.masp = masp;
    this.tensp = tensp;
    this.sl = sl;
    this.dongia = dongia;
    this.thanhtien = thanhtien;
}

function themvaogio() {
    var url = location.search;
    var masanpham = url.substring(1);
    var key = 'gio' + localStorage.taikhoanhientai;
    if (window.localStorage.getItem(key)) {
    	var thongtin = localStorage.getItem(key);
    	localStorage.setItem(key, thongtin + '-' + masanpham);0
    }
    else localStorage.setItem('gio'+ localStorage.taikhoanhientai, masanpham);
}
function xoa(masp){
	var key = 'gio' + localStorage.taikhoanhientai;
    var thongtin = localStorage.getItem(key);
    thongtin = thongtin.split('-');
	var s='';
	for(var i=0;i<thongtin.lenght;i++){
		if(thongtin[i]==masp) thongtin[i]='';
		s = s + thongtin[i];	
	}
	localStorage.setItem('gio'+ localStorage.taikhoanhientai, s);
}
function xuat_giohang() {
    var giohang = new Array();
    var key = 'gio' + localStorage.taikhoanhientai;
    var thongtin = localStorage.getItem(key);
    thongtin = thongtin.split('-');
    for (var i = 0; i < thongtin.length; i++) {
        var temp = new sanpham();
        temp = laysanpham(thongtin[i]);
        giohang[i] = new spgiohang(localStorage.taikhoanhientai, temp.masp, temp.tensp, 1, temp.dongia, 1);
    }
    giohang = xoa_phtu_trung(giohang);
    //xuat 
    var s = '';
	
    for (var i = 0; i < giohang.length; i++) {
        s = s + '<tr> <td style="width: 250px">' + giohang[i].tensp + '</td>' +
            '<td style="width: 150px">' + giohang[i].dongia + '</td>' +
            '<td style="width: 90px">' + giohang[i].sl+ '</td>'+
            '<td style="width: 150px" id="thanhTien">' + giohang[i].dongia*giohang[i].sl + '</td>'+
			'<td style="width: 90px"><button onclick="xoa('+giohang[i].masp+')"> xóa </button> </td> </tr>';
    }
    document.getElementById('giohang').innerHTML = s;
}
function xoa_phtu_trung(a)
{
	for (var j = 0; j < a.length-1; j++)
		for (var i = j+1; i < a.length; i++){
			if (a[i].masp == a[j].masp)
			{
				a[j].sl++;
				for (var k = i; k < a.length; k++) 
				{
					a[k] = a[k+1];	
				}
				a.length--;
				i--;
			}
		}
	return a;
}
function laysanpham(masanpham) {
    for (var j = 0; j < sp.length; j++) {
        if (masanpham == sp[j].masp)
            return sp[j];
    }
}

