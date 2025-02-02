var head_negative = [
    "对于#N#B的行为，我的回答是：",
    "中方就这一问题已多次表明立场：",
    "我们一再强调：",
    "我们此前已多次作出回应：",
    "我们已多次表明中方立场：",
    "中方对此严正声明：",
    "中方就#N近来的一系列错误言行，已经多次向#N表明我们的严正立场："
]

var sentence_negative = [
    "#N#B的举动严重干涉了中国内政，严重违反国际法和国际关系基本准则，是赤裸裸的霸权行径，中国政府和人民坚决反对。",
    "#N罔顾事实、颠倒黑白，公然#B，性质极其恶劣，用心十分险恶，其根本目的是干涉中国内政，破坏中华民族实现伟大复兴的历史进程。",
    "#B只会让广大中国人民进一步认清#N的险恶用心和霸权本质，只会让中国人民更加众志成城。",
    "中国政府和中国人民坚决反对#N#B的行为，中方已就此向#N提出严正交涉和强烈抗议。",
    "中方强烈敦促#N不得#B，以免影响两国关系和两国在重要领域的合作。",
    "中方强烈谴责并坚决反对#N#B，已就此向#N提出了严正交涉。",
    "#N如果#B，不仅将损害中方利益，损害中国和#N关系，也将严重损害#N自身的利益。",
    "#N如果一意孤行，坚持#B，最终必将搬起石头砸自己的脚。",
    "#N#B是搬起石头砸自己的脚。",
    "我们要正告#N，任何外国政府和势力都无权干预中国内政。",
    "#N的图谋注定失败。",
    "中国政府反对任何外部势力干预中国事务的决心坚定不移，维护国家主权、安全、发展利益的决心坚定不移。",
    "我们奉劝#N不要一意孤行，否则中方必将予以坚决反制，由此产生的一切后果必须由#N承担。",
    "希望#N个别人士能以开放的心态和客观公正的态度对待中国，不要无中生有。",
    "#N有关人士的陈词滥调充满了政治偏见与谎言。",
    "我要强调，中国内政不容任何外部反华势力指手画脚。",
    "中国一向秉持和平共处五项原则处理国与国关系，历来坚定奉行不干涉内政原则，主张各国根据自身国情选择发展道路。",
    "#N的拙劣表演充分暴露出其不可告人的险恶用心和政治企图。",
    "中国坚持走和平发展道路，积极为维护世界和平稳定贡献智慧力量。",
    "中国坚持对外开放，互利共赢，同世界分享中国发展的机遇。",
    "#N自己不愿意投入，却千方百计干扰破坏中国和其他国家开展合作。",
    "#N试图挑拨中国共产党和中国人民的关系，极其阴险。",
    "任何妄图否定中国的社会主义制度、挑拨中国共产党和中国人民关系的政治图谋都注定不会得逞！",
    "我要告诉#N一些政客，人贵有自知之明，请他还是趁早反省一下#N自身的问题，放弃偏见和执念，停止喋喋不休的反华聒噪。",
    "还是我们经常说的那句话，请#N不要高估自己的造谣能力，也不要低估别人的判断能力。谎言重复一千遍，依然还是谎言。",
    "对于#N干涉中国内政、损害中方利益的行径，中方必将采取有力措施坚决反制。任何人都不要低估中方维护国家主权、安全、发展利益的坚定决心。",
    "如果#N一意孤行，中方必将采取有力措施予以坚决反制。",
    "我们奉劝某些政客别再浪费#N纳税人的钱，无事生非。",
    "中方已就此向#N提出严正交涉，表达强烈抗议。",
    "我们敦促#N立即停止此类挑衅行为，不要逆势而动，避免损害地区的和平与安宁。中方将采取一切必要措施，坚定维护国家主权和安全。",
    "我们奉劝#N有关媒体和人士尊重已经明确无误的事实和真相，恪守起码的职业道德操守，放下意识形态偏见，摘掉有色眼镜，不要再做不负责任、徒增笑柄的事情。",
    "#N罔顾事实、混淆是非、违反公理，玩弄双重标准，公然插手中国事务，干涉中国内政，严重违反国际法和国际关系基本准则，中方对此表示强烈谴责和坚决反对。",
    "#N任何企图干预中国内政、阻碍中国发展的把戏都不会得逞，到头来只会是枉费心机一场空。",
    "#N这一恶劣行径不仅损害中方利益，也会损害#N自身的重要利益。",
    "我们希望#N认真对待中方的严正交涉和严正立场，立即停止不负责任的言行，停止干涉中国内政。",
    "我们敦促#N在中国问题上要谨言慎行，不要再发出错误信号，不要再挑拨怂恿，不要再干涉中国内政。",
    "对于#N的错误做法，中方必将采取有力的措施坚决予以反制，坚定地维护自身主权、安全、发展利益。",
    "#N此次的貌似公允再次暴露出他们的是非不分和虚伪面目，他们的口头正义也再次暴露出他们的双重标准和别有用心。",
    "我们正告#N认清形势，悬崖勒马，立即停止干涉中国内政，以免引火烧身、自食苦果。",
    "中方正告#N，任何企图破坏中国社会繁荣稳定、阻碍中国发展的图谋都不会得逞，到头来只会搬起石头砸自己的脚。",
    "我们敦促#N悬崖勒马，否则必将自食恶果，勿谓言之不预也！",
    "我这样的#N，能和中国相提并论吗！",
    "#N的一些政客和官员隔三差五就要出来叫一叫、跳一跳,攻击抹黑中国，他们的拙劣表演充分暴露出其不可告人的险恶用心和政治企图。",
    "在国际社会大家庭里,中国始终维护和平,促进发展,坚守道义,同各国携手构建人类命运共同体。#N却损人利己,唯我独尊,背信弃义,在世界上大搞顺我者昌,逆我者亡。",
    "#N#B干预干涉中国内政，严重违反国际法和国际关系基本准则，是赤裸裸的霸权行径。"
]

