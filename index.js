function into_menu(p_name)
{
    window.open(p_name + "/index.html")
}
var main_menu = document.getElementsByClassName("grid-container").item(0)

var item_length = document.getElementsByClassName("grid-item").length
var item1 = main_menu.getElementsByClassName("grid-item").item(0)
item1.addEventListener("click", function()
{
    into_menu("漫评")
});

for(var i = 0; i<item_length ; i++)
{
    var each = main_menu.getElementsByClassName("grid-item").item(i)
    each.addEventListener("click",function()
    {
        if(i==0)
        {
            into_menu("漫评")
        }
        else if(i==1)
        {
            into_menu("文化鱼塘")
        }
        else if(i==2)
        {
            into_menu("创作者百科")
        }
        else if(i==3)
        {
            into_menu("玄幻小说")
        }
        else if(i==4)
        {
            into_menu("经典讨论")
        }
        else if(i==5)
        {
            into_menu("推荐")
        }
        else if(i==6)
        {
            into_menu("动漫哲学")
        }
        else if(i==7)
        {
            into_menu("关于动漫与天道")
        }
        
    })
}
// console.log(item1)