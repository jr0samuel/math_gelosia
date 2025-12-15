function onlynumber(el){
    el.value = el.value.replace(/[^0-9]/g,"");
    el.addEventListener("keydown",e=>{
        if(e.key===" "){
            e.preventDefault();
        };
    });
    el.addEventListener("beforeinput",e=>{
        if(e.inputType==="insertText"&&e.data===" "){
            e.preventDefault();
        };
        if(e.data && /[^0-9]/.test(e.data)){
            e.preventDefault();
        };
    });
};

document.querySelector('.f1').addEventListener('keydown', function(e){
    if (e.key === 'Enter') buildGelosia();
});
document.querySelector('.f2').addEventListener('keydown',function(e){
    if(e.key==='Enter')buildGelosia();
});

document.querySelector('.build').addEventListener("keydown", function(event){
  if ((event.key === "Enter" || event.key === " ") && document.activeElement.tagName === "BUTTON"){
    event.preventDefault();
    document.activeElement.classList.add("pressed");
  };
});
document.querySelector('.build').addEventListener("keyup", function(event){
  if ((event.key === "Enter" || event.key === " ") && document.activeElement.tagName === "BUTTON"){
    document.activeElement.classList.remove("pressed");
    buildGelosia();
  };
});
document.querySelector('.build').addEventListener('touchstart', function(e){
    e.preventDefault();
    this.classList.add("pressed");
});
document.querySelector('.build').addEventListener('touchend', function(){
    buildGelosia();
    this.classList.remove("pressed");
});
document.querySelector('.build').addEventListener('mousedown', function(e){
    e.preventDefault();
    this.classList.add("pressed");
});
document.querySelector('.build').addEventListener('mouseup', function(){
    buildGelosia();
    this.classList.remove("pressed");
});

