// ==========================================================================
// 📚 《青玉案·元夕》课文词典与词阕数据集 (data.js) - 上阕/下阕对齐宋词黄金版
// 格式：["字词", "拼音", "EN 英文", "BM 马来文", "古义/本义：...\n今义：...", "u (可选:专名下划线)"]
// 结构：共 2 个区块（1 对应上阕，2 对应下阕），与 analysis.js 1–2 完全对齐
// ==========================================================================

const lessonTitle = "青玉案·元夕";

const lessonData = [
    // ===== 区块 1：上阕（极写元宵夜满城灯火烟花、车马歌舞的繁华盛况） =====
    ["东风", "dōng fēng", "the east wind / spring breeze", "angin timur (bayu musim bunga)", "偏正名词：春风"],
    ["夜", "yè", "at night", "pada waktu malam", "名词作状语：在夜晚"],
    ["放", "fàng", "causes to bloom / sets off", "memekarkan / menyalakan", "古义：使……怒放、绽放（使动用法）\n今义：放置、释放"],
    ["花千树", "huā qiān shù", "a thousand trees of blossoms (countless lanterns)", "seribu pohon bunga (ribuan tanglung yang indah)", "借喻兼夸张：形容元宵节满城花灯齐明，璀璨得如同春风吹开了千树繁花"],
    ["。", "", "", "", ""],
    ["更", "gèng", "furthermore / even more", "bahkan lagi / tambahan pula", "古义：更加、又（副词，读第四声 gèng）\n今义：更加或变更（gēng）"],
    ["吹落", "chuī luò", "blowing down", "meniup jatuh", "动补短语：吹落下来"],
    ["，", "", "", "", ""],
    ["星如雨", "xīng rú yǔ", "stars like rain (cascading fireworks)", "bintang-bintang bagaikan hujan (bunga api)", "比喻兼夸张：形容漫天绽放的烟花焰火像星雨般纷纷坠落"],
    ["。", "", "", "", ""],
    ["宝马", "bǎo mǎ", "precious骏马 / fine horses", "kuda yang berharga", "偏正名词：名贵的骏马"],
    ["雕车", "diāo chē", "ornately carved carriages", "kereta kuda yang berukir indah", "偏正名词：雕饰华丽的马车（“宝马雕车”代指达官显贵的车马）"],
    ["香满路", "xiāng mǎn lù", "fragrance filling the streets", "haruman memenuhi sepanjang jalan", "主谓短语：车中贵妇身上的脂粉香气弥漫了整条道路"],
    ["。", "", "", "", ""],
    ["凤箫", "fèng xiāo", "phoenix flute (melodious music)", "seruling phoenix (muzik merdu)", "偏正名词：排箫的美称，此代指元宵夜悠扬悦耳的管弦乐声"],
    ["声动", "shēng dòng", "music resounding everywhere", "bunyi muzik bergema", "主谓短语：乐声四处回荡"],
    ["，", "", "", "", ""],
    ["玉壶", "yù hú", "the jade-pot moon / white jade lanterns", "bulan purnama bak kendi jed / tanglung jed", "古义：比喻皎洁的明月（一说指白玉般透亮的宫灯）\n今义：玉制的壶"],
    ["光转", "guāng zhuǎn", "light shifting and turning", "cahayanya bergerak beralih", "主谓短语：月光流转偏移，表明时间推移、夜色渐深"],
    ["，", "", "", "", ""],
    ["一夜", "yí yè", "all night long / the whole night", "sepanjang malam", "数量短语（“一”在第四声“夜 yè”前变调读 yí）：整整一夜"],
    ["鱼龙舞", "yú lóng wǔ", "fish and dragon lanterns dancing", "tarian tanglung ikan dan naga", "主谓短语：舞动鱼形、龙形的彩灯（极写彻夜欢腾的百戏歌舞场面）"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 2：下阕（由盛装游女反衬灯火阑珊处孤高淡泊的意中人）

    ["蛾儿", "é r", "moth-shaped hair ornaments", "perhiasan rambut berbentuk rama-rama", "名词：宋代妇女元宵节插戴的用乌金纸剪成的飞蛾形头饰"],
    ["雪柳", "xuě liǔ", "snow-willow hair ornaments", "perhiasan rambut dedalu salji", "名词：宋代妇女元宵节插戴的用白绢或纸制成的柳条形头饰"],
    ["黄金缕", "huáng jīn lǚ", "golden thread hairpins", "jalinan benang emas", "偏正名词：用金丝拧成的彩缕头饰（三者并列借代盛装打扮的仕女）"],
    ["，", "", "", "", ""],
    ["笑语", "xiào yǔ", "laughter and chatter", "gelak tawa dan bual bicara", "并列名词：欢声笑语"],
    ["盈盈", "yíng yíng", "gracefully and cheerfully", "dengan lemah lembut dan merdu", "形容词：仪态轻盈美好的样子，也形容笑语清脆动人"],
    ["暗香", "àn xiāng", "faint, subtle fragrance", "haruman lembut yang samar", "偏正名词：女子身上散发出的淡淡幽香"],
    ["去", "qù", "passing by / walking away", "berlalu pergi", "古义：离开、走过去（动词）\n今义：前往某处"],
    ["。", "", "", "", ""],
    ["众里", "zhòng lǐ", "amidst the crowd", "di celah-celah orang ramai", "方位短语：在万千人群之中"],
    ["寻", "xún", "searching for", "mencari-cari", "动词：寻找、寻觅"],
    ["他", "tā", "her (that person)", "dia (insan yang dicari itu)", "古义：第三人称代词，不分男女，此指词人苦苦追寻的意中人（“那人”）\n今义：专指男性第三人称"],
    ["千百度", "qiān bǎi dù", "hundreds and thousands of times", "beratus-ratus malah beribu-ribu kali", "古义：千百次（度：量词，次、回）\n今义：搜索引擎名或温度度数"],
    ["，", "", "", "", ""],
    ["蓦然", "mò rán", "suddenly / all of a sudden", "secara tiba-tiba / tanpa disangka", "古义：猛然、突然（副词，读 mò rán）\n今义：书面语沿用"],
    ["回首", "huí shǒu", "turning one's head / looking back", "menoleh ke belakang", "动宾短语：回头一看"],
    ["，", "", "", "", ""],
    ["那人", "nà rén", "that person (the ideal one)", "insan itu", "偏正短语：所寻觅的那位意中人（象征词人孤高不群的政治理想与人格化身）"],
    ["却在", "què zài", "was unexpectedly right at", "rupa-rupanya berada di", "偏正/动宾短语：却恰恰站在"],
    ["，", "", "", "", ""],
    ["灯火", "dēng huǒ", "lights and lanterns", "cahaya lampu tanglung"],
    ["阑珊", "lán shān", "dim, sparse and fading", "malap, jarang dan semakin pudar", "古义：零落、稀疏、暗淡（形容词）\n今义：仅用于“灯火阑珊”、“夜色阑珊”"],
    ["处", "chù", "place / corner", "tempat / sudut", "名词：地方（“灯火阑珊处”指灯火零落稀疏、远离喧嚣的幽静角落）"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 出处（自动右对齐落款）

    ["（〔", "", "", "", ""],
    ["南宋", "nán sòng", "Southern Song Dynasty", "Dinasti Song Selatan", "朝代名，南宋", "u"],
    ["〕", "", "", "", ""],
    ["辛弃疾", "xīn qì jí", "Xin Qiji (1140–1207)", "Xin Qiji", "南宋伟大的豪放派爱国词人，字幼安，号稼轩，与苏轼并称“苏辛”", "u"],
    ["《", "", "", "", ""],
    ["青玉案", "qīng yù àn", "Tune: Qingyu'an (Green Jade Table)", "Irama: Qingyu'an", "词牌名（注意：“案”读 àn）"],
    ["·", "", "", "", ""],
    ["元夕", "yuán xī", "Lantern Festival Night", "Malam Cap Goh Meh (Pesta Tanglung)", "词题：农历正月十五元宵节之夜"],
    ["》）", "", "", "", ""]
];
