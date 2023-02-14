class{
    constructor()
    {
        
    }
}





if(touches.length == 0){
    return null;
}else{
    const offsets = touches.map(e=>e.offset);
    const minOffset = Math.min(...offsets);
    return touches.find(e=>e.offset == minOffset);
}