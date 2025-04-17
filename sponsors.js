function showOneSponsor(elem, url, imgsrc, alt, width, target="_blank") {
    var link = document.createElement("a");
    link.target = target;
    link.href = url;

    var img = document.createElement("img");
    img.src = imgsrc;
    img.width = width;
    img.alt = alt;

    elem.appendChild(link).appendChild(img);
}

function br(elem) {
    elem.appendChild(document.createElement("br"));
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
            showOneSponsor(elem, "https://www.yoyosam.com/", "sponsors/yoyosam.png", "YoYoSam", 300*scale);
            break;
        case 5:
            showOneSponsor(elem, "https://truearcreturntops.ca/", "sponsors/TrueArc.png", "True Arc Return Tops", 300*scale);
            break;
        case 6:
            showOneSponsor(elem, "https://www.gsquaredyoyos.com/store/", "sponsors/GSquared.png", "G Squared", 240*scale);
            break;
    }
}

function loadGoldSponsors(id, scale) {
    elem = document.getElementById(id);
    br(elem);
    
    numSponsors = 7;
//     numPerRow = 3;
// 
//     screen_width = $(document).width();
//     if (screen_width < 700) {
//         scale *= 0.7;
//         numPerRow = 2;
//     } else if (screen_width < 500) {
//         numPerRow = 1;
//     }
    
    order = genRandArray(numSponsors);
    for (i = 0; i < numSponsors; i++) {
        loadOneGoldSponsor(order[i], elem, scale);
//         if (((i + 1) % numPerRow) == 0) {
//             br(elem);
//             br(elem);
//         }
    }
    
    sponsors_height = $("#sponsor-footer").css("height");
    $("#content").css("padding-bottom", "+="+sponsors_height);    
}

