function showOneSponsor(elem, url, imgsrc, alt, width, target="_blank") {
    img = "<a href='" + url + "' target='" + target + "'><img src='" + imgsrc + "' width='" + width + "px' alt='" + alt + "'>";
    elem.append(img);
}
    
function genRandArray(max) {
    array = new Array();
    for (i = 0; i < max; i++) {
        do {
            num = Math.floor(Math.random() * max);
        } while (array.includes(num));
        array.push(num);
    }
    
    return array;
}

function loadOneGoldSponsor(num, elem, scale) {
    switch (num) {           
        case 0:
            showOneSponsor(elem, "https://www.layerinfinity.com/", "sponsors/layerinfinity.png", "Layer Infinity", 300*scale);
            break;
        case 1:
            showOneSponsor(elem, "https://www.44emporium.com/", "sponsors/44emporium.png", "44 Emporium", 450*scale);
            break;
        case 2:
            showOneSponsor(elem, "https://mfdyoyo.com/", "sponsors/monkeyfinger.png", "MonkeyfingeR", 290*scale);
            break;
        case 3:
            showOneSponsor(elem, "https://www.c3yoyodesign.com/", "sponsors/c3yoyodesign.png", "C3yoyodesign", 400*scale);
            break;
        case 4:
            showOneSponsor(elem, "https://onedropyoyos.com/", "sponsors/onedrop.png", "OneDrop Yoyos", 410*scale);
            break;
        case 5:
            showOneSponsor(elem, "https://yoyoexpert.com/", "sponsors/yoyoexpert.png", "YoYoExpert", 410*scale);
            break;
        case 6:
            showOneSponsor(elem, "http://magicyoyo.cn/", "sponsors/magicyoyo.png", "MagicYoYo", 410*scale);
            break;
        case 7:
            showOneSponsor(elem, "https://truearcreturntops.ca/", "sponsors/TrueArc.png", "True Arc Return Tops", 300*scale);
            break;
    }
}

function loadGoldSponsors(id, scale) {
    elem = $("#"+id);
    
    numSponsors = 8;

    order = genRandArray(numSponsors);
    for (i = 0; i < numSponsors; i++) {
        loadOneGoldSponsor(order[i], elem, scale);
    }
    
    if (scale > 0.5) {
        elem.children('a').children().css('margin', '15px 20px');
    }
}

function loadSilverSponsors(id, scale) {
    elem = $("#"+id);
    
    showOneSponsor(elem, "https://www.yoyosam.com/", "sponsors/yoyosam.png", "YoYoSam", 190*scale);
    showOneSponsor(elem, "https://mk1yoyos.com/", "sponsors/mk1yoyos.png", "Mk1 Yoyos", 140*scale);
}

