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
        
        // 保存到本地存储
        localStorage.setItem('woodenFishCount', count);
        
        // 播放音效
        hitSound.currentTime = 0;
        hitSound.play();
        
        // 添加点击动画
        woodenFishImg.classList.add('wooden-fish-active');
        setTimeout(() => {
            woodenFishImg.classList.remove('wooden-fish-active');
        }, 150); // 动画持续时间
        
        // 创建点击特效
        createHitEffect();
    });

    // 创建点击特效
    function createHitEffect() {
        const effect = document.createElement('div');
        effect.className = 'hit-effect';
        
        // 添加文字内容
        const popupTexts = [
            '功德 +1', 
            '阿弥陀佛', 
            '心如止水', 
            '般若波罗蜜', 
            '善哉善哉',
            '南无阿弥陀佛',
            '静心'
        ];
        effect.textContent = popupTexts[Math.floor(Math.random() * popupTexts.length)];
        
        // 随机生成移动方向和旋转角度
        const angle = Math.random() * Math.PI * 2; // 0 到 2π之间的随机角度
        const distance = 100 + Math.random() * 60; // 100-160px的随机距离
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 100; // 向上偏移基准100px
        const rotate = (Math.random() - 0.5) * 60; // -30到30度之间的随机旋转
        
        // 设置CSS变量
        effect.style.setProperty('--tx', `${tx}px`);
        effect.style.setProperty('--ty', `${ty}px`);
        effect.style.setProperty('--rotate', `${rotate}deg`);
        
        // 将特效添加到木鱼容器中
        woodenFish.appendChild(effect);
        
        // 动画结束后移除特效元素
        effect.addEventListener('animationend', () => {
            woodenFish.removeChild(effect);
        });
    }
});
