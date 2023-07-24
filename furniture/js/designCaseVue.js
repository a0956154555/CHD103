const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "hello",
      twoBox: true,
      threeBox: false,
      fourBox: false,
      personArr: ["Jane Liu", "Justin Lin", "Nelson Wu", "Dandy Wang"],
      disappearTrue: false,
      delayNone: true,
      designerTxt: "",
      favoriteList: false,
      designerTxtArr: [
        "當",
        "一",
        "個",
        "設",
        "計",
        "師",
        "，",
        "我",
        "感",
        "到",
        "我",
        "有",
        "著",
        "無",
        "窮",
        "的",
        "創",
        "意",
        "與",
        "熱",
        "情",
        "。",
        "我",
        "的",
        "心",
        "靈",
        "總",
        "是",
        "在",
        "探",
        "索",
        "美",
        "與",
        "功",
        "能",
        "的",
        "交",
        "匯",
        "點",
        "，",
        "並",
        "將",
        "它",
        "們",
        "融",
        "合",
        "成",
        "令",
        "人",
        "驚",
        "嘆",
        "的",
        "作",
        "品",
        "。",
        "對",
        "我",
        "來",
        "說",
        "，",
        "設",
        "計",
        "不",
        "僅",
        "僅",
        "是",
        "一",
        "份",
        "工",
        "作",
        "，",
        "更",
        "是",
        "一",
        "種",
        "藝",
        "術",
        "，",
        "是",
        "我",
        "表",
        "達",
        "自",
        "我",
        "、",
        "分",
        "享",
        "經",
        "歷",
        "與",
        "感",
        "受",
        "的",
        "媒",
        "介",
        "。",
        "每",
        "個",
        "項",
        "目",
        "都",
        "是",
        "一",
        "個",
        "新",
        "的",
        "挑",
        "戰",
        "，",
        "我",
        "喜",
        "歡",
        "探",
        "索",
        "各",
        "種",
        "風",
        "格",
        "、",
        "主",
        "題",
        "和",
        "概",
        "念",
        "。",
        "無",
        "論",
        "是",
        "設",
        "計",
        "一",
        "個",
        "網",
        "站",
        "、",
        "平",
        "面",
        "廣",
        "告",
        "、",
        "還",
        "是",
        "視",
        "覺",
        "識",
        "別",
        "，",
        "我",
        "總",
        "是",
        "盡",
        "力",
        "為",
        "每",
        "個",
        "項",
        "目",
        "帶",
        "來",
        "獨",
        "特",
        "的",
        "風",
        "格",
        "和",
        "創",
        "意",
        "。",
        "我",
        "的",
        "工",
        "作",
        "過",
        "程",
        "往",
        "往",
        "始",
        "於",
        "深",
        "入",
        "了",
        "解",
        "客",
        "戶",
        "需",
        "求",
        "與",
        "目",
        "標",
        "。",
        "我",
        "相",
        "信",
        "良",
        "好",
        "的",
        "設",
        "計",
        "應",
        "該",
        "是",
        "根",
        "據",
        "目",
        "標",
        "受",
        "眾",
        "的",
        "喜",
        "好",
        "和",
        "需",
        "求",
        "，",
        "並",
        "能",
        "夠",
        "傳",
        "達",
        "清",
        "晰",
        "的",
        "信",
        "息",
        "。",
      ],
      heartShow: false,
      redHeart: false,
      openTxt: [true, true, true, true],

      allPerson: [
        [
          "HI~我的名字是Jane,我的設計風格以簡潔、舒適為主，注重細節和功能性。我相信良好的軟裝設計可以為空間帶來舒適和融洽的氛圍，讓居住者在其中感到愉悅和放鬆。",
          "我有自信且果斷的個性。我相信自己的能力，不怕迎接挑戰。我在高壓情況下表現出色，並喜歡帶領團隊取得成功。",
          "擅長運用柔和的色彩和自然元素，讓空間散發著舒適和融洽的氛圍。她喜歡選用舒適的軟質家具和柔軟的布料，為客戶打造一個充滿溫暖和放鬆的家居空間。",
        ],
        [
          "HELLO~我的名字是Justin,在我的設計中，我融合了現代與經典的元素，並注重將設計與居住者的需求相結合。我喜歡為客戶創造一個溫馨、時尚的居住環境，讓他們感受到家的溫暖和舒適。",
          '"喜歡與人和平共處。我善於聆聽他人的意見並尊重他們的想法。我不容易生氣，喜歡維持輕鬆的氛圍。"',
          "喜歡運用鮮豔的色彩和時尚的元素，為空間帶來生氣和動感。他擅長選用現代感強烈的家具和裝飾品，讓空間充滿活力和青春氣息。",
        ],
        [
          "你好~我的名字是Nelson,喜歡通過設計來傳達情感和故事，打造獨特且具有個人風格的空間。我注重細節和整體規劃，並努力將客戶的需求與我的設計理念相結合。",
          '"喜歡追求目標並不斷超越自己。我有著強烈的動力和毅力，相信努力付出一定會有回報。我喜歡接受挑戰，並相信每一次的嘗試都是學習和成長的機會。"',
          "喜歡運用自然色調和天然材料，打造簡約、自然的空間風格。他擅長利用簡約而高效的家具佈局，讓空間更加開闊和舒適。",
        ],
        [
          "HI~我的名字是Dandy,我是一名專業的軟裝設計師，擁有豐富的設計經驗和創意。我喜歡挑戰不同的設計風格，並不斷探索新的設計理念。我相信每個空間都有獨特的故事和靈感，我的目標是通過設計來呈現這些故事並打造獨具特色的空間。",
          '"喜歡關心他人並提供幫助。我樂於聆聽他人的需求，並願意伸出援手。我的同理心讓我能夠理解別人的感受，並願意給予支持和鼓勵。"',
          "喜歡運用高貴的色彩和奢華的材料，為空間帶來華麗和富裕的氛圍。他擅長選用精緻的裝飾品和高雅的家具，營造出典雅和豪華的居住環境。",
        ],
      ],
      allPerson2: [
        [
          "HI~我的名字是Jane,我的設計風格以簡潔、舒適為主，注重細節和功能性。我相信良好的軟裝設計可以為空間帶來舒適和融洽的氛圍，讓居住者在其中感到愉悅和放鬆。",
          "我有自信且果斷的個性。我相信自己的能力，不怕迎接挑戰。我在高壓情況下表現出色，並喜歡帶領團隊取得成功。",
          "擅長運用柔和的色彩和自然元素，讓空間散發著舒適和融洽的氛圍。她喜歡選用舒適的軟質家具和柔軟的布料，為客戶打造一個充滿溫暖和放鬆的家居空間。",
        ],
        [
          "HELLO~我的名字是Justin,在我的設計中，我融合了現代與經典的元素，並注重將設計與居住者的需求相結合。我喜歡為客戶創造一個溫馨、時尚的居住環境，讓他們感受到家的溫暖和舒適。",
          '"喜歡與人和平共處。我善於聆聽他人的意見並尊重他們的想法。我不容易生氣，喜歡維持輕鬆的氛圍。"',
          "喜歡運用鮮豔的色彩和時尚的元素，為空間帶來生氣和動感。他擅長選用現代感強烈的家具和裝飾品，讓空間充滿活力和青春氣息。",
        ],
        [
          "你好~我的名字是Nelson,喜歡通過設計來傳達情感和故事，打造獨特且具有個人風格的空間。我注重細節和整體規劃，並努力將客戶的需求與我的設計理念相結合。",
          '"喜歡追求目標並不斷超越自己。我有著強烈的動力和毅力，相信努力付出一定會有回報。我喜歡接受挑戰，並相信每一次的嘗試都是學習和成長的機會。"',
          "喜歡運用自然色調和天然材料，打造簡約、自然的空間風格。他擅長利用簡約而高效的家具佈局，讓空間更加開闊和舒適。",
        ],
        [
          "HI~我的名字是Dandy,我是一名專業的軟裝設計師，擁有豐富的設計經驗和創意。我喜歡挑戰不同的設計風格，並不斷探索新的設計理念。我相信每個空間都有獨特的故事和靈感，我的目標是通過設計來呈現這些故事並打造獨具特色的空間。",
          '"喜歡關心他人並提供幫助。我樂於聆聽他人的需求，並願意伸出援手。我的同理心讓我能夠理解別人的感受，並願意給予支持和鼓勵。"',
          "喜歡運用高貴的色彩和奢華的材料，為空間帶來華麗和富裕的氛圍。他擅長選用精緻的裝飾品和高雅的家具，營造出典雅和豪華的居住環境。",
        ],
      ],
      janeName: "Jane",
      justinName: "Justin",
      nelsonName: "Nelson",
      dandyName: "Dandy",
      userSearch: "",
      noticeFalse: false,
      favoriteArr: [],
      imgSrcArr: [
        "../../furniture_img3/characterPic1.jpg",
        "../../furniture_img3/characterPic2.jpg",
        "../../furniture_img3/characterPic3.jpg",
        "../../furniture_img3/characterPic4.png",
        "../../furniture_img3/characterPic5.jpg",
        "../../furniture_img3/characterPic6.jpg",
        "../../furniture_img3/characterPic7.jpg",
        "../../furniture_img3/characterPic8.jpg",
        "../../furniture_img3/characterPic9.jpg",
        "../../furniture_img3/characterPic10.jpg",
        "../../furniture_img3/characterPic11.jpg",
        "../../furniture_img3/characterPic12.jpg",
        "../../furniture_img3/characterPic13.jpg",
        "../../furniture_img3/characterPic14.jpg",
        "../../furniture_img3/characterPic15.jpg",
        "../../furniture_img3/characterPic16.jpg",
      ],
      imgSrcArr2: [
        "../../furniture_img3/characterPic1.jpg",
        "../../furniture_img3/characterPic2.jpg",
        "../../furniture_img3/characterPic3.jpg",
        "../../furniture_img3/characterPic4.png",
        "../../furniture_img3/characterPic5.jpg",
        "../../furniture_img3/characterPic6.jpg",
        "../../furniture_img3/characterPic7.jpg",
        "../../furniture_img3/characterPic8.jpg",
        "../../furniture_img3/characterPic9.jpg",
        "../../furniture_img3/characterPic10.jpg",
        "../../furniture_img3/characterPic11.jpg",
        "../../furniture_img3/characterPic12.jpg",
        "../../furniture_img3/characterPic13.jpg",
        "../../furniture_img3/characterPic14.jpg",
        "../../furniture_img3/characterPic15.jpg",
        "../../furniture_img3/characterPic16.jpg",
      ],
      janeSrcArr: [
        "../../furniture_img3/characterPic1.jpg",
        "../../furniture_img3/characterPic2.jpg",
        "../../furniture_img3/characterPic3.jpg",
        "../../furniture_img3/characterPic4.png",
      ],
      justinSrcArr: [
        "../../furniture_img3/characterPic5.jpg",
        "../../furniture_img3/characterPic6.jpg",
        "../../furniture_img3/characterPic7.jpg",
        "../../furniture_img3/characterPic8.jpg",
      ],
      nelsonSrcArr: [
        "../../furniture_img3/characterPic9.jpg",
        "../../furniture_img3/characterPic10.jpg",
        "../../furniture_img3/characterPic11.jpg",
        "../../furniture_img3/characterPic12.jpg",
      ],
      dandySrcArr: [
        "../../furniture_img3/characterPic13.jpg",
        "../../furniture_img3/characterPic14.jpg",
        "../../furniture_img3/characterPic15.jpg",
        "../../furniture_img3/characterPic16.jpg",
      ],
    };
  },
  methods: {
    readPost() {
      this.disappearTrue = true;
      setTimeout(() => {
        this.delayNone = false;
      }, 1000);
      this.typeNextCharacter();
    },
    typeNextCharacter() {
      if (this.designerTxtArr.length > 0) {
        this.designerTxt += this.designerTxtArr.shift();
        setTimeout(this.typeNextCharacter, 50);
      }
      if (this.designerTxtArr.length == 0) {
        this.heartShow = true;
      }
    },
    redLove() {
      this.redHeart = !this.redHeart;
    },
    closeTxt(val) {
      this.openTxt[val] = false;
    },
    searchProducts() {
      if (this.userSearch.toLowerCase() === this.janeName.toLowerCase()) {
        this.imgSrcArr = this.janeSrcArr;
        this.janeName = "Jane";
      } else if (
        this.userSearch.toLowerCase() === this.justinName.toLowerCase()
      ) {
        this.imgSrcArr = this.justinSrcArr;
        this.janeName = "Justin";
      } else if (
        this.userSearch.toLowerCase() === this.nelsonName.toLowerCase()
      ) {
        this.imgSrcArr = this.nelsonSrcArr;
        this.janeName = "Nelson";
      } else if (
        this.userSearch.toLowerCase() === this.dandyName.toLowerCase()
      ) {
        this.imgSrcArr = this.dandySrcArr;
        this.janeName = "Dandy";
      } else if (this.userSearch.trim() == "") {
        this.janeName = "Jane";
        this.imgSrcArr = this.imgSrcArr2;
      }
      console.log(this.imgSrcArr);
    },
    changeTxtPersonality(index) {
      this.allPerson[index][0] = this.allPerson[index][1];
    },
    changeTxtProficient(index) {
      this.allPerson[index][0] = this.allPerson[index][2];
    },
    changeTxtIntroduction(index) {
      this.allPerson[index][0] = this.allPerson2[index][0];
    },
    controlTwoBox() {
      this.twoBox = true;
      this.threeBox = false;
      this.fourBox = false;
    },
    controlThreeBox() {
      this.twoBox = false;
      this.threeBox = true;
      this.fourBox = false;
    },
    controlfourBox() {
      this.twoBox = false;
      this.threeBox = false;
      this.fourBox = true;
    },
    pushFavorite(val, i) {
      if (this.favoriteArr.indexOf(val) == -1 && i <= 4) {
        this.favoriteArr.push([val, this.janeName]);
      } else if (this.favoriteArr.indexOf(val) == -1 && i >= 4 && i <= 8) {
        this.favoriteArr.push([val, this.justinName]);
      } else if (this.favoriteArr.indexOf(val) == -1 && i >= 8 && i <= 12) {
        this.favoriteArr.push([val, this.nelsonName]);
      } else if (this.favoriteArr.indexOf(val) == -1 && i > 12) {
        this.favoriteArr.push([val, this.dandyName]);
      }

      console.log(this.favoriteArr);
    },
    deleteFavorite(index) {
      this.favoriteArr.splice(index, 1);
    },
    closeNotice() {
      this.noticeFalse = false;
    },
  },
  computed: {
    controlAllBox() {
      if (this.twoBox == true) {
        return this;
      }
    },
    favoriteTitle() {
      return this.favoriteArr.length !== 0 ? "收納清單" : "目前暫無任何商品";
    },
  },
  watch: {
    favoriteList() {
      if (this.favoriteArr.length <= 0) {
        return false;
      }
    },
  },
}).mount("#app");
