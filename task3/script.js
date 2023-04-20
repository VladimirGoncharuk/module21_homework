window.addEventListener('load', () => {
    let name = localStorage.getItem('name');
    let date = localStorage.getItem('date');
    
    if (name) {
      
      alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${date}`)
      localStorage.setItem('date',  new Date());
    } else {
     name = prompt ("Добро пожаловать! Назовите, пожалуйста, ваше имя",'');
    localStorage.setItem('name',  name);  
    localStorage.setItem('date',  new Date());  
    }
    
  });