export const formats = (time)=>{
	var time = new Date(time);
	var y = time.getFullYear();
	var m = time.getMonth()+1;
	var d = time.getDate();
	var h = time.getHours();
	var mm = time.getMinutes();
	var s = time.getSeconds();
	function addZero(t){
		return t>9?""+t:"0"+t;
	}
	return y+"-"+addZero(m)+"-"+addZero(d)+" "+addZero(h)+":"+addZero(mm)+":"+addZero(s);
}
export const aa=()=>{
	console.log(123);
}