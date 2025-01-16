// *** Norbert's homepage

const the_website = "";     // for Github

// **** The menu
const the_menu = {

    "News":
    {
        "News": "index.html"
    },

    "JavaScript":
    {
        "Asteroids Binary Translation to JavaScript": "ast_js.html",
        "Astro Fighter Binary Translation to JavaScript": "astrof_js.html",
        "Centipede Binary Translation to JavaScript": "centipede_js.html",
        "Sprint Binary Translation to JavaScript": "sprint_js.html",
        "HP-45 Binary Translation to JavaScript": "hp45_js.html",
        "Tailgunner Binary Translation to JavaScript": "tailgunner.html",
        "IBM 5110 Emulator": "ibm5110_js.html",
        "Mailuefterl Emulator": "mailuefterl.html",
        "Zuse Z22 Emulator": "z22.html",
        "A Behavioral Theory of the Firm": "abtof.html",
        "MONABUS, A Business Simulation Exercise": "monabus.html",
        "Infernal Runner": "infernal_runner_compiled.html",
        "CPC Soundtrakker Player": "st_player.html",
        "Simulation of the Firm through a Budget Computer Program": "mattessich.html"
    },

    "Atari":
    {
        "Atari PDP-8 Emulator": "pdp8.html",
        "Atari 800XL Asteroids Emulator": "ast800xl.html",
        "Galaga for the Atari 800XL": "galaga.html",
        "HP Calculator Emulators for the Atari 800XL": "a800_c64_hp_emu.html",
        "Sprint 1 for the Atari 800XL": "sprint_a800.html",
        "Radar Rat Race for the Atari 800XL": "rrr_a800.html"
    },

    "Commodore":
    {
        "My C64 Programs from the 1980s": "c64.html",
        "YM-64, C64 YM Music Player": "ym64.html",
        "C64 Asteroids Emulator": "astc64.html",
        "Plus/4 Asteroids Emulator": "astplus4.html",
        "Atari Calculator for the C64": "atari_calc.html",
        "HP Calculator Emulators for the C64": "a800_c64_hp_emu.html",
        "Sprint 1 for the C64": "sprint_c64.html",
        "Teletext Reader for the C64": "teletext_c64.html",
        "C64 Centipede Emulator": "centipede_c64.html"
    },

    "Amstrad CPC":
    {
        "CPC Phoenix Emulator": "phoenix_cpc.html"
    },

    "MAME":
    {
        "MAME Driver for Super Tank": "supertnk.html",
        "MAME Driver for Mad Alien": "madalien.html",
        "MAME Driver for Dambusters": "dambustr.html"
    },

    "Others":
    {
        "Vantris Homebrew Arcade Game": "vantris.html",
        "AstDX Asteroids Emulators": "astdx.html",
        "Topfield Sat Receiver Emulators": "topfield.html",
        "The 'LineTo' Bug Game": "lineto.html",
        "BTX Server, Mupid": "btx_server.html",
        "Floppy and Screen for the Epson HX-20": "flashx20.html"
    },

    "Old Java Emus":
    {
        "Java Arcade Emulator": "jae.html",
        "Online Sega Master System Emulator": "nose.html",
        "Online NES Emulator": "one.html",
        "Binary Translated Arcade Games": "sbt.html",
        "Mailuefterl Emulator": "mailuefterl_j.html"
    },

    "Contact":
    {
        "Email": "email.html",
        "Twitter": "other_contact.html"
    }
};


const the_title = "Norbert's Emulators"

const the_footer = "Norbert Kehrer, 1999-2025"

const the_newest_article_number = 130;

const the_nr_of_articles_to_fetch_at_load = 3;
const the_article_path_prefix = the_website + "news/a_";
const the_menu_link_prefix = the_website;
const the_news_div_element = "news";


// ******************************************************************************************


// *** Globals

let current_article_number = the_newest_article_number;

let waiting_for_article_loading_finished = false;   // a hack :-(


// *** The Onload listener