function buildGelosia(){
    let f1_2 = parseInt(document.querySelector('.f1').value) + 2;
    let f2_2 = parseInt(document.querySelector('.f2').value) + 2;
    let gelosia = document.querySelector('.jelozia');
    gelosia.innerHTML = '';
    gelosia.style.display = "grid";
    gelosia.style.gridTemplateRows = `repeat(${f2_2}, auto)`;
    gelosia.style.gridTemplateColumns = `repeat(${f1_2}, auto)`;
    for(let l = 1; l <= f2_2; l ++){
        for(let c = 1; c <= f1_2; c ++){
            const cell = document.createElement("div");
            cell.className = "cell";
            if(l === 1 && c === 1 || l === 1 && c === f1_2 || l === f2_2 && c === 1 || l === f2_2 && c === f1_2){
                cell.textContent = "#######";
                cell.style.backgroundColor = "#666";
                cell.style.color = "#fff";
            };
            if(l === 1 && c > 1 && c < f1_2 || l > 1 && l < f2_2 && c === f1_2 || l > 1 && l < f2_2 && c === 1 || l === f2_2 && c > 1 && c < f1_2){
                const innerValorUnique = document.createElement("div");
                innerValorUnique.className = "inner-valor-unique";
                innerValorUnique.setAttribute("contenteditable", "true");
                innerValorUnique.setAttribute("oninput", "return onlynumber(event)");
                innerValorUnique.classList.add("inner");
                cell.appendChild(innerValorUnique);
            };
            if(f2_2 === 3 && f1_2 === 3 && (l === 2 && c > 1 && c < f1_2)){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 === 3 && f1_2 >= 4 && (l === 2 && c > 1 && c < (f1_2 - 1))){
                const innerValor3_1 = document.createElement("div");
                innerValor3_1.className = "inner-valor-3-1";
                innerValor3_1.setAttribute("contenteditable", "true");
                innerValor3_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_1.classList.add("inner");
                const innerValor3_11 = document.createElement("div");
                innerValor3_11.className = "inner-valor-3-11";
                innerValor3_11.setAttribute("contenteditable", "true");
                innerValor3_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_11.classList.add("inner");
                const innerBarra3 = document.createElement("div");
                innerBarra3.className = "barra-3";
                const innerValor3_2 = document.createElement("div");
                innerValor3_2.className = "inner-valor-3-2";
                innerValor3_2.setAttribute("contenteditable", "true");
                innerValor3_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_2.classList.add("inner");
                const innerValor3_22 = document.createElement("div");
                innerValor3_22.className = "inner-valor-3-22";
                innerValor3_22.setAttribute("tabindex", "-1");
                cell.appendChild(innerValor3_1);
                cell.appendChild(innerValor3_11);
                cell.appendChild(innerBarra3);
                cell.appendChild(innerValor3_2);
                cell.appendChild(innerValor3_22);
            };
            if(f2_2 === 3 && f1_2 > 3 && (l === 2 && c === (f1_2 - 1))){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 === 4 && f1_2 === 3 && (l === 2 && c > 1 && c < f1_2)){
                const innerValor3_1 = document.createElement("div");
                innerValor3_1.className = "inner-valor-3-1";
                innerValor3_1.setAttribute("contenteditable", "true");
                innerValor3_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_1.classList.add("inner");
                const innerValor3_11 = document.createElement("div");
                innerValor3_11.className = "inner-valor-3-11";
                innerValor3_11.setAttribute("contenteditable", "true");
                innerValor3_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_11.classList.add("inner");
                const innerBarra3 = document.createElement("div");
                innerBarra3.className = "barra-3";
                const innerValor3_2 = document.createElement("div");
                innerValor3_2.className = "inner-valor-3-2";
                innerValor3_2.setAttribute("contenteditable", "true");
                innerValor3_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_2.classList.add("inner");
                const innerValor3_22 = document.createElement("div");
                innerValor3_22.className = "inner-valor-3-22";
                innerValor3_22.setAttribute("tabindex", "-1");
                cell.appendChild(innerValor3_1);
                cell.appendChild(innerValor3_11);
                cell.appendChild(innerBarra3);
                cell.appendChild(innerValor3_2);
                cell.appendChild(innerValor3_22);
            };
            if(f2_2 === 4 && f1_2 === 3 && (l > 2 && l < f2_2 && c > 1 && c < f1_2)){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 === 4 && f1_2 === 4 && (l > 2 && l < f2_2 && c > 1 && c < f1_2)){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 === 4 && f1_2 === 4 && (l === 2 && c > 1 && c < f1_2)){
                const innerValor3_1 = document.createElement("div");
                innerValor3_1.className = "inner-valor-3-1";
                innerValor3_1.setAttribute("contenteditable", "true");
                innerValor3_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_1.classList.add("inner");
                const innerValor3_11 = document.createElement("div");
                innerValor3_11.className = "inner-valor-3-11";
                innerValor3_11.setAttribute("contenteditable", "true");
                innerValor3_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_11.classList.add("inner");
                const innerBarra3 = document.createElement("div");
                innerBarra3.className = "barra-3";
                const innerValor3_2 = document.createElement("div");
                innerValor3_2.className = "inner-valor-3-2";
                innerValor3_2.setAttribute("contenteditable", "true");
                innerValor3_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_2.classList.add("inner");
                const innerValor3_22 = document.createElement("div");
                innerValor3_22.className = "inner-valor-3-22";
                innerValor3_22.setAttribute("tabindex", "-1");
                cell.appendChild(innerValor3_1);
                cell.appendChild(innerValor3_11);
                cell.appendChild(innerBarra3);
                cell.appendChild(innerValor3_2);
                cell.appendChild(innerValor3_22);
            };
            if(f2_2 > 4 && f1_2 > 4 && l === 2 && c === (f1_2 - 1)){
                const innerValor4_1 = document.createElement("div");
                innerValor4_1.className = "inner-valor-4-1";
                innerValor4_1.setAttribute("contenteditable", "true");
                innerValor4_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_1.classList.add("inner");
                const innerValor4_11 = document.createElement("div");
                innerValor4_11.className = "inner-valor-4-11";
                innerValor4_11.setAttribute("contenteditable", "true");
                innerValor4_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_11.classList.add("inner");
                const innerBarra4 = document.createElement("div");
                innerBarra4.className = "barra-4";
                const innerValor4_2 = document.createElement("div");
                innerValor4_2.className = "inner-valor-4-2";
                innerValor4_2.setAttribute("contenteditable", "true");
                innerValor4_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_2.classList.add("inner");
                const innerValor4_22 = document.createElement("div");
                innerValor4_22.className = "inner-valor-4-22";
                innerValor4_22.setAttribute("contenteditable", "true");
                innerValor4_22.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_22.classList.add("inner");
                cell.appendChild(innerValor4_1);
                cell.appendChild(innerValor4_11);
                cell.appendChild(innerBarra4);
                cell.appendChild(innerValor4_2);
                cell.appendChild(innerValor4_22);
            };
            if(f2_2 > 4 && f1_2 > 4 && l === 2 && c > 1 && c < (f1_2 - 1)){
                const innerValor3_1 = document.createElement("div");
                innerValor3_1.className = "inner-valor-3-1";
                innerValor3_1.setAttribute("contenteditable", "true");
                innerValor3_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_1.classList.add("inner");
                const innerValor3_11 = document.createElement("div");
                innerValor3_11.className = "inner-valor-3-11";
                innerValor3_11.setAttribute("contenteditable", "true");
                innerValor3_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_11.classList.add("inner");
                const innerBarra3 = document.createElement("div");
                innerBarra3.className = "barra-3";
                const innerValor3_2 = document.createElement("div");
                innerValor3_2.className = "inner-valor-3-2";
                innerValor3_2.setAttribute("contenteditable", "true");
                innerValor3_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_2.classList.add("inner");
                const innerValor3_22 = document.createElement("div");
                innerValor3_22.className = "inner-valor-3-22";
                innerValor3_22.setAttribute("tabindex", "-1");
                cell.appendChild(innerValor3_1);
                cell.appendChild(innerValor3_11);
                cell.appendChild(innerBarra3);
                cell.appendChild(innerValor3_2);
                cell.appendChild(innerValor3_22);
            };
            if((f2_2 > 4 && f2_2 < 6) && f1_2 > 4 && l > 2 && l < f2_2 && c > 1 && c < f1_2){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 === 4 && f1_2 >= 5 && l === 3 && c > 1 && c < f1_2){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 === 4 && f1_2 >= 5 && l === 2 && c > 1 && c < f1_2){
                const innerValor3_1 = document.createElement("div");
                innerValor3_1.className = "inner-valor-3-1";
                innerValor3_1.setAttribute("contenteditable", "true");
                innerValor3_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_1.classList.add("inner");
                const innerValor3_11 = document.createElement("div");
                innerValor3_11.className = "inner-valor-3-11";
                innerValor3_11.setAttribute("contenteditable", "true");
                innerValor3_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_11.classList.add("inner");
                const innerBarra3 = document.createElement("div");
                innerBarra3.className = "barra-3";
                const innerValor3_2 = document.createElement("div");
                innerValor3_2.className = "inner-valor-3-2";
                innerValor3_2.setAttribute("contenteditable", "true");
                innerValor3_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_2.classList.add("inner");
                const innerValor3_22 = document.createElement("div");
                innerValor3_22.className = "inner-valor-3-22";
                innerValor3_22.setAttribute("tabindex", "-1");
                cell.appendChild(innerValor3_1);
                cell.appendChild(innerValor3_11);
                cell.appendChild(innerBarra3);
                cell.appendChild(innerValor3_2);
                cell.appendChild(innerValor3_22);
            };
            if(f2_2 === 5 && f1_2 === 4 && l > 2 && l < f2_2 && c > 1 && c < f1_2){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 === 5 && f1_2 === 4 && l === 2 && c === 2){
                const innerValor3_1 = document.createElement("div");
                innerValor3_1.className = "inner-valor-3-1";
                innerValor3_1.setAttribute("contenteditable", "true");
                innerValor3_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_1.classList.add("inner");
                const innerValor3_11 = document.createElement("div");
                innerValor3_11.className = "inner-valor-3-11";
                innerValor3_11.setAttribute("contenteditable", "true");
                innerValor3_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_11.classList.add("inner");
                const innerBarra3 = document.createElement("div");
                innerBarra3.className = "barra-3";
                const innerValor3_2 = document.createElement("div");
                innerValor3_2.className = "inner-valor-3-2";
                innerValor3_2.setAttribute("contenteditable", "true");
                innerValor3_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_2.classList.add("inner");
                const innerValor3_22 = document.createElement("div");
                innerValor3_22.className = "inner-valor-3-22";
                innerValor3_22.setAttribute("tabindex", "-1");
                cell.appendChild(innerValor3_1);
                cell.appendChild(innerValor3_11);
                cell.appendChild(innerBarra3);
                cell.appendChild(innerValor3_2);
                cell.appendChild(innerValor3_22);
            };
            if(f2_2 === 5 && f1_2 === 4 && l === 2 && c === (f1_2 - 1)){
                const innerValor4_1 = document.createElement("div");
                innerValor4_1.className = "inner-valor-4-1";
                innerValor4_1.setAttribute("contenteditable", "true");
                innerValor4_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_1.classList.add("inner");
                const innerValor4_11 = document.createElement("div");
                innerValor4_11.className = "inner-valor-4-11";
                innerValor4_11.setAttribute("contenteditable", "true");
                innerValor4_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_11.classList.add("inner");
                const innerBarra4 = document.createElement("div");
                innerBarra4.className = "barra-4";
                const innerValor4_2 = document.createElement("div");
                innerValor4_2.className = "inner-valor-4-2";
                innerValor4_2.setAttribute("contenteditable", "true");
                innerValor4_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_2.classList.add("inner");
                const innerValor4_22 = document.createElement("div");
                innerValor4_22.className = "inner-valor-4-22";
                innerValor4_22.setAttribute("contenteditable", "true");
                innerValor4_22.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_22.classList.add("inner");
                cell.appendChild(innerValor4_1);
                cell.appendChild(innerValor4_11);
                cell.appendChild(innerBarra4);
                cell.appendChild(innerValor4_2);
                cell.appendChild(innerValor4_22);
            };
            if(f2_2 === 5 && f1_2 === 3 && l === 2 && c === (f1_2 - 1)){
                const innerValor4_1 = document.createElement("div");
                innerValor4_1.className = "inner-valor-4-1";
                innerValor4_1.setAttribute("contenteditable", "true");
                innerValor4_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_1.classList.add("inner");
                const innerValor4_11 = document.createElement("div");
                innerValor4_11.className = "inner-valor-4-11";
                innerValor4_11.setAttribute("contenteditable", "true");
                innerValor4_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_11.classList.add("inner");
                const innerBarra4 = document.createElement("div");
                innerBarra4.className = "barra-4";
                const innerValor4_2 = document.createElement("div");
                innerValor4_2.className = "inner-valor-4-2";
                innerValor4_2.setAttribute("contenteditable", "true");
                innerValor4_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_2.classList.add("inner");
                const innerValor4_22 = document.createElement("div");
                innerValor4_22.className = "inner-valor-4-22";
                innerValor4_22.setAttribute("contenteditable", "true");
                innerValor4_22.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_22.classList.add("inner");
                cell.appendChild(innerValor4_1);
                cell.appendChild(innerValor4_11);
                cell.appendChild(innerBarra4);
                cell.appendChild(innerValor4_2);
                cell.appendChild(innerValor4_22);
            };
            if(f2_2 === 5 && f1_2 === 3 && l > 2 && l < f2_2 && c === (f1_2 - 1)){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 >= 6 && (f1_2 >= 5 || f1_2 === 3 || f1_2 === 4) && l > 2 && l < (f2_2 - 2) && c === (f1_2 - 1)){
                const innerValor3a_1 = document.createElement("div");
                innerValor3a_1.className = "inner-valor-3a-1";
                innerValor3a_1.setAttribute("contenteditable", "true");
                innerValor3a_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor3a_1.classList.add("inner");
                const innerValor3a_11 = document.createElement("div");
                innerValor3a_11.className = "inner-valor-3a-11";
                innerValor3a_11.setAttribute("tabindex", "-1");
                const innerBarra3a = document.createElement("div");
                innerBarra3a.className = "barra-3a";
                const innerValor3a_2 = document.createElement("div");
                innerValor3a_2.className = "inner-valor-3a-2";
                innerValor3a_2.setAttribute("contenteditable", "true");
                innerValor3a_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor3a_2.classList.add("inner");
                const innerValor3a_22 = document.createElement("div");
                innerValor3a_22.className = "inner-valor-3a-22";
                innerValor3a_22.setAttribute("contenteditable", "true");
                innerValor3a_22.setAttribute("oninput", "return onlynumber(event)");
                innerValor3a_22.classList.add("inner");
                cell.appendChild(innerValor3a_1);
                cell.appendChild(innerValor3a_11);
                cell.appendChild(innerBarra3a);
                cell.appendChild(innerValor3a_2);
                cell.appendChild(innerValor3a_22);
            };
            if(f2_2 >= 6 && (f1_2 >= 5 || f1_2 === 3 || f1_2 === 4) && l > 2 && l < f2_2 && c > 1 && c < (f1_2 - 1)){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 >= 6 && (f1_2 >= 5 || f1_2 === 3 || f1_2 === 4) && l > (f2_2 - 3) && l < f2_2 && c === (f1_2 - 1)){
                const innerValor2_1 = document.createElement("div");
                innerValor2_1.className = "inner-valor-2-1";
                innerValor2_1.setAttribute("contenteditable", "true");
                innerValor2_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_1.classList.add("inner");
                const innerBarra2 = document.createElement("div");
                innerBarra2.className = "barra-2";
                const innerValor2_2 = document.createElement("div");
                innerValor2_2.className = "inner-valor-2-2";
                innerValor2_2.setAttribute("contenteditable", "true");
                innerValor2_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor2_2.classList.add("inner");
                cell.appendChild(innerValor2_1);
                cell.appendChild(innerBarra2);
                cell.appendChild(innerValor2_2);
            };
            if(f2_2 >= 6 && f1_2 === 4 && l === 2 && c === 2){
                const innerValor3_1 = document.createElement("div");
                innerValor3_1.className = "inner-valor-3-1";
                innerValor3_1.setAttribute("contenteditable", "true");
                innerValor3_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_1.classList.add("inner");
                const innerValor3_11 = document.createElement("div");
                innerValor3_11.className = "inner-valor-3-11";
                innerValor3_11.setAttribute("contenteditable", "true");
                innerValor3_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_11.classList.add("inner");
                const innerBarra3 = document.createElement("div");
                innerBarra3.className = "barra-3";
                const innerValor3_2 = document.createElement("div");
                innerValor3_2.className = "inner-valor-3-2";
                innerValor3_2.setAttribute("contenteditable", "true");
                innerValor3_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor3_2.classList.add("inner");
                const innerValor3_22 = document.createElement("div");
                innerValor3_22.className = "inner-valor-3-22";
                innerValor3_22.setAttribute("tabindex", "-1");
                cell.appendChild(innerValor3_1);
                cell.appendChild(innerValor3_11);
                cell.appendChild(innerBarra3);
                cell.appendChild(innerValor3_2);
                cell.appendChild(innerValor3_22);
            };
            if(f2_2 >= 6 && (f1_2 === 3 || f1_2 === 4) && l === 2 && c === (f1_2 - 1)){
                const innerValor4_1 = document.createElement("div");
                innerValor4_1.className = "inner-valor-4-1";
                innerValor4_1.setAttribute("contenteditable", "true");
                innerValor4_1.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_1.classList.add("inner");
                const innerValor4_11 = document.createElement("div");
                innerValor4_11.className = "inner-valor-4-11";
                innerValor4_11.setAttribute("contenteditable", "true");
                innerValor4_11.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_11.classList.add("inner");
                const innerBarra4 = document.createElement("div");
                innerBarra4.className = "barra-4";
                const innerValor4_2 = document.createElement("div");
                innerValor4_2.className = "inner-valor-4-2";
                innerValor4_2.setAttribute("contenteditable", "true");
                innerValor4_2.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_2.classList.add("inner");
                const innerValor4_22 = document.createElement("div");
                innerValor4_22.className = "inner-valor-4-22";
                innerValor4_22.setAttribute("contenteditable", "true");
                innerValor4_22.setAttribute("oninput", "return onlynumber(event)");
                innerValor4_22.classList.add("inner");
                cell.appendChild(innerValor4_1);
                cell.appendChild(innerValor4_11);
                cell.appendChild(innerBarra4);
                cell.appendChild(innerValor4_2);
                cell.appendChild(innerValor4_22);
            };
            gelosia.appendChild(cell);
            document.querySelectorAll('[contenteditable="true"]').forEach(el=>{
                el.addEventListener('keydown',e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();};});
                el.addEventListener("input",()=>{
                    const sel = window.getSelection();
                    const range = sel.getRangeAt(0);
                    const cursorPos = range.startOffset;
                    el.textContent = el.textContent.replace(/\D/g,"");
                    const newRange = document.createRange();
                    newRange.setStart(el.firstChild || el, Math.min(cursorPos, el.textContent.length));
                    newRange.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(newRange);
                });
                el.addEventListener("beforeinput",e=>{
                    if(e.inputType==="insertText"&&e.data===" "){
                        e.preventDefault();
                    };
                    if(e.data && /[^0-9]/.test(e.data)){
                        e.preventDefault();
                    };
                });
            });
        };
    };
    document.querySelector('.build').blur();
    if(f1_2<=2||f2_2<=2){gelosia.innerHTML="";}
    if(f1_2>2&&f2_2>2){
        document.querySelector('.finish').style.display="inline-block";
        document.querySelector('.finish').setAttribute("tabindex","0");
        document.querySelector('.again').style.display="none";
    }else{
        document.querySelector('.finish').style.display="none";
    };
};

