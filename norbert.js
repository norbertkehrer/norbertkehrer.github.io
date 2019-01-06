
// **** The menu
var the_menu = [
    
    "News",
    [
        ["News",                                        "index.html"]
    ],

    "JavaScript",
    [
         ["Asteroids Binary Translation to JavaScript",     "ast_js.html"],
         ["Astro Fighter Binary Translation to JavaScript", "astrof_js.html"],
         ["Centipede Binary Translation to JavaScript",     "centipede_js.html"],
         ["Sprint Binary Translation to JavaScript",        "sprint_js.html"],
         ["HP-45 Binary Translation to JavaScript",         "hp45_js.html"],
         ["IBM 5110 Emulator",                              "ibm5110_js.html"],
         ["Mailuefterl Emulator",                           "mailuefterl.html"],
         ["Zuse Z22 Emulator",                              "z22.html"]
     ],
 
    "Atari",
    [
        ["Atari PDP-8 Emulator",                        "pdp8.html"],
        ["Atari 800XL Asteroids Emulator",              "ast800xl.html"],
        ["Galaga for the Atari 800XL",                  "galaga.html"],
        ["HP Calculator Emulators for the Atari 800XL", "a800_c64_hp_emu.html"],
        ["Sprint 1 for the Atari 800XL",                "sprint_a800.html"],
        ["Radar Rat Race for the Atari 800XL",          "rrr_a800.html"]
    ],

    "Commodore",
    [
        ["My C64 Programs from the 1980s",              "c64.html"],
        ["YM-64, C64 YM Music Player",                  "ym64.html"],
        ["C64 Asteroids Emulator",                      "astc64.html"],
        ["Plus/4 Asteroids Emulator",                   "astplus4.html"],
        ["Atari Calculator for the C64",                "atari_calc.html"],
        ["HP Calculator Emulators for the C64",         "a800_c64_hp_emu.html"],
        ["Sprint 1 for the C64",                        "sprint_c64.html"],
        ["Teletext Reader for the C64",                 "teletext_c64.html"]
    ],

    "Amstrad CPC",
    [
        ["CPC Phoenix Emulator",                       "phoenix_cpc.html"]
    ],
 
    "MAME",
    [
        ["MAME Driver for Super Tank",                 "supertnk.html"],
        ["MAME Driver for Mad Alien",                  "madalien.html"],
        ["MAME Driver for Dambusters",                 "dambustr.html"]
     ],
 
    "Others",
    [
         ["Vantris Homebrew Arcade Game",                   "vantris.html"],
         ["AstDX Asteroids Emulators",                      "astdx.html"],
         ["Topfield Sat Receiver Emulators",                "topfield.html"],
         ["The 'LineTo' Bug Game",                          "lineto.html"],
         ["BTX Server, Mupid",                              "btx_server.html"],
         ["Floppy and Screen for the Epson HX-20",          "flashx20.html"]
    ],
 
     "Old Java Emus",
     [
        ["Java Arcade Emulator",                            "jae.html"],
        ["Online Sega Master System Emulator",              "nose.html"],
        ["Online NES Emulator",                             "one.html"],
        ["Binary Translated Arcade Games",                  "sbt.html"],
        ["Mailuefterl Emulator",                            "mailuefterl_j.html"]
     ],
 
     "Contact",
     [
        ["Email",                                           "email.html"],
        ["Twitter",                                         "other_contact.html"]
    ]

    ];


var the_title = "Norbert's Emulators"

var the_footer = "Norbert Kehrer, 1999-2019"


// ******************************************************************************************


// *** Globals

var global_menu;



// *** The Onload listener

// Add a listener to fire, when DOM is loaded
document.addEventListener("DOMContentLoaded", function (event) {
    setup_areas();
    setup_menu();
});



// *** The page area

function create_div_with_id (id) {
    var el = document.createElement("DIV");
    el.setAttribute("id", id);
    return el;
};


function create_div_with_class (cl) {
    var el = document.createElement("DIV");
    el.className = cl;
    return el;
};


function setup_areas () {
    var maincontainer = create_div_with_id("maincontainer");

    document.title = the_title;    
    var title_el = document.createElement("H1");    
    var txt = document.createTextNode(the_title);
    title_el.appendChild(txt);

    var topsection = create_div_with_id("topsection");
    var topsection_innertube = create_div_with_class("innertube");

    var contentwrapper = create_div_with_id("contentwrapper");

    var contentcolumn = create_div_with_id("contentcolumn");
    var contentcolumn_innertube = create_div_with_class("innertube");

    var leftcolumn = create_div_with_id("leftcolumn");
    var leftcolumn_innertube = create_div_with_class("innertube");

    global_menu = create_div_with_class("urbangreymenu");

    var footer = create_div_with_id("footer");
    txt = document.createTextNode(the_footer);
    footer.appendChild(txt);


    topsection_innertube.appendChild(title_el);
    topsection.appendChild(topsection_innertube);

    leftcolumn_innertube.appendChild(global_menu);
    leftcolumn.appendChild(leftcolumn_innertube);

    contentcolumn_innertube.appendChild(document.getElementById("page_content"));
    contentcolumn.appendChild(contentcolumn_innertube);

    contentwrapper.appendChild(contentcolumn);

    maincontainer.appendChild(topsection);
    maincontainer.appendChild(contentwrapper);
    maincontainer.appendChild(leftcolumn);
    maincontainer.appendChild(footer);
    
    document.body.appendChild(maincontainer);
};





// *** The menu

function add_menu_section (menu, title, item_list) {
    var el = document.createElement("H3");    
    el.className = "headerbar";
    var txt = document.createTextNode(title);
    el.appendChild(txt);
    var items = document.createElement("UL");
    for (var i = 0; i < item_list.length; i++) {
        var menu_item = item_list[i];
        add_menu_item (items, menu_item[0], menu_item[1]); 
    };
    menu.appendChild(el); 
    menu.appendChild(items); 
};


function add_menu_item (ul, name, link) {
    var li = document.createElement("LI");    
    var a = document.createElement("A");
    a.href = link;  
    var txt = document.createTextNode(name);
    a.appendChild(txt);
    li.appendChild(a);
    ul.appendChild(li); 
};


function setup_menu () {
    //var menu = document.getElementById("menu");
    var menu = global_menu;
    for (var i = 0; i < the_menu.length; i += 2) {
         add_menu_section(menu, the_menu[i], the_menu[i+1]);
    };
};