var head_positive = [
    "我们注意到有关报道，对#N#B表示欢迎。",
    "中方支持并赞赏#N作出#B这一重要决定。",
    "我们很高兴听闻这则消息。",
    "今天#N成功#B，中方对此表示祝贺和欢迎。",
    "中方对此的看法是：",
    "我们对#N#B的友善之举表示诚挚的感谢。",
    "中方高度赞赏#N#B。"
]

var sentence_positive = [
    "中方愿继续同国际社会一道，为#N#B提供力所能及的帮助。",
    "#B，是#N各界的普遍期待，符合两国和两国人民的根本和长远利益。",
    "我们欢迎#N抓住历史机遇，在和平共处五项原则基础上#B。",
    "面对新机遇新挑战，中方愿同#N一道#B。",
    "中方一贯主张，#B应秉持客观、公正、专业原则，以确凿证据为依据，以各方共识为基础。",
    "中方对#N#B表示祝贺。中国与#N传统友谊深厚，双方是患难与共的好兄弟，真诚相待的好朋友，共同发展的好伙伴。",
    "中方一贯重视与#N展开多领域合作，支持#N#B。",
    "作为中国与#N人文交流的重要内容，#B长期以来有力地促进了两国人民之间的沟通和相互了解。",
    "我们希望#N有关各方在宪法和法律框架内和平#B。",
    "同时我们希望#N在#B过程中秉持公平、透明、非歧视原则，对各方一视同仁。",
    "中方愿为#N#B发挥积极作用。",
    "中方愿同#N一道，以#B为契机，增进政治互信，深化互利合作，加强在国际和地区事务中的沟通协调，造福两国人民。",
    "中国和#N互为战略伙伴。自建交以来，双方关系取得长足发展，各领域务实合作成果丰硕。",
    "中方愿同#N一道努力，巩固友好互信，深化互利合作，推动战略伙伴关系取得更大发展。",
    "中国和#N建交以来，两国各领域交流合作快速展开，成果持续显现，增进了两国人民的福祉。",
    "当前，中国同#N关系快速发展。两国人民一直相互怀有友好感情。",
    "中方愿在一个中国原则和和平共处五项原则基础上，同#N加强各领域务实合作和友好交流，造福两国和两国人民。",
    "中国与#N的合作始终遵循平等互利、合作共赢和商业化原则开展，合法合规，利国利民，不容他国置喙。",
    "中方坚信，不论形势如何变化，中国与#N的合作都会正常开展下去。",
    "我们愿意与#N共同努力，开启两国关系发展新的广阔前景。",
    "事实充分证明，中国与#N关系的发展不仅给两国人民带来巨大利益，也有力地促进了亚太地区和世界的和平、稳定、繁荣。",
    "中国与#N是好朋友、好伙伴、好兄弟。",
    "中方愿同#N一道，继续加强战略沟通，深化务实合作，深入落实两国元首共识，推动全面战略伙伴关系不断迈上新台阶。",
    "我们期待与#N各方继续保持密切沟通与合作。",
    "中方尊重#N人民的选择，也呼吁国际社会尊重#N主权，尊重#N人民自主作出的选择，不要干涉#N内政。",
    "我们希望#N能够同中方相向而行、共同努力。",
    "我们相信，此举将进一步推动落实双方元首重要共识，巩固双方政治互信，促进中国与#N创新战略伙伴关系深入发展。",
    "#N此举这符合双方的共同利益，也是两国人民的共同期待。",
    "中国与#N双方一致同意，保持密切高层交往和更紧密的战略沟通，及时就重大问题协调立场。",
    "#N此举取得丰硕成果，将为中国与#N全天候战略合作伙伴关系增添新的动力。",
    "我们刚刚隆重庆祝了新中国成立70周年，#N向中方送上了真挚美好的祝福，我们对此表示诚挚的感谢。",
    "我能告诉你的是，中国与#N一直按照平等互信、互利共赢的原则，在各领域保持着正常的交流合作。",
    "立足新时代，放眼新未来，双方将进一步加强协调配合，承担起维护多边主义、捍卫国际秩序的共同责任，推进全面战略协作不断取得新成果。",
    "我们愿同#N共同努力，携手推动中国与#N关系不断取得新的发展，打造新时代更加紧密的命运共同体。",
    "我们坚持在国际事务中发挥积极作用，为推动全球治理体系改革贡献“中国智慧”，为斡旋解决国际地区热点问题贡献“中国力量”，为世界经济发展注入“中国信心”。",
    "中国始终是世界和平的建设者、全球发展的贡献者、国际秩序的维护者。"
]

