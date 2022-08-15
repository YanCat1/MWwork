// 移动端样式👇
newP = document.querySelector('.new')
category = document.querySelector('.category')
showData = document.querySelector('.showData')
Tcheng = document.querySelector('.Tcheng')
Tchuang = document.querySelector('.Tchuang')
icon = document.querySelector('.icon-xiangzuo')
experience = document.querySelector('.experience')
course = document.querySelector('.course')
experienceI = document.querySelector('.experienceI')
// 课程内容获取
python = document.querySelector('.python')
wedo = document.querySelector('.wedo')
c = document.querySelector('.c')
spike = document.querySelector('.spike')
child = document.querySelector('.child')
weeks = document.querySelector('.weeks')
month = document.querySelector('.month')

flag  = false
flag1 = false
// 新员工点击效果
newP.onclick=function(){
    flag = !flag
    if(flag){
        category.style.display = 'block'
        icon.className = 'iconfont icon-xiangxia'
        course.style.display = 'none'
        experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
        flag1 = false
    }else{
        category.style.display = 'none'
        icon.className ='iconfont icon-xiangzuo'
    }
}

// 进行体验课点击效果
experience.onclick=function(){
    flag1 = !flag1
    if(flag1){
        experienceI.className = 'experienceI iconfont icon-arrow_right_fat '
        course.style.display='block'
        category.style.display = 'none'
        icon.className ='iconfont icon-xiangzuo'
        flag = false
    }else{
        course.style.display='none'
        experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
    }
}

pythonSrc = "//player.bilibili.com/player.html?aid=216923935&bvid=BV1ea411P7Xw&cid=803023660&page=1&high_quality=1&danmaku=0&as_wide=1"
wedoSrc = "//player.bilibili.com/player.html?aid=216923935&bvid=BV1ea411P7Xw&cid=803023660&page=1&high_quality=1&danmaku=0&as_wide=1"
cSrc = "//player.bilibili.com/player.html?aid=216923935&bvid=BV1ea411P7Xw&cid=803023660&page=1&high_quality=1&danmaku=0&as_wide=1"
spikeSrc = "//player.bilibili.com/player.html?aid=216923935&bvid=BV1ea411P7Xw&cid=803023660&page=1&high_quality=1&danmaku=0&as_wide=1"
childSrc = "//player.bilibili.com/player.html?aid=216923935&bvid=BV1ea411P7Xw&cid=803023660&page=1&high_quality=1&danmaku=0&as_wide=1"

function click(ele,src){
    ele.onclick=function(){
        showData.src = src
        course.style.display = 'none'
        experienceI.className = 'experienceI iconfont icon-arrow_left_fat'
        flag1 = false
        Mflag = false
        Ngrouping.style.display = 'none';
        h1.innerText = ele.innerText
    }
}
click(python,pythonSrc)
click(wedo,pythonSrc)
click(c,cSrc)
click(spike,spikeSrc)
click(child,childSrc)


// 周待办
weeks.onclick=function(){
    window.open('weeks.html');
}
// 月待办
month.onclick=function(){
    window.open('month.html');
}
// 移动端样式👆



// web端样式👇
// 新入职员工元素获取
newMans = document.querySelector('.newMans')
grouping = document.querySelector('.grouping')
newman = document.querySelector('.newman')

// 体验课元素获取
myAttempt = document.querySelector('.myAttempt')
Ngrouping = document.querySelector('.Ngrouping')
attempt = document.querySelector('.attempt')
h1 = document.querySelector('h1')

Mflag = false
Nflag = false

newMans.onclick=function(){
    Nflag = !Nflag
    if(Nflag){
        grouping.style.display = 'block';
        Ngrouping.style.display = 'none';
        Mflag = false
        attempt.className = "attempt iconfont icon-zuojiantou-"
        h1.innerText = newMans.innerText
        newman.className = "newman iconfont icon-xiajiantou-"
    }else{
        grouping.style.display = 'none';
        newman.className = "newman iconfont icon-shangjiantou-"
    }
}


myAttempt.onclick=function(){
    Mflag = !Mflag
    if(Mflag){
        grouping.style.display = 'none';
        Ngrouping.style.display = 'block';
        Nflag = false
        newman.className = "newman iconfont icon-shangjiantou-"
        h1.innerText = myAttempt.innerText
        attempt.className = "attempt iconfont icon-youjiantou-"
        
    }else{
        Ngrouping.style.display = 'none';
        attempt.className = "attempt iconfont icon-zuojiantou-"
    }
}

// 童程 童创效果改变
code = document.querySelector('.code')
showData = document.querySelector('.showData')
codeBot = document.querySelector('.codeBot')
code.onclick=function(){
    h1.innerText = code.innerText
    showData.src='./童程新员工入职需知.pdf'
}

codeBot.onclick=function(){
    h1.innerText = codeBot.innerText
    showData.src='./童创新员工入职需知.pdf'
}