function finishQuestion(){
    let inners = document.querySelectorAll('[contenteditable="true"]');
    inners.forEach((inner) => {
        inner.setAttribute("contenteditable", "false");
    });
    document.querySelector('.again').style.display="inline-block";
    document.querySelector('.finish').setAttribute("tabindex","0");
    document.querySelector('.again').setAttribute("tabindex","0");
};
function backQuestion(){
    let inners = document.querySelectorAll('[contenteditable="false"]');
    inners.forEach((inner) => {
        inner.setAttribute("contenteditable", "true");
    });
    document.querySelector('.finish').setAttribute("tabindex","0");
    document.querySelector('.again').setAttribute("tabindex","0");
};

document.querySelector('.finish').addEventListener('keydown',function(evt){
    if((evt.key === "Enter" || evt.key === " ") && document.activeElement.tagName === "BUTTON"){
        evt.preventDefault();
        document.activeElement.classList.add("pressed");
    };
});
document.querySelector('.finish').addEventListener('keyup',function(evt){
    if((evt.key === "Enter" || evt.key === " ") && document.activeElement.tagName === "BUTTON"){
        document.activeElement.classList.remove("pressed");
        finishQuestion();
        this.blur();
    };
});
document.querySelector('.again').addEventListener('keydown',function(evt){
    if((evt.key === "Enter" || evt.key === " ") && document.activeElement.tagName === "BUTTON"){
        evt.preventDefault();
        document.activeElement.classList.add("pressed");
    };
});
document.querySelector('.again').addEventListener('keyup',function(evt){
    if((evt.key === "Enter" || evt.key === " ") && document.activeElement.tagName === "BUTTON"){
        document.activeElement.classList.remove("pressed");
        backQuestion();
        this.blur();
    };
});