var verb = [
    "通过", "签署", "开放", "承认", "否认", "推出", "退出", "拒绝", "谴责", "支持", "宣称", "表彰", "煽动", "组织", "公然挑衅", "成立", "模糊",
    "退出"
]

var ob = [
    "贸易保护主义政策", "新法案", "互惠贸易协议", "工作签证", "全民公投", "独立公投", "网络空间主权", "罢工运动", "互联网自由运动", "言论自由共识", "全民免费医保",
    "高等教育学费", "在历史课本中新增章节", "删除敏感信息", "更新隐私协议", "减弱文化审查力度", "间接民主制度", "社会主义理论基础"
]

var countries =
    "台湾当局、蒙古、朝鲜、韩国、日本、菲律宾、越南、老挝、柬埔寨、缅甸、泰国、马来西亚、文莱、新加坡、印度尼西亚、东帝汶、尼泊尔、不丹、孟加拉国、印度、巴基斯坦、斯里兰卡、马尔代夫、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦、乌兹别克斯坦、土库曼斯坦、阿富汗、伊拉克、伊朗、叙利亚、约旦、黎巴嫩、以色列、巴勒斯坦、沙特阿拉伯、巴林、卡塔尔、科威特、阿拉伯联合酋长国、阿曼、也门、格鲁吉亚、亚美尼亚、阿塞拜疆、土耳其、塞浦路斯、芬兰、瑞典、挪威、冰岛、丹麦、爱沙尼亚、拉脱维亚、立陶宛、白俄罗斯、俄罗斯、乌克兰、摩尔多瓦、波兰、捷克、斯洛伐克、匈牙利、德国、奥地利、瑞士、列支敦士登、英国、爱尔兰、荷兰、比利时、卢森堡、法国、摩纳哥、罗马尼亚、保加利亚、塞尔维亚、马其顿、阿尔巴尼亚、希腊、斯洛文尼亚、克罗地亚、波斯尼亚和墨塞哥维那、乍得、中非、喀麦隆、赤道几内亚、加蓬、刚果共和国、刚果民主共和国、圣多美及普林西比、毛里塔尼亚、西撒哈拉、塞内加尔、冈比亚、马里、布基纳法索、几内亚、几内亚比绍、佛得角、塞拉利昂、利比里亚、科特迪瓦、加纳、多哥、贝宁、尼日尔、加那利群岛、赞比亚、安哥拉、津巴布韦、马拉维、莫桑比克、博茨瓦纳、纳米比亚、南非、斯威士兰、莱索托、马达加斯加、科摩罗、毛里求斯、留尼旺、圣赫勒拿（英）、澳大利亚、新西兰、巴布亚新几内亚、所罗门群岛、瓦努阿图、密克罗尼西亚、马绍尔群岛、帕劳、瑙鲁、基里巴斯、图瓦卢、萨摩亚、斐济群岛、汤加、库克群岛（新）、关岛（美）、新喀里多尼亚（法）、法属波利尼西亚、皮特凯恩岛（英）、瓦利斯与富图纳（法）、纽埃（新）、托克劳（新）、美属萨摩亚、北马里亚纳（美）、加拿大、美国、墨西哥、格陵兰（丹）、危地马拉、伯利兹、萨尔瓦多、洪都拉斯、尼加拉瓜、哥斯达黎加、巴拿马、巴哈马、古巴、牙买加、海地、多米尼加共和国、安提瓜和巴布达、圣基茨和尼维斯、多米尼克、圣卢西亚、圣文森特和格林纳丁斯、格林纳达、巴巴多斯、特立尼达和多巴哥、波多黎各（美）、美属维尔京群岛、安圭拉（英）、蒙特塞拉特（英）、瓜德罗普（法）、马提尼克（法）、荷属安的列斯、阿鲁巴（荷）、特克斯和凯科斯群岛（英）、开曼群岛（英）、百慕大（英）、哥伦比亚、委内瑞拉、圭亚那、法属圭亚那、苏里南、厄瓜多尔、秘鲁、玻利维亚、巴西、智利、阿根廷、乌拉圭、巴拉圭、意大利、梵蒂冈、圣马力诺、马耳他、西班牙、葡萄牙、安道尔、埃及、利比亚、苏丹、突尼斯、阿尔及利亚、摩洛哥、亚速尔群岛（葡）、马德拉群岛（葡）、埃塞俄比亚、厄立特里亚、索马里、吉布提、肯尼亚、坦桑尼亚、乌干达、卢旺达、布隆迪、塞舌尔"
    .split("、")

