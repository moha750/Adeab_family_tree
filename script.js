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






















const openPopup1 = document.getElementById('openPopup1');
const popup1 = document.getElementById('popup1');
const closePopup1 = document.getElementById('closePopup1');
const cancelButton1 = document.getElementById('cancelButton1');
const confirmButton1 = document.getElementById('confirmButton1');
const errorMessage1 = document.getElementById('errorMessage1');

const resultPopup1 = document.getElementById('resultPopup1');
const closeResultPopup1 = document.getElementById('closeResultPopup1');
const resultMessage1 = document.getElementById('resultMessage1');

// فتح النافذة المنبثقة عند الضغط على الزر
openPopup1.addEventListener('click', () => {
    popup1.style.display = 'flex';
    errorMessage1.style.display = 'none';  // إخفاء رسالة الخطأ عند فتح النافذة
});

// إغلاق النافذة عند الضغط على زر الإغلاق أو زر الإلغاء
closePopup1.addEventListener('click', () => {
    popup1.style.display = 'none';
    errorMessage1.style.display = 'none';  // إخفاء رسالة الخطأ عند إغلاق النافذة
});

cancelButton1.addEventListener('click', () => {
    popup1.style.display = 'none';
    errorMessage1.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط على إلغاء
});

// التأكيد على الخيار المحدد عند الضغط على زر "موافقة"
confirmButton1.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="الفريق"]:checked');
    if (selectedOption) {
        // عرض النافذة المنبثقة الثانية مع الرسالة المنسقة
        resultMessage1.textContent = ' 🤝أنت الآن ' + selectedOption.value + ' أدِيب ';

        popup1.style.display = 'none';
        resultPopup1.style.display = 'flex';
    } else {
        // عرض رسالة الخطأ إذا لم يتم تحديد خيار
        errorMessage1.textContent = '🦦شلون يعني؟ كيف نعرف مهنتك';
        errorMessage1.style.display = 'block';
    }
});

// إغلاق نافذة النتيجة
closeResultPopup1.addEventListener('click', () => {
    resultPopup1.style.display = 'none';
});

// إغلاق النافذة عند الضغط خارج المحتوى
window.addEventListener('click', (e) => {
    if (e.target == popup1) {
        popup1.style.display = 'none';
        errorMessage1.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط خارج النافذة
    }
    if (e.target == resultPopup1) {
        resultPopup1.style.display = 'none';
    }
});











const openPopup2 = document.getElementById('openPopup2');
const popup2 = document.getElementById('popup2');
const closePopup2 = document.getElementById('closePopup2');
const cancelButton2 = document.getElementById('cancelButton2');
const confirmButton2 = document.getElementById('confirmButton2');
const errorMessage2 = document.getElementById('errorMessage2');

const resultPopup2 = document.getElementById('resultPopup2');
const closeResultPopup2 = document.getElementById('closeResultPopup2');
const resultMessage2 = document.getElementById('resultMessage2');

// فتح النافذة المنبثقة عند الضغط على الزر
openPopup2.addEventListener('click', () => {
    popup2.style.display = 'flex';
    errorMessage2.style.display = 'none';  // إخفاء رسالة الخطأ عند فتح النافذة
});

// إغلاق النافذة عند الضغط على زر الإغلاق أو زر الإلغاء
closePopup2.addEventListener('click', () => {
    popup2.style.display = 'none';
    errorMessage2.style.display = 'none';  // إخفاء رسالة الخطأ عند إغلاق النافذة
});

cancelButton2.addEventListener('click', () => {
    popup2.style.display = 'none';
    errorMessage2.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط على إلغاء
});

// التأكيد على الخيار المحدد عند الضغط على زر "موافقة"
confirmButton2.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="الفريق"]:checked');
    if (selectedOption) {
        // عرض النافذة المنبثقة الثانية مع الرسالة المنسقة
        resultMessage2.textContent = ' 📝أنت الآن ' + selectedOption.value + ' أدِيب ';

        popup2.style.display = 'none';
        resultPopup2.style.display = 'flex';
    } else {
        // عرض رسالة الخطأ إذا لم يتم تحديد خيار
        errorMessage2.textContent = '🦦شلون يعني؟ كيف نعرف مهنتك';
        errorMessage2.style.display = 'block';
    }
});

// إغلاق نافذة النتيجة
closeResultPopup2.addEventListener('click', () => {
    resultPopup2.style.display = 'none';
});

// إغلاق النافذة عند الضغط خارج المحتوى
window.addEventListener('click', (e) => {
    if (e.target == popup2) {
        popup2.style.display = 'none';
        errorMessage2.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط خارج النافذة
    }
    if (e.target == resultPopup2) {
        resultPopup2.style.display = 'none';
    }
});





















const openPopup3 = document.getElementById('openPopup3');
const popup3 = document.getElementById('popup3');
const closePopup3 = document.getElementById('closePopup3');
const cancelButton3 = document.getElementById('cancelButton3');
const confirmButton3 = document.getElementById('confirmButton3');
const errorMessage3 = document.getElementById('errorMessage3');

