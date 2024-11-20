const displayContent=(value)=>{
    result.value+=value
}
//clear
const calcClear=()=>{
    result.value=''
}
//output
const calcOutput=()=>{
    result.value=eval( result.value)

}
const removeLastDigit=()=>{
    result.value= result.value.slice(0,-1)

}