<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "Font",
  data() {
    return {};
  },
  mounted() {
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = "!<>-_/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    let el = document.querySelector(".hero .description");
    console.log("el: ", el);

    if (!el) {
      const timer = setInterval(() => {
        if (el) {
          init();
          timer && clearInterval(timer);
        }
        el = document.querySelector(".hero .description");
      }, 100);
    } else {
      init();
    }

    function init() {
      const fx = new TextScramble(el);
      const phrases = [
        "有一份热，发一份光",
        "就如萤火一般",
        "也可以在黑暗里发一点光",
        "不必等候炬火",
        "此后如竟没有炬火",
        "我便是唯一的光",
        "愿与所有中国青年共勉"
      ];
      // fx.setText('写代码的憨憨')
      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 2000);
        });
        counter = (counter + 1) % phrases.length;
      };
      next();
    }
  },
};
</script>

<style lang="less" scoped>
</style>