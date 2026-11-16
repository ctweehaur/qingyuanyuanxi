// ==========================================================================
// 📖 《青玉案·元夕》深度文本赏析数据库 (analysis.js) - 上阕/下阕标准对齐版
// 键值 1 对应上阕；键值 2 对应下阕
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全词白话译文】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<strong>（上阕）</strong>元宵佳节的夜晚，满城点亮的花灯璀璨夺目，就像春风吹开了千树繁花。夜风又吹落漫天绽放的烟花焰火，如同星雨般纷纷坠落。达官贵人装饰华丽的马车络绎不绝，车中飘出的脂粉香气弥漫了整条街道。悠扬的凤箫声四处回荡，皎洁的明月（或白玉宫灯）光影流转，整整一夜人们都在欢腾地舞动着鱼灯和龙灯。<br>" +
        "<strong>（下阕）</strong>盛装出游的女子们头上插戴着蛾儿、雪柳和黄金缕等精美头饰，一路欢声笑语、仪态轻盈地走过，只留下一缕淡淡的幽香。我在万千人群中苦苦寻觅了她千百次，都不见踪影；不经意间猛然回头一看，原来我心心念念的那个人，却恰恰独自站在灯火零落稀疏的冷清角落里。" +
        "</span><br><br>" +
        "<strong>【创作背景与艺术特色（豪放词宗的婉约绝唱）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《青玉案·元夕》是" + U_TAG("南宋") + "豪放派词宗" + U_TAG("辛弃疾") + "（1140–1207，字幼安，号稼轩）最脍炙人口的传世名作（收录于马来西亚《中二华文》第八单元第1课）。当时强敌金兵压境、北国山河沦陷，而南宋朝廷却偏安临安（杭州），终日沉溺于灯红酒绿的享乐之中；力主抗金的辛弃疾屡遭投降派排挤闲置。在这首词中，词人采用了<strong>“极力铺垫反衬”</strong>与<strong>“香草美人托寓”</strong>的手法：全词前九句（上阕全部及下阕前两句）用满城花灯、星雨烟花、宝马雕车、鱼龙歌舞与盛装游女极写元宵之夜的喧嚣繁华，最后却以惊人的一笔收束于<strong>“灯火阑珊处”的孤高伊人</strong>——既反衬出意中人超凡脱俗、不慕荣利的品格，更寄托了词人自己在苟安浊世中<strong>孤高自许、坚守复国大志而绝不同流合污</strong>的崇高情怀。</span>",

    paragraphs: {
        1: "<strong>【上阕赏析：花千树与星如雨——极力渲染元宵夜的繁华声色】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 上阕前半卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "东风夜[放][花千树]。[更]吹落，[星如雨]。[宝马雕车]香满路。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "元宵夜满城灯火齐明，就像春风在夜里[吹开]✓了[千树繁花]✓。[又]✓吹落漫天烟火，[如同星雨般纷纷坠落]✓。[装饰华贵的富贵车马]✓经过，香气弥漫了整条街路。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("更（更吹落）", "更加、又（副词，读 gèng）", "变更（gēng）") +
                       GRAMMAR_TAG("借喻兼夸张（花千树／星如雨）", "化用岑参“忽如一夜春风来，千树万树梨花开”，以春花喻彩灯、以星雨喻烟花，极写火树银花之盛") +
                   "</div>" +
               "</div>" +

               // 上阕后半卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[凤箫]声动，[玉壶][光转]，一夜[鱼龙舞]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[悠扬的排箫乐声]✓四处回荡，[皎洁的明月（或白玉宫灯）]✓[光影流转夜色渐深]✓，整整一夜人们都在欢腾地[舞动鱼灯和龙灯]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("玉壶", "比喻皎洁的明月（一说指白玉般的彩灯）", "玉制的壶") +
                       GRAMMAR_TAG("视听交融与铺垫作用", "视觉（灯、月、鱼龙舞）、听觉（凤箫声动）、嗅觉（香满路）交织，为下阕核心人物出场蓄足反衬之势") +
                   "</div>" +
               "</div>" +

           "</div>",

        2: "<strong>【下阕赏析：众里寻他千百度——由盛装游女反衬灯火阑珊处的孤高伊人】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 下阕前半卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[蛾儿雪柳黄金缕]，笑语[盈盈][暗香]去。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[满街盛装女子头戴蛾儿、雪柳和黄金缕等华美头饰]✓，欢声笑语、[仪态轻盈美好]✓地走过，留下一缕[淡淡的幽香]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("蛾儿、雪柳、黄金缕", "宋代妇女元宵节佩戴的三种头饰（借代盛装游女）", "昆虫与柳枝") +
                       GRAMMAR_TAG("借代与反衬", "以三种华丽头饰借代追逐繁华的世俗仕女群，反衬下文不慕虚荣的“那人”") +
                   "</div>" +
               "</div>" +

               // 下阕后半卡片（千古词眼）
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[众里]寻[他][千百度]，[蓦然][回首]，那人却在，[灯火阑珊处]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[在万千人群中]✓我寻觅了[她]✓[千百次]✓，[猛然间]✓[回头一看]✓，那个人却恰恰独自站在[灯火零落稀疏的地方]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("千百度", "千百次（度：量词，次）", "搜索引擎名或度数") +
                       ANCIENT_MODERN_TAG("蓦然", "猛然、突然（副词，读 mò rán）", "书面语沿用") +
                       ANCIENT_MODERN_TAG("阑珊", "零落、稀疏、暗淡", "仅用于灯火阑珊") +
                       GRAMMAR_TAG("核心考点（全词词眼与托物言志）", "以繁华热闹反衬“那人”独处冷清角落的孤高淡泊，寄托词人不与苟安权贵同流合污的崇高人格") +
                   "</div>" +
               "</div>" +

           "</div>"
    }
};
