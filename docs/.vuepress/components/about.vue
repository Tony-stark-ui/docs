<template>
  <div class="about">
    <ul class="aboutNav">
      <li v-for="item in nav" @click="showNav(item.code)" :style="cur === item.code ? 'background:#0567f1;color:#fff;' : ''" class="aboutNavItem">
        {{item.title}}
      </li>
    </ul>
    <div class="aboutContent">
      <div v-show="cur === 'me'">
        <ul class="colors">
          <li class="midnightblue">name：梁腾蛟</li>
          <li class="slateblue">age：21岁</li>
          <li class="blue">gender：男</li>
          <li class="deepskyblue">tel：18238109405</li>
          <li class="cornflowerblues">email：2848787564@qq.com</li>
          <li class="lightskyblue">看过很多书籍</li>
          <li class="wuwangcaoblue">还是在寻找自己</li>
        </ul>
      </div>
      <div v-show="cur === 'tech'">
        <ul>
          <li><img src="../public/star.png"><span>html</span></li>
          <li><img src="../public/star.png"><span>css</span></li>
          <li><img src="../public/star.png"><span>JavaScript</span></li>
          <li><img src="../public/star.png"><span>Vue2、Vue3全家桶</span></li>
          <li><img src="../public/star.png"><span>TypeScript</span></li>
          <li><img src="../public/star.png"><span>uniapp</span></li>
          <li><img src="../public/star.png"><span>原生小程序</span></li>
        </ul>
      </div>
      <div v-show="cur === 'work'">
        <ul>
          <li><img src="../public/star.png"><span>2021.04 ~ 至今 ~ 前端开发</span></li>
        </ul>
      </div>
      <div v-show="cur === 'orange'">
        橘子不是那种性格很好的宠物猫<br><br>
        这反而让她更像个从孤儿院领养的孩子<br><br>
        面对陌生环境胆小无助<br><br>
        渴望外面的世界<br><br>
        我没能给她足够的关怀<br><br>
        然而她终究还是习惯了家的温暖<br><br>
        橘子和大多数家猫一样都向往外面的自由<br><br>
        喜欢看着窗外和天空<br><br>
        也曾偷偷跑出去闯荡<br><br>
        我也理解了大部分家长的想法<br><br>
        有时候过于牢固的保护不是对孩子的溺爱和禁锢<br><br>
        而是害怕孩子在外面不能好好生活的揪心<br><br>
        <a href="https://photo.smallsunnyfox.com/" target="_blank" style="text-decoration:none;">🍊🍊🍊</a>
      </div>
      <div v-show="cur === 'book'">
        我在看的
        <ul>
          <li><img src="../public/star.png"><span>月光落在左手上 - 余秀华</span></li>
        </ul>
        我喜欢的
        <ul>
          <li><img src="../public/star.png"><span>推理</span></li>
          <li><img src="../public/star.png"><span>文学</span></li>
          <li><img src="../public/star.png"><span>爱情</span></li>
        </ul>
        2022
        <ul>
          <li><img src="../public/star.png"><span>天堂旅行团 - 张嘉佳</span></li>
        </ul>
        2021
        <ul>
          <li><img src="../public/star.png"><span>告白 - 凑佳苗</span></li>
          <li><img src="../public/star.png"><span>我们生活在巨大的差距里 - 余华</span></li>
        </ul>
      </div>
      <div v-show="cur === 'tv'">
        2022
        <ul>
          <li><img src="../public/star.png"><span>奇怪的律师禹英雨</span></li>
          <li><img src="../public/star.png"><span>流星</span></li>
          <li><img src="../public/star.png"><span>为何是吴秀才</span></li>
        </ul>
        2021
        <ul>
          <li><img src="../public/star.png"><span>顶级高校</span></li>
          <li><img src="../public/star.png"><span>这区域的疯子X</span></li>
          <li><img src="../public/star.png"><span>远看是蔚蓝的春天</span></li>
          <li><img src="../public/star.png"><span>机智的医生生活2</span></li>
          <li><img src="../public/star.png"><span>Voice4</span></li>
        </ul>
      </div>
      <div v-show="cur === 'movie'">
        我喜欢的
        <ul>
          <li><img src="../public/star.png"><span>陪你度过漫长岁月</span></li>
          <li><img src="../public/star.png"><span>恋恋笔记本</span></li>
          <li><img src="../public/star.png"><span>比悲伤更悲伤的故事 (More than blue)</span></li>
        </ul>
      </div>
      <div v-show="cur === 'game'">
        游戏只有和朋友一起玩时才存在意义
        <ul>
          <li><img src="../public/star.png"><span>LOL</span></li>
          <li><img src="../public/star.png"><span>CSGO</span></li>
          <li><img src="../public/star.png"><span>永劫无间</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { title: '关于我', code: 'me' },
        { title: '技能', code: 'tech' },
        { title: '工作', code: 'work' },
        { title: '橘子', code: 'orange' },
        { title: '书', code: 'book' },
        { title: '剧', code: 'tv' },
        { title: '电影', code: 'movie' },
        { title: '游戏', code: 'game' }
      ],
      cur: 'me'
    }
  },
  methods: {
    showNav(code) {
      this.cur = code
    }
  }
}
</script>

