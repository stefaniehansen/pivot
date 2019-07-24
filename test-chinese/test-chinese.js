// 简单的数学

变量 x = 2;
变量 y = 3;

尝试{
如果 (真正) {
    console.log("加: " + 加(x, y));
    console.log("乘: " + 乘(x, y));
    console.log("功率: " + 功率(x,y));
}
扔 "错误";
}
抓住(e)
{
    console.log(e);
}
最后
{
    console.log("终于完成了");
}

// 功能
功能 加(x, y){
    返回 x+y;
}

功能 乘(x, y){
    返回 x*y;
}

功能 功率(x,y){
    变量 结果 = x;
    对于 (变量 i = 1; i < y; i++){
        结果 = 结果 * y;
    }
    返回 结果;
}