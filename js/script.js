// --------------------------AJAX.js----------------------------//

$(document).on('submit', '.Content7form', function(e) {
  e.preventDefault(); // Prevents the default page reload after form submission

  $.ajax({
      type: $(this).prop('post'),
      url: $(this).prop('igor.bezoglyuk@mail.r'),
      data: $(this).serialize()
  }).done(function() {
      // Do something after it submits
      alert('Сообщение отправлено');
  }).fail(function() {
      // There was an error
      alert('Что то пошло не так !');
  });
});

// --------------------------MenuPhone.js----------------------------//

$( document ).ready(function(){
    $(function (){
    $(".Open").click(function(){
    $("#MenuPhone").toggle(500); /*Открывает и закрывает при нажатии на  тег <span> с id #open*/
 });
    $(window).resize(function(){
    $("#MenuPhone").hide();
});
});
});

// --------------------------ScrollToPush.js----------------------------//

$(document).ready(function(){
    $('.ContentblockSilka').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       return false;
    });
 });



// --------------------------MenuLinkScroll.js----------------------------//

$(document).ready(function(){
    $("#Menu").on("click",".Menusilka", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(document).ready(function(){
    $("#MenuPhone").on("click",".Menu2silka", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// --------------------------AnimationScroll.js----------------------------//

/*const observer = new IntersectionObserver(entries => { // скрипт который проигрывает анимацию при скролле вниз
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('active'); //класс созданый в css, для активации анимации
    }
  });
});

observer.observe(document.querySelector('.ContentBlockTitle')); // Родительские классы тегов, на который создана анимация в css 
observer.observe(document.querySelector('.ContentBlockStroka'));*/

/*const observer = new IntersectionObserver(entries => { // скрипт который проигрывает анимацию при скролле вниз и в верх
  entries.forEach(entry => {
    const square = entry.target.querySelector('.ContentBlockTitle');
    if (entry.isIntersecting) {
      square.classList.add('active');
      return; // если класс добавлен, продолжать уже не надо
    }
    // перемещение завершено, теперь надо удалить класс
    square.classList.remove('active');
  });
});
observer.observe(document.querySelector('.square-wrapper'));*/// созщдайте тег который будет оборачивать тег с анимацией  что бы по нему скрипт орентировался 

const animItems = document.querySelectorAll('.anim-items'); //у каждого обьекта у кого есть класс .anim-items  будит работать анимация при сколле. Просто добавте в класс обьекта этот класс в html
if(animItems.length > 0){
   window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params){
    for(let index = 0; index  < animItems.length; index++){
       const animItem = animItems[index];
       const animItemHeight = animItem.offsetHeight;
       const animItemOffset = offset(animItem).top;
       const animStart = 4; // при достижении скролоом  высоты 1.4 высоты окна браузера 

       let animItemPoint = window.innerHeight - animItemHeight / animStart;
       if(animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
       }
       if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('On'); // если высота обьекта больше окна браузера, добавляется класс .On
       }else{

        if (!animItem.classList.contains('anim-no-hide')) { // class который  блокирует  постоянное  воспроизведение анимации  после скрола верх и в низ, позволяя ему воспроизвестись после скрола один раз вниз 
           animItem.classList.remove('active'); // если мы не докрутили или перекрутили обьет, то класс .On отнимаеться
        } 
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{top: rect.top + scrollTop, left: rect.left + scrollLeft}  
 }

    animOnScroll();// изначальная функция , позволяет  обьектам находящихся на стартовой позиции  без скролла  работать

  /*setTimeout(()=>{ общая задержка появления обьекта - анимации
    animOnScroll();
  },300);*/
}

// --------------------------GallerySitesLink.js----------------------------//

jQuery(document).ready(function(){
  $(function (){
    $(".GalleryBlakOkno").click(function(){
    $("#OknoBackground:hidden").show();
   });
      $(".closse").click(function(){
    $("#OknoBackground").css("display","none");
   });
      $(".GalleryBlakOkno2").click(function(){
    $("#OknoBackground2:hidden").show();
   });
      $(".closse").click(function(){
    $("#OknoBackground2").css("display","none");
   });
      $(".GalleryBlakOkno3").click(function(){
    $("#OknoBackground3:hidden").show();
   });
      $(".closse").click(function(){
    $("#OknoBackground3").css("display","none");
   });
      $(".GalleryBlakOkno4").click(function(){
    $("#OknoBackground4:hidden").show();
   });
      $(".closse").click(function(){
    $("#OknoBackground4").css("display","none");
   });
      $(".GalleryBlakOkno5").click(function(){
    $("#OknoBackground5:hidden").show();
   });
      $(".closse").click(function(){
    $("#OknoBackground5").css("display","none");
   });
      $(".GalleryBlakOkno6").click(function(){
    $("#OknoBackground6:hidden").show();
   });
      $(".closse").click(function(){
    $("#OknoBackground6").css("display","none");
   });
      $(".GalleryBlakOkno7").click(function(){
    $("#OknoBackground7:hidden").show();
   });
      $(".closse").click(function(){
    $("#OknoBackground7").css("display","none");
   });
      $(".GalleryBlakOkno8").click(function(){
    $("#OknoBackground8:hidden").show();
   });
      $(".closse").click(function(){
    $("#OknoBackground8").css("display","none");
   });
      $(".GalleryBlakOkno9").click(function(){
    $("#OknoBackground9:hidden").show();
   });
      $(".closse").click(function(){
    $("#OknoBackground9").css("display","none");
   });
      $(".GalleryBlakOkno10").click(function(){
     $("#OknoBackground10:hidden").show();
   });
      $(".closse").click(function(){
     $("#OknoBackground10").css("display","none");
   });
   $(".GalleryBlakOkno11").click(function(){
    $("#OknoBackground11:hidden").show();
  });
     $(".closse").click(function(){
    $("#OknoBackground11").css("display","none");
  });
  });
  });

  // --------------------------ServicesForma.js----------------------------//

  jQuery(document).ready(function(){
    $(function (){
      $(".Servicesblockkartaknopka").click(function(){
      $("#ServicesOkno:hidden").show();
     });
        $(".Services-form-close").click(function(){
      $("#ServicesOkno").css("display","none");
      $(".Kontntblock").css("filter","blur(0px)");
     });
    });
    });

    $(document).on('submit', '#ServicesOknoform', function(e) {
      e.preventDefault(); // Prevents the default page reload after form submission
  
      $.ajax({
          type: $(this).prop('method'),
          url: $(this).prop('action'),
          data: $(this).serialize()
      }).done(function() {
          // Do something after it submits
          alert('Ваша заявка отправлена');
      }).fail(function() {
          // There was an error
          alert('Что то пошло не так !');
      });
  });
