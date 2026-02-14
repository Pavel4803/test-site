(function(){
  var form=document.getElementById('contactForm');
  if(!form)return;
  form.onsubmit=function(e){
    e.preventDefault();
    var n=document.getElementById('contactName'), u=document.getElementById('contactEmail');
    var nv=n?n.value.trim():'', uv=u?u.value.trim():'';
    if(!nv){alert('Заполните поле «Имя».');if(n)n.focus();return;}
    if(!uv){alert('Заполните поле «Email».');if(u)u.focus();return;}
    alert('Заявка принята. Мы свяжемся с вами.');
    form.reset();
  };
})();