const resultPopup3 = document.getElementById('resultPopup3');
const closeResultPopup3 = document.getElementById('closeResultPopup3');
const resultMessage3 = document.getElementById('resultMessage3');

// فتح النافذة المنبثقة عند الضغط على الزر
openPopup3.addEventListener('click', () => {
    popup3.style.display = 'flex';
    errorMessage3.style.display = 'none';  // إخفاء رسالة الخطأ عند فتح النافذة
});

// إغلاق النافذة عند الضغط على زر الإغلاق أو زر الإلغاء
closePopup3.addEventListener('click', () => {
    popup3.style.display = 'none';
    errorMessage3.style.display = 'none';  // إخفاء رسالة الخطأ عند إغلاق النافذة
});

cancelButton3.addEventListener('click', () => {
    popup3.style.display = 'none';
    errorMessage3.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط على إلغاء
});

// التأكيد على الخيار المحدد عند الضغط على زر "موافقة"
confirmButton3.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="الفريق"]:checked');
    if (selectedOption) {
        // عرض النافذة المنبثقة الثانية مع الرسالة المنسقة
        resultMessage3.textContent = ' 🎙️أنت الآن ' + selectedOption.value + ' أدِيب ';

        popup3.style.display = 'none';
        resultPopup3.style.display = 'flex';
    } else {
        // عرض رسالة الخطأ إذا لم يتم تحديد خيار
        errorMessage3.textContent = '🦦شلون يعني؟ كيف نعرف مهنتك';
        errorMessage3.style.display = 'block';
    }
});

// إغلاق نافذة النتيجة
closeResultPopup3.addEventListener('click', () => {
    resultPopup3.style.display = 'none';
});

// إغلاق النافذة عند الضغط خارج المحتوى
window.addEventListener('click', (e) => {
    if (e.target == popup3) {
        popup3.style.display = 'none';
        errorMessage3.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط خارج النافذة
    }
    if (e.target == resultPopup3) {
        resultPopup3.style.display = 'none';
    }
});





















const openPopup4 = document.getElementById('openPopup4');
const popup4 = document.getElementById('popup4');
const closePopup4 = document.getElementById('closePopup4');
const cancelButton4 = document.getElementById('cancelButton4');
const confirmButton4 = document.getElementById('confirmButton4');
const errorMessage4 = document.getElementById('errorMessage4');

const resultPopup4 = document.getElementById('resultPopup4');
const closeResultPopup4 = document.getElementById('closeResultPopup4');
const resultMessage4 = document.getElementById('resultMessage4');

// فتح النافذة المنبثقة عند الضغط على الزر
openPopup4.addEventListener('click', () => {
    popup4.style.display = 'flex';
    errorMessage4.style.display = 'none';  // إخفاء رسالة الخطأ عند فتح النافذة
});

// إغلاق النافذة عند الضغط على زر الإغلاق أو زر الإلغاء
closePopup4.addEventListener('click', () => {
    popup4.style.display = 'none';
    errorMessage4.style.display = 'none';  // إخفاء رسالة الخطأ عند إغلاق النافذة
});

cancelButton4.addEventListener('click', () => {
    popup4.style.display = 'none';
    errorMessage4.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط على إلغاء
});

// التأكيد على الخيار المحدد عند الضغط على زر "موافقة"
confirmButton4.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="الفريق"]:checked');
    if (selectedOption) {
        // عرض النافذة المنبثقة الثانية مع الرسالة المنسقة
        resultMessage4.textContent = ' 🎨أنت الآن ' + selectedOption.value + ' أدِيب ';

        popup4.style.display = 'none';
        resultPopup4.style.display = 'flex';
    } else {
        // عرض رسالة الخطأ إذا لم يتم تحديد خيار
        errorMessage4.textContent = '🦦شلون يعني؟ كيف نعرف مهنتك';
        errorMessage4.style.display = 'block';
    }
});

// إغلاق نافذة النتيجة
closeResultPopup4.addEventListener('click', () => {
    resultPopup4.style.display = 'none';
});

// إغلاق النافذة عند الضغط خارج المحتوى
window.addEventListener('click', (e) => {
    if (e.target == popup4) {
        popup4.style.display = 'none';
        errorMessage4.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط خارج النافذة
    }
    if (e.target == resultPopup4) {
        resultPopup4.style.display = 'none';
    }
});















const openPopup5 = document.getElementById('openPopup5');
const popup5 = document.getElementById('popup5');
const closePopup5 = document.getElementById('closePopup5');
const cancelButton5 = document.getElementById('cancelButton5');
const confirmButton5 = document.getElementById('confirmButton5');
const errorMessage5 = document.getElementById('errorMessage5');

const resultPopup5 = document.getElementById('resultPopup5');
const closeResultPopup5 = document.getElementById('closeResultPopup5');
const resultMessage5 = document.getElementById('resultMessage5');

