

$('.inp').keyup(function(){
    var value = $(this).val();
    $.ajax({
        type: 'GET',
        url: 'https://api.douban.com/v2/music/search',
        data: 'q=' + value + '&count=7&start=2',
        success: show,
        dataType: 'jsonp'
    })
})

function show(data) {
    var list = data.musics;
    console.log(list);
    $('.oUl').html('');    
    var str = '';
    $.each(list,function(index,ele){
        str += '<li>\
        <img src="' + ele.image +'">' + ele.title + '</li>';
    })
    $('.oUl').append(str);
}