const btns = document.querySelector('.buttons');
btns.addEventListener('touchstart',e=>{
    if(e.target.closest('.finish')){
        const btn = e.target.closest('.finish');
        e.preventDefault();
        btn.classList.add('pressed');
        btn.style.backgroundColor = 'rgb(100,100,100)';
        btn.setAttribute("tabindex","0");
    };
});
btns.addEventListener('touchend',e=>{
    if(e.target.closest('.finish')){
        const btn = e.target.closest('.finish');
        btn.click();
        btn.classList.remove('pressed');
        btn.style.backgroundColor = 'rgb(150,150,150)';
        btn.setAttribute("tabindex","0");
    };
});
btns.addEventListener('touchstart',e=>{
    if(e.target.closest('.again')){
        const btn = e.target.closest('.again');
        e.preventDefault();
        btn.classList.add('pressed');
        btn.style.backgroundColor = 'rgb(100,100,100)';
        btn.setAttribute("tabindex","0");
    };
});
btns.addEventListener('touchend',e=>{
    if(e.target.closest('.again')){
        const btn = e.target.closest('.again');
        btn.click();
        btn.classList.remove('pressed');
        btn.style.backgroundColor = 'rgb(150,150,150)';
        btn.setAttribute("tabindex","0");
    };
});

document.querySelector('.finish').addEventListener('mousedown', function(e){
    e.preventDefault();
    this.classList.add("pressed");
});
document.querySelector('.finish').addEventListener('mouseup', function(){
    finishQuestion();
    this.classList.remove("pressed");
});
document.querySelector('.again').addEventListener('mousedown', function(e){
    e.preventDefault();
    this.classList.add("pressed");
});
document.querySelector('.again').addEventListener('mouseup', function(){
    backQuestion();
    this.classList.remove("pressed");
});
