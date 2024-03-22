//-----------------------------1-----------------------------------------

document.getElementById("leaderDandruff").addEventListener("click", () => {
    let Poetry = document.getElementById("Poetry");
    let Dandruff = document.getElementById("Dandruff");
    Poetry.style.display = "none";
    Dandruff.style.display = "flex";
    window.scroll(0,0)
  });
  
  document.getElementById("exetDandruff").addEventListener("click", () => {
    let Poetry = document.getElementById("Poetry");
    let Dandruff = document.getElementById("Dandruff");
    Poetry.style.display = "grid";
    Dandruff.style.display = "none";
    window.scroll(0,0)
  });
  
  //-----------------------------2-----------------------------------------
  document.getElementById("leaderSilkhair").addEventListener("click", () => {
    let Poetry = document.getElementById("Poetry");
    let Silkhair = document.getElementById("Silkhair");
    Poetry.style.display = "none";
    Silkhair.style.display = "flex";
    window.scroll(0,0)
  });
  
  document.getElementById("exetSilkhair").addEventListener("click", () => {
    let Poetry = document.getElementById("Poetry");
    let Silkhair = document.getElementById("Silkhair");
    Poetry.style.display = "grid";
    Silkhair.style.display = "none";
    window.scroll(0,0)
  });
  //---------------------------------3-------------------------------------------
  document.getElementById("leaderHairloss").addEventListener("click", () => {
    let Poetry = document.getElementById("Poetry");
    let Hairloss = document.getElementById("Hairloss");
    Poetry.style.display = "none";
    Hairloss.style.display = "flex";
    window.scroll(0,0)
  });
  
  document.getElementById("exetHairloss").addEventListener("click", () => {
    let Poetry = document.getElementById("Poetry");
    let Hairloss = document.getElementById("Hairloss");
    Poetry.style.display = "grid";
    Hairloss.style.display = "none";
    window.scroll(0,0)
  });
  // //---------------------------------4---------------------------------------
  document.getElementById("leadercurlyhair").addEventListener("click", () => {
    let Poetry = document.getElementById("Poetry");
    let curlyhair = document.getElementById("curlyhair");
    Poetry.style.display = "none";
    curlyhair.style.display = "flex";
  });
  
  document.getElementById("exetcurlyhair").addEventListener("click", () => {
    let Poetry = document.getElementById("Poetry");
    let curlyhair = document.getElementById("curlyhair");
    Poetry.style.display = "grid";
    curlyhair.style.display = "none";
    window.scroll(0,0)
  });
  
  //---------------------------------5---------------------------------------
  document.getElementById("leaderdryhair").addEventListener("click", () => {
  let Poetry = document.getElementById("Poetry");
  let dryhair = document.getElementById("dryhair");
  Poetry.style.display = "none";
  dryhair.style.display = "flex";
  });
  
  document.getElementById("exetdryhair").addEventListener("click", () => {
  let Poetry = document.getElementById("Poetry");
  let dryhair = document.getElementById("dryhair");
  Poetry.style.display = "grid";
  dryhair.style.display = "none";
  window.scroll(0,0)
  });
  //---------------------------------6---------------------------------------
  document.getElementById("leaderHeadlice").addEventListener("click", () => {
  let Poetry = document.getElementById("Poetry");
  let Headlice = document.getElementById("Headlice");
  Poetry.style.display = "none";
  Headlice.style.display = "flex";
  });
  
  document.getElementById("exetHeadlice").addEventListener("click", () => {
  let Poetry = document.getElementById("Poetry");
  let Headlice = document.getElementById("Headlice");
  Poetry.style.display = "grid";
  Headlice.style.display = "none";
  window.scroll(0,0)
  });
  
  
  
  
  //----------------------------------------------------الوصفه 1------------------------------------
  let recipe =document.getElementById('recipe')
  
  
  let recipeDandruff1 =document.getElementById('recipeDandruff1')
  let recipeDandruff2 =document.getElementById('recipeDandruff2')
  let recipeDandruff3 =document.getElementById('recipeDandruff3')
  let recipeDandruff4 =document.getElementById('recipeDandruff4')
  let recipeDandruff5 =document.getElementById('recipeDandruff5')
  let recipeDandruff6 =document.getElementById('recipeDandruff6')
  let recipeDandruff7 =document.getElementById('recipeDandruff7')
  
  
  
  
  const elements = document.querySelectorAll('.mome');
  elements.forEach(element => {
  element.addEventListener('click', () => {
    if(element.id === 'one21'){
      document.getElementById('footer').style.display='none'
    recipeDandruff1.style.display='flex';
    recipe.style.display='none'
    document.getElementById('exetrecipeDandruff1').addEventListener('click' ,()=>{
    recipeDandruff1.style.display='none';
    recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

    })
    }
    if(element.id === 'one22'){
      document.getElementById('footer').style.display='none'
      recipeDandruff2.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeDandruff2').addEventListener('click' ,()=>{
      recipeDandruff2.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'one23'){
      document.getElementById('footer').style.display='none'
      recipeDandruff3.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeDandruff3').addEventListener('click' ,()=>{
      recipeDandruff3.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'one24'){
      document.getElementById('footer').style.display='none'
      recipeDandruff4.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeDandruff4').addEventListener('click' ,()=>{
      recipeDandruff4.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'one25'){
      document.getElementById('footer').style.display='none'
      recipeDandruff5.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeDandruff5').addEventListener('click' ,()=>{
      recipeDandruff5.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'one26'){
      document.getElementById('footer').style.display='none'
      recipeDandruff6.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeDandruff6').addEventListener('click' ,()=>{
      recipeDandruff6.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'one27'){
      document.getElementById('footer').style.display='none'
      recipeDandruff7.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeDandruff7').addEventListener('click' ,()=>{
      recipeDandruff7.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
   window.scroll(0,0)
  });
  });
  
  
  
  
  
  
  
  
  //----------------------------------------------------الوصفه 2------------------------------------
  
  //
  let recipeSilkhair1 =document.getElementById('recipeSilkhair1')
  let recipeSilkhair2 =document.getElementById('recipeSilkhair2')
  let recipeSilkhair3 =document.getElementById('recipeSilkhair3')
  let recipeSilkhair4 =document.getElementById('recipeSilkhair4')
  let recipeSilkhair5 =document.getElementById('recipeSilkhair5')
  let recipeSilkhair6 =document.getElementById('recipeSilkhair6')
  let recipeSilkhair7 =document.getElementById('recipeSilkhair7')
  
  
  
  
  
  const elements2 = document.querySelectorAll('.mome2');
  elements2.forEach(element => {
  element.addEventListener('click', () => {
    if(element.id === 'two21'){
      document.getElementById('footer').style.display='none'
      recipeSilkhair1.style.display='flex';
    recipe.style.display='none'
    document.getElementById('exetrecipeSilkhair1').addEventListener('click' ,()=>{
      recipeSilkhair1.style.display='none';
    recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

    })
    }
    if(element.id === 'two22'){
      document.getElementById('footer').style.display='none'
      recipeSilkhair2.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeSilkhair2').addEventListener('click' ,()=>{
        recipeSilkhair2.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'two23'){
      document.getElementById('footer').style.display='none'
      recipeSilkhair3.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeSilkhair3').addEventListener('click' ,()=>{
      recipeSilkhair3.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'two24'){
      document.getElementById('footer').style.display='none'
      recipeSilkhair4.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeSilkhair4').addEventListener('click' ,()=>{
        recipeSilkhair4.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'two25'){
      document.getElementById('footer').style.display='none'
      recipeSilkhair5.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeSilkhair5').addEventListener('click' ,()=>{
        recipeSilkhair5.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'two26'){
    document.getElementById('footer').style.display='none'
      recipeSilkhair6.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeSilkhair6').addEventListener('click' ,()=>{
        recipeSilkhair6.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'two27'){
      document.getElementById('footer').style.display='none'
      recipeSilkhair7.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeSilkhair7').addEventListener('click' ,()=>{
        recipeSilkhair7.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
   window.scroll(0,0)
  });
  });
  
  
  
  
  //----------------------------------------------------الوصفه 3------------------------------------
  
  
  
  let recipeHairloss1 =document.getElementById('recipeHairloss1')
  let recipeHairloss2 =document.getElementById('recipeHairloss2')
  let recipeHairloss3 =document.getElementById('recipeHairloss3')
  let recipeHairloss4 =document.getElementById('recipeHairloss4')
  let recipeHairloss5 =document.getElementById('recipeHairloss5')
  let recipeHairloss6 =document.getElementById('recipeHairloss6')
  let recipeHairloss7 =document.getElementById('recipeHairloss7')
  
  
  const elements3 = document.querySelectorAll('.mome3');
  elements3.forEach(element => {
  element.addEventListener('click', () => {
    if(element.id === 'three21'){
      document.getElementById('footer').style.display='none'
      recipeHairloss1.style.display='flex';
    recipe.style.display='none'
    document.getElementById('exetrecipeHairloss1').addEventListener('click' ,()=>{
      recipeHairloss1.style.display='none';
    recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

    })
    }
    if(element.id === 'three22'){
      document.getElementById('footer').style.display='none'
      recipeHairloss2.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHairloss2').addEventListener('click' ,()=>{
        recipeHairloss2.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'three23'){
      document.getElementById('footer').style.display='none'
      recipeHairloss3.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHairloss3').addEventListener('click' ,()=>{
      recipeDandruff3.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'three24'){
      document.getElementById('footer').style.display='none'
      recipeHairloss4.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHairloss4').addEventListener('click' ,()=>{
        recipeHairloss4.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'three25'){
      document.getElementById('footer').style.display='none'
      recipeHairloss5.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHairloss5').addEventListener('click' ,()=>{
        recipeHairloss5.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'three26'){
      document.getElementById('footer').style.display='none'
      recipeHairloss6.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHairloss6').addEventListener('click' ,()=>{
        recipeHairloss6.style.display='none';
      recipe.style.display='flex'
      document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'three27'){
      document.getElementById('footer').style.display='none'
      recipeHairloss7.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHairloss7').addEventListener('click' ,()=>{
        recipeHairloss7.style.display='none';
      recipe.style.display='flex'
      document.getElementById('footer').style.display='flex'

      })
    }
   window.scroll(0,0)
  });
  });
  
  
  //----------------------------------------------------الوصفه 4------------------------------------
  
  
  
  let recipecurlyhair1 =document.getElementById('recipecurlyhair1')
  let recipecurlyhair2 =document.getElementById('recipecurlyhair2')
  let recipecurlyhair3 =document.getElementById('recipecurlyhair3')
  let recipecurlyhair4 =document.getElementById('recipecurlyhair4')
  let recipecurlyhair5 =document.getElementById('recipecurlyhair5')
  let recipecurlyhair6 =document.getElementById('recipecurlyhair6')
  let recipecurlyhair7 =document.getElementById('recipecurlyhair7')
  
  
  const elements4 = document.querySelectorAll('.mome4');
  elements4.forEach(element => {
  element.addEventListener('click', () => {
    if(element.id === 'four21'){
      document.getElementById('footer').style.display='none'
      recipecurlyhair1.style.display='flex';
    recipe.style.display='none'
    document.getElementById('exetrecipecurlyhair1').addEventListener('click' ,()=>{
      recipecurlyhair1.style.display='none';
    recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

    })
    }
    if(element.id === 'four22'){
      document.getElementById('footer').style.display='none'
      recipecurlyhair2.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipecurlyhair2').addEventListener('click' ,()=>{
        recipecurlyhair2.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'four23'){
      document.getElementById('footer').style.display='none'
      recipecurlyhair3.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipecurlyhair3').addEventListener('click' ,()=>{
        recipecurlyhair3.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'four24'){
      document.getElementById('footer').style.display='none'
      recipecurlyhair4.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipecurlyhair4').addEventListener('click' ,()=>{
        recipecurlyhair4.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'four25'){
      document.getElementById('footer').style.display='none'
      recipecurlyhair5.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipecurlyhair5').addEventListener('click' ,()=>{
        recipecurlyhair5.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'four26'){
      document.getElementById('footer').style.display='none'
      recipecurlyhair6.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipecurlyhair6').addEventListener('click' ,()=>{
        recipecurlyhair6.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'four27'){
      document.getElementById('footer').style.display='none'
      recipecurlyhair7.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipecurlyhair7').addEventListener('click' ,()=>{
        recipecurlyhair7.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
   window.scroll(0,0)
  });
  });
  
  
  //----------------------------------------------------الوصفه 5------------------------------------
  
  
  
  let recipedryhair1 =document.getElementById('recipedryhair1')
  let recipedryhair2 =document.getElementById('recipedryhair2')
  let recipedryhair3 =document.getElementById('recipedryhair3')
  let recipedryhair4 =document.getElementById('recipedryhair4')
  let recipedryhair5 =document.getElementById('recipedryhair5')
  let recipedryhair6 =document.getElementById('recipedryhair6')
  let recipedryhair7 =document.getElementById('recipedryhair7')
  
  
  const elements5 = document.querySelectorAll('.mome5');
  elements5.forEach(element => {
  element.addEventListener('click', () => {
    if(element.id === 'five21'){
      document.getElementById('footer').style.display='none'
      recipedryhair1.style.display='flex';
    recipe.style.display='none'
    document.getElementById('exetrecipedryhair1').addEventListener('click' ,()=>{
      recipedryhair1.style.display='none';
    recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

    })
    }
    if(element.id === 'five22'){
      document.getElementById('footer').style.display='none'
      recipedryhair2.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipedryhai2').addEventListener('click' ,()=>{
        recipedryhair2.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'five23'){
      document.getElementById('footer').style.display='none'
      recipedryhair3.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipedryhair3').addEventListener('click' ,()=>{
        recipedryhair3.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'five24'){
    document.getElementById('footer').style.display='none'
      recipedryhair4.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipedryhair4').addEventListener('click' ,()=>{
        recipedryhair4.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'five25'){
      document.getElementById('footer').style.display='none'
      recipedryhair5.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipedryhair5').addEventListener('click' ,()=>{
        recipedryhair5.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'five26'){
      document.getElementById('footer').style.display='none'
      recipedryhair6.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipedryhair6').addEventListener('click' ,()=>{
        recipedryhair6.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'five27'){
      document.getElementById('footer').style.display='none'
      recipedryhair7.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipedryhair7').addEventListener('click' ,()=>{
        recipedryhair7.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'
      })
    }
   window.scroll(0,0)
  });
  });
  
  
  //----------------------------------------------------الوصفه 6------------------------------------
  
  
  
  let recipeHeadlice1 =document.getElementById('recipeHeadlice1')
  let recipeHeadlice2 =document.getElementById('recipeHeadlice2')
  let recipeHeadlice3 =document.getElementById('recipeHeadlice3')
  let recipeHeadlice4 =document.getElementById('recipeHeadlice4')
  let recipeHeadlice5 =document.getElementById('recipeHeadlice5')
  let recipeHeadlice6 =document.getElementById('recipeHeadlice6')
  let recipeHeadlice7 =document.getElementById('recipeHeadlice7')
  
  
  const elements6 = document.querySelectorAll('.mome6');
  elements6.forEach(element => {
  element.addEventListener('click', () => {
    if(element.id === 'six21'){
      document.getElementById('footer').style.display='none'
      recipeHeadlice1.style.display='flex';
    recipe.style.display='none'
    document.getElementById('exetrecipeHeadlice1').addEventListener('click' ,()=>{
      recipeHeadlice1.display='none';
    recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

    })
    }
    if(element.id === 'six22'){
      document.getElementById('footer').style.display='none'
      recipeHeadlice2.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHeadlice2').addEventListener('click' ,()=>{
        recipeHeadlice2.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'six23'){
      document.getElementById('footer').style.display='none'
      recipeHeadlice3.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHeadlice3').addEventListener('click' ,()=>{
        recipeHeadlice3.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'six24'){
      document.getElementById('footer').style.display='none'
      recipeHeadlice4.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHeadlice4').addEventListener('click' ,()=>{
        recipeHeadlice4.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'six25'){
      document.getElementById('footer').style.display='none'
      recipeHeadlice5.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHeadlice5').addEventListener('click' ,()=>{
        recipeHeadlice5.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'six26'){
      document.getElementById('footer').style.display='none'
      recipeHeadlice6.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHeadlice6').addEventListener('click' ,()=>{
        recipeHeadlice6.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'

      })
    }
    if(element.id === 'six27'){
      recipeHeadlice7.style.display='flex';
      recipe.style.display='none'
      document.getElementById('exetrecipeHeadlice7').addEventListener('click' ,()=>{
        recipeHeadlice7.style.display='none';
      recipe.style.display='flex'
    document.getElementById('footer').style.display='flex'
    document.getElementById('footer').style.display='none'

      })
    }
   window.scroll(0,0)
  });
  });