var head, sentences;
function shuffle(sentences){
    for (var i =sentences.length;i>0;i--){
        var random_pos=Math.floor(Math.random(i))
        var tmp=sentences[i-1]
        sentences[i-1]=sentences[random_pos]
        sentences[random_pos]=tmp
    }
}


function gengshuang(n, b) {
    paragraphs = Math.floor((Math.random() * 3 + 3))
    var i
    var answer = "<b>耿爽：</b>"
    var index = Math.floor((Math.random() * head.length))
    answer += head[index]
    shuffle(sentences)
    index=0
    for (i = 0; i < paragraphs; i++) {
        length = Math.floor((Math.random() * 3 + 3))
        for (j = 0; j < length; j++) {
            answer += sentences[index++]
        }
        answer += "<br><br>"
    }
    answer = answer.replace(/#N/g, n)
    answer = answer.replace(/#B/g, b)
    return answer
}

function generate() {
    var text = document.getElementById("text")
    var n = document.getElementById("1").value
    var b = document.getElementById("2").value
    var attitude = getRadioButtonCheckedValue("attitude")
    if(attitude == "support") {
        head = head_positive
        sentences = sentence_positive
    }
    else if(attitude == "condemn") {
        head = head_negative
        sentences = sentence_negative
    }

    if (n.length === 0 || b.length === 0) {

    } else {
        while (text.hasChildNodes()) {
            text.removeChild(text.firstChild)
        }
        var s = document.createElement("p")
        s.innerHTML = "<b>记者：</b>" + n + b + "，中方对此有何回应？"
        document.getElementById("text").appendChild(s)
        var t = document.createElement("p")
        t.innerHTML = gengshuang(n, b)
        document.getElementById("text").appendChild(t)
    }
}

function pick(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function random() {
    document.getElementById("2").value = pick(verb) + pick(ob)
    document.getElementById("1").value = pick(countries)
    generate()
}

function getRadioButtonCheckedValue(tagNameAttr) {
    var radio_tag = document.getElementsByName(tagNameAttr);
    for(var i=0;i<radio_tag.length;i++) {
        if(radio_tag[i].checked) {
            var checkvalue = radio_tag[i].value;            
            return checkvalue;
        }
    }
}

random()