// فتح النافذة المنبثقة عند الضغط على الزر
openPopup5.addEventListener('click', () => {
    popup5.style.display = 'flex';
    errorMessage5.style.display = 'none';  // إخفاء رسالة الخطأ عند فتح النافذة
});

// إغلاق النافذة عند الضغط على زر الإغلاق أو زر الإلغاء
closePopup5.addEventListener('click', () => {
    popup5.style.display = 'none';
    errorMessage5.style.display = 'none';  // إخفاء رسالة الخطأ عند إغلاق النافذة
});

cancelButton5.addEventListener('click', () => {
    popup5.style.display = 'none';
    errorMessage5.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط على إلغاء
});

// التأكيد على الخيار المحدد عند الضغط على زر "موافقة"
confirmButton5.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="الفريق"]:checked');
    if (selectedOption) {
        // عرض النافذة المنبثقة الثانية مع الرسالة المنسقة
        resultMessage5.textContent = ' 🎬أنت الآن ' + selectedOption.value + ' أدِيب ';

        popup5.style.display = 'none';
        resultPopup5.style.display = 'flex';
    } else {
        // عرض رسالة الخطأ إذا لم يتم تحديد خيار
        errorMessage5.textContent = '🦦شلون يعني؟ كيف نعرف مهنتك';
        errorMessage5.style.display = 'block';
    }
});

// إغلاق نافذة النتيجة
closeResultPopup5.addEventListener('click', () => {
    resultPopup5.style.display = 'none';
});

// إغلاق النافذة عند الضغط خارج المحتوى
window.addEventListener('click', (e) => {
    if (e.target == popup5) {
        popup5.style.display = 'none';
        errorMessage5.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط خارج النافذة
    }
    if (e.target == resultPopup5) {
        resultPopup5.style.display = 'none';
    }
});






































































// جلب العناصر من الصفحة
const openPopup6 = document.getElementById('openPopup6');
const popup6 = document.getElementById('popup6');
const closePopup6 = document.getElementById('closePopup6');
const cancelButton6 = document.getElementById('cancelButton6');
const confirmButton6 = document.getElementById('confirmButton6');
const errorMessage6 = document.getElementById('errorMessage6');
const selectOption = document.getElementById('selectOption');
const resultPopup6 = document.getElementById('resultPopup6');
const closeResultPopup6 = document.getElementById('closeResultPopup6');
const resultMessage6 = document.getElementById('resultMessage6');

// فتح النافذة المنبثقة عند الضغط على الزر
openPopup6.addEventListener('click', () => {
    popup6.style.display = 'flex';
    errorMessage6.style.display = 'none';  // إخفاء رسالة الخطأ عند فتح النافذة
});

// إغلاق النافذة عند الضغط على زر الإغلاق أو زر الإلغاء
closePopup6.addEventListener('click', () => {
    popup6.style.display = 'none';
    errorMessage6.style.display = 'none';  // إخفاء رسالة الخطأ عند إغلاق النافذة
});

cancelButton6.addEventListener('click', () => {
    popup6.style.display = 'none';
    errorMessage6.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط على إلغاء
});

// التأكيد على الخيار المحدد عند الضغط على زر "موافقة"
confirmButton6.addEventListener('click', () => {
    const selectedOption = selectOption.value;
    if (selectedOption) {
        // عرض النافذة المنبثقة الثانية مع الرسالة المنسقة
        resultMessage6.textContent = ' 🤝أهلاً بِـ ' + selectOption.value ;

        popup6.style.display = 'none';
        resultPopup6.style.display = 'flex';
    } else {
        // عرض رسالة الخطأ إذا لم يتم تحديد خيار
        errorMessage6.textContent = 'يرجى اختيار أحد الخيارات.';
        errorMessage6.style.display = 'block';
    }
});

// إغلاق نافذة النتيجة
closeResultPopup6.addEventListener('click', () => {
    resultPopup6.style.display = 'none';
});

// إغلاق النافذة عند الضغط خارج المحتوى
window.addEventListener('click', (e) => {
    if (e.target == popup6) {
        popup6.style.display = 'none';
        errorMessage6.style.display = 'none';  // إخفاء رسالة الخطأ عند الضغط خارج النافذة
    }
    if (e.target == resultPopup6) {
        resultPopup6.style.display = 'none';
    }
});

// زر موافقة
confirmBtn.addEventListener('click', () => {
    const selectedValue = selectOption.value;

    if (selectedValue === "") {
        // عرض رسالة خطأ إذا لم يتم تحديد أي خيار
        resultMessage6.textContent = "الرجاء اختيار خيار من القائمة!";
        resultMessage6.style.color = "red";
    } else {
        // عرض الخيار المحدد
        resultMessage6.textContent = `لقد اخترت: ${selectedValue}`;
        resultMessage6.style.color = "green";
    }

    // إغلاق النافذة المنبثقة الأولى
    popup6.style.display = 'none';
    // عرض نافذة النتيجة
    resultPopup6.style.display = 'flex';
});









