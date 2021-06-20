//Get the button
const toTop = document.querySelector(".to-top");
const navb = document.querySelector(".navbar");
const search = document.querySelector("#show-search");

//Hien thanh search tren desktop
search.onclick = () => {

}
//Xuất hiện nút toTop & ẩn/hiện thanh navbar màu đen
window.onscroll = function() {scrollFunction()};

//Hàm cuộn
function scrollFunction() {
    
    if(window.innerWidth <= 991){
        //Moblie
        navb.style.top = "0";
        toTop.style.right = "10px";
        toTop.style.bottom = "18px";
        if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
            toTop.style.visibility = "visible";
        } else {
            toTop.style.visibility = "hidden";
        }

      }
      else{
        //Desktop
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            navb.style.display = "block";
            navb.style.top = "0";
            navb.classList.remove('p-md-4');
            navb.style.background = "#272727";
            //Button on top (An/Hien)
            if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {
                toTop.style.visibility = "visible";
            } else {
                toTop.style.visibility = "hidden";
            }
        }
        else{
            navb.style.top = "55px";
            navb.classList.add('p-md-4');
            navb.style.background = "#27272700";
        }
      }
}