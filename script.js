document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const woodenFish = document.getElementById('woodenFish');
    const woodenFishImg = document.getElementById('woodenFishImg');
    let count = parseInt(localStorage.getItem('woodenFishCount')) || 0;
    
    // 初始化计数器
    counter.textContent = count;

    // 创建音效
    const hitSound = new Audio('wooden-fish.mp3');
    
    // 处理点击事件
    document.addEventListener('click', (e) => {
        // 增加计数
        count++;
        counter.textContent = count;
        
        // 更新计数器文字
        counter.setAttribute('data-value', count);
        
        // 添加动画类
        counter.classList.add('counter-animate');
        setTimeout(() => {
            counter.classList.add('reset');
            setTimeout(() => {
                counter.classList.remove('counter-animate', 'reset');
            }, 75);
        }, 75);
        
        // 保存到本地存储
        localStorage.setItem('woodenFishCount', count);
        
        // 播放音效
        hitSound.currentTime = 0;
        hitSound.play();
        
        // 添加点击动画
        woodenFishImg.classList.add('wooden-fish-active');
        setTimeout(() => {
            woodenFishImg.classList.remove('wooden-fish-active');
        }, 150);
        
        // 创建点击特效
        createHitEffect();

        // 创建并添加加号动画
        const plusOne = document.createElement('div');
        plusOne.className = 'plus-one';
        plusOne.textContent = '+1功德';
        counter.appendChild(plusOne);
        
        // 动画结束后移除元素
        plusOne.addEventListener('animationend', () => {
            counter.removeChild(plusOne);
        });
    });

    // 创建点击特效
    function createHitEffect() {
        const effect = document.createElement('div');
        effect.className = 'hit-effect';
        
        // 随机选择颜色组合
        const colorIndex = Math.floor(Math.random() * 3) + 1;
        effect.setAttribute('data-color', colorIndex);
        
        // 添加文字内容
        const popupTexts = [
            '摸鱼啦', 
            '发工资啦',
            '放假了',
            '睡午觉',
            '提前下班',
            '不加班啦',
            '有奖金啦',
            '涨工资啦',
            '双休日',
            '老板不在',
            '不开会',
            '喝咖啡',
            '吃早餐',
            '躺平啦',
            '休半天',
            '调休批了',
            '可以远程',
            '股票涨啦',
            '发红包啦',
            '饭点到啦'
        ];
        
        effect.textContent = popupTexts[Math.floor(Math.random() * popupTexts.length)];
        
        // 随机生成移动方向和旋转角度
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 60;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 100;
        const rotate = (Math.random() - 0.5) * 60;
        
        effect.style.setProperty('--tx', `${tx}px`);
        effect.style.setProperty('--ty', `${ty}px`);
        effect.style.setProperty('--rotate', `${rotate}deg`);
        
        woodenFish.appendChild(effect);
        
        effect.addEventListener('animationend', () => {
            woodenFish.removeChild(effect);
        });
    }
});
