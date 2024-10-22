function debounce(func, delay, immediately) {
    // let timer =null;
    // return function(){
    //     clearTimeout(timer);
    //     if(immediately){
    //         func.apply(this);
    //         immediately = false;
    //         timer = setTimeout(() => {
    //             immediately = true
    //         }, delay);

    //     }else{
    //         timer = setTimeout(()=>{
    //             func.apply(this)
    //             immediately = true
    //         },delay)
    //     }
    // }

    let timer = null;
    return (...args) => {
        if (immediate) {
            clearTimeout(timer);
            func.apply(this, args);
            timer = setTimeout(() => { timer = null; }, delay);
        } else {
            if (timer) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                    timer = null;
                }, delay);
            } else {
                timer = setTimeout(() => {
                    func.apply(this, args);
                    timer = null;
                }, delay);
            }
        }
    }
}