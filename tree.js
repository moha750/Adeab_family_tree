var create_workspace=document.querySelector(".create-workspace");
var next_click=document.querySelectorAll(".next-click");
var back_click=document.querySelectorAll(".back-click");
var finish_click=document.querySelector(".finish-click");
var main_form=document.querySelectorAll(".main");
var list=document.querySelectorAll(".progress-bar li")
let formnumber=0;


create_workspace.addEventListener('click',function(){
    if(!validateform()){
        return false;
    }
   formnumber++;
   updateform();
   progress_forward();
});

next_click.forEach(function(next_page){
    next_page.addEventListener('click',function(){
         if(!validateform()){
        return false;
        }
         formnumber++;
         updateform();
         progress_forward();
    });
});

back_click.forEach(function(back_page){
    back_page.addEventListener('click',function(){
         formnumber--;
         updateform();   
    });
});

finish_click.addEventListener('click',function(){
//   if(!validateform()){
//         return false;
//         }
         formnumber++;
         updateform();
         var remove_progress=document.querySelector(".progress-bar");
         remove_progress.classList.add('d-none'); 
});
function progress_forward(){
    list[formnumber].classList.add('active');
}



function updateform(){
    main_form.forEach(function(main_number){ 
       main_number.classList.remove('active'); 
    });
    main_form[formnumber].classList.add('active');
  
   
} 



 
function validateform(){
    validate=true;
    var validate_form=document.querySelectorAll(".main.active #input");
    validate_form.forEach(function(val){
        val.classList.remove('warning');
        if(val.hasAttribute('require')){
            if(val.value.length==0){
                validate=false;
                val.classList.add('warning');
            }
        }
    });
    return validate;
}
































document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".radio-wrapper").forEach(label => {
        label.addEventListener("click", function() {
            var customTitle = label.getAttribute("data-title") || "معلومة";
            var customMessage = label.getAttribute("data-message") || "لا توجد رسالة مخصصة";
            var videoURL = label.getAttribute("data-video"); // رابط الفيديو

            // إنشاء محتوى النافذة
            var content = `<p>${customMessage}</p>`;
            if (videoURL) {
                content += `
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 10px;">
                        <iframe src="${videoURL}" frameborder="0" allowfullscreen 
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                        </iframe>
                    </div>
                `;
            }

            // عرض النافذة باستخدام SweetAlert2
            Swal.fire({
                title: customTitle,
                html: content, // استخدام HTML بدلاً من text
                confirmButtonText: 'حسناً',
                confirmButtonColor: '#009345',
                background: '#fff',
                width: '600px',
                customClass: {
                    title: 'swal2-title',
                    htmlContainer: 'swal2-content',
                    confirmButton: 'swal2-confirm'
                }
            });
        });
    });
});