document.addEventListener("DOMContentLoaded", () => {
    setup_app();
    if (document.getElementById(the_news_div_element)) {
        window.addEventListener("scroll", scrollHandler, { passive: true });
        fetchArticle(the_nr_of_articles_to_fetch_at_load);
    };
});



// *** React-like functions

function h(type, props, ...children) {
    return {
        type: type,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === "object"
                    ? child
                    : {
                        type: "TEXT_ELEMENT",
                        props: {
                            text: child,
                            children: []
                        }
                    }
            )
        },
    };
};


function render(element, container) {
    if (element.type === "TEXT_ELEMENT") {
        container.innerHTML = element.props.text;
    }
    else {
        let dom = document.createElement(element.type);
        Object.keys(element.props)
            .filter(key => key !== "children")
            .forEach(name => {
                dom[name] = element.props[name];
            });

        element.props.children.forEach(child =>
            render(child, dom)
        );
        container.appendChild(dom);
    };
};





// *** The page area and the menu

function setup_app() {
    const menu_sections =
        Object.keys(the_menu)
            .map(section =>
                menu_section(section, the_menu[section])
            );
    render(
        h("div", { id: "maincontainer" },
            h("div", { id: "topsection", className: "innertube" },
                h("h1", null,
                    the_title
                )
            ),
            h("div", { id: "contentwrapper" },
                h("div", { id: "contentcolumn" })
            ),
            h("div", { id: "leftcolumn", className: "innertube" },
                h("div", { className: "innertube" },
                    h("div", { id: "global_menu_element", className: "menu" },
                        ...menu_sections
                    )
                )
            ),
            h("div", { id: "footer" },
                the_footer
            )
        ),
        document.body
    );
    document.getElementById("contentcolumn").appendChild(document.getElementById("page_content"));
};


function menu_section(title, item_list) {
    const items =
        Object.keys(item_list)
            .map(menu_item =>
                h("li", null,
                    h("a", { href: the_menu_link_prefix + item_list[menu_item] },
                        menu_item
                    )
                )
            );
    return (
        h("div", null,
            h("h3", { className: "headerbar" },
                "<span style='color: lime'>&#x25BC;</span> " /* green down arrow */ + title
            ),
            h("ul", null,
                ...items
            )
        )
    );
};



// *** The infinitely scrolling news page

// the article is "written" like so:
function article(day, month, year, title, text) {
    const article_date = new Date(year, month - 1, day);
    const formatted_date = article_date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
    render(
        h("div", { className: "article-card" },
            h("div", { className: "article-title" },
                title
            ),
            h("div", { className: "article-date" },
                formatted_date
            ),
            h("p", null,
                text
            ),
        ),
        document.getElementById(the_news_div_element));
};


function fetchArticle(count) {
    if (waiting_for_article_loading_finished) {
        return;
    };
    if ((current_article_number < 0) || (count === undefined)) {
        return;
    };
    const filenum = ("0000" + current_article_number).slice(-4);
    const filename = (the_article_path_prefix + filenum + ".js");
    waiting_for_article_loading_finished = true;
    loadJavaScriptFileAndExecute(filename, () => {
        current_article_number--;
        if (count > 1) {
            fetchArticle(count - 1);
        };
        waiting_for_article_loading_finished = false;
    });
};


function loadJavaScriptFileAndExecute(url, doWhenLoaded) {
    let script = document.createElement("script");
    script.setAttribute("src", url);
    script.setAttribute("type", "application/javascript");
    let loaded = false;
    const loadFunction = () => {
        if (loaded) {
            return;
        };
        loaded = true;
        if (doWhenLoaded !== undefined) {
            doWhenLoaded();
        };
    };
    script.onload = loadFunction;
    script.onreadystatechange = loadFunction;
    document.body.appendChild(script);
};


function scrollHandler() {
    // Get the height of the entire document
    const height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    // Get the current offset, i.e. how far "scrolled down"
    //const offset = window.pageYOffset + window.innerHeight;
    const offset = window.scrollY + window.innerHeight;
    // Fetch next article, if end of page is almost reached
    if (offset >= (height - 500)) {
        fetchArticle(1);
    };
};





