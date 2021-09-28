function changeColor(item){
    var x = document.getElementsByClassName('item')
    for (let index = 0; index < x.length; index++) {
        x[index].style.color = 'black'
        
    }
    item.style.color = 'red'
}