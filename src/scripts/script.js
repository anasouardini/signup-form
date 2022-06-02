const passFields = document.querySelectorAll("[passwd-field]");

passFields.forEach(passField => {
    passField.addEventListener("focusout", e => {
        if(passFields[0].value != "" && passFields[1].value != ""){
            if(passFields[0].value != passFields[1].value){
                passFields.forEach(elm => {
                    elm.style.cssText="border: 1px solid red;";
                    elm.parentNode.setAttribute("class", "error");
                })
                
            }else{
                passFields.forEach(elm => {
                    elm.style.cssText="border: 1px solid green;";
                    elm.parentNode.setAttribute("class", "");
                })
            }
        }else{
            passFields.forEach(elm => {elm.style.cssText="border: 1px solid #4d58f0;";})
        }
    })
})

