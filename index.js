function into_menu(p_name)
{
    window.open(p_name)
}
// var main_menu = document.getElementsByClassName("grid-container").item(0)

// var item_length = document.getElementsByClassName("grid-item").length
// for(var i = 0; i<item_length ; i++)
// {
//     (function(index) {
//         var each = main_menu.getElementsByClassName("grid-item").item(index)
//         each.addEventListener("click", function() {
//             console.log(index);
//             // 根据索引值执行相应的代码
//             if(index == 0)
//             {
//                 into_menu("漫评")
//             }
//             else if(index == 2)
//             {
//                 into_menu("创作者百科")
//             }
//             else if(index == 4)
//             {
//                 into_menu("经典讨论")
//             }
//             else if(index == 6)
//             {
//                 into_menu("动漫哲学")
//             }
//             else if(index == 7)
//             {
//                 into_menu("动漫与天道")
//             }
//             else if(index == 9)
//             {
//                 into_menu("怀旧")
//             }
//         });
//     })(i);
// }

var music_menu = document.getElementsByClassName("grid-container").item(1)
var music_menu_length = music_menu.children.length

music_menu.children.item(0).addEventListener("click",function()
{

})
music_menu.children.item(5).addEventListener("click",function()
{
    into_menu("音频区/游戏音乐.html")
})