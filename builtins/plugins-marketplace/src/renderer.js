// 一个插件列表-插件条目生成函数
function createPluginItem() {
    const parser = new DOMParser();
    return plugin => {
        const temp = `
        <div class="wrap">
            <div class="vertical-list-item">
                <img src="${plugin.thumbnail}" class="thumbnail">
                <div class="info">
                    <h2 class="name">${plugin.name}</h2>
                    <p class="secondary-text description">${plugin.description}</p>
                </div>
                <div class="ops-btns">
                    <button class="q-button q-button--small q-button--secondary details">详情</button>
                    <button class="q-button q-button--small q-button--secondary install">安装</button>
                </div>
            </div>
            <hr class="horizontal-dividing-line" />
            <div class="vertical-list-item">
                <p class="secondary-text extra-information">
                    <span>类型：${plugin.type}</span>
                    <span>版本号：${plugin.version}</span>
                    <span>最后更新：${plugin.last_updated}</span>
                    <span>开发者：
                        <a href="${plugin.author.link}">${plugin.author.name}</a>
                    </span>
                </p>
            </div>
        </div>
        `;
        const doc = parser.parseFromString(temp, "text/html");
        return doc.querySelector(".wrap");
    }
}


// 初始化列表控制区域
function initListCtl(view) {
    // 搜索框
    const search_input = view.querySelector(".search-input");
    search_input.addEventListener("change", event => {

    });


    // 高级选项
    const adv_ops_btn = view.querySelector(".adv-ops-btn");
    const adv_ops_list = view.querySelector(".adv-ops-list");
    adv_ops_btn.addEventListener("click", () => {
        const icon = adv_ops_btn.querySelector(".icon");
        icon.classList.toggle("is-fold");
        adv_ops_btn.classList.toggle("is-active");
        adv_ops_list.classList.toggle("hidden");
    });


    // 选择框
    const all_pulldown_menu_button = view.querySelectorAll(".q-pulldown-menu-button");
    for (const pulldown_menu_button of all_pulldown_menu_button) {
        pulldown_menu_button.addEventListener("click", event => {
            const context_menu = event.currentTarget.nextElementSibling;
            context_menu.classList.toggle("hidden");
        });
    }
    addEventListener("pointerup", event => {
        if (event.target.closest(".q-pulldown-menu-button")) {
            return
        }
        if (!event.target.closest(".q-context-menu")) {
            const all_context_menu = view.querySelectorAll(".q-context-menu");
            for (const context_menu of all_context_menu) {
                context_menu.classList.add("hidden");
            }
        }
    });


    // 插件类型
    const pulldown_menus = view.querySelectorAll(".q-pulldown-menu");
    for (const pulldown_menu of pulldown_menus) {
        const content = pulldown_menu.querySelector(".q-pulldown-menu-button .content");
        const pulldown_menu_list = pulldown_menu.querySelector(".q-pulldown-menu-list");
        const pulldown_menu_list_items = pulldown_menu_list.querySelectorAll(".q-pulldown-menu-list-item");
        pulldown_menu_list.addEventListener("click", event => {
            const target = event.target.closest(".q-pulldown-menu-list-item");
            if (target) {
                for (const pulldown_menu_list_item of pulldown_menu_list_items) {
                    pulldown_menu_list_item.classList.remove("selected");
                }
                target.classList.add("selected");
                const text_content = target.querySelector(".content").textContent;
                content.value = text_content;
                const value = target.dataset.value;
                console.log(value);

            }
        });
    }
}


// 初始化插件列表区域
function initPluginList(view) {
    const pluginItem = createPluginItem();
    const plugin_info = {
        thumbnail: `https://avatars.githubusercontent.com/u/66980784`,
        name: "这里是插件名称",
        description: "为了测试插件市场而写的描述，为了测试插件市场而写的描述，为了测试插件市场而写的描述，为了测试插件市场而写的描述，为了测试插件市场而写的描述",
        type: "扩展",
        version: "0.0.0",
        last_updated: "2023-7-8 | 12:05",
        author: {
            name: "沫烬染",
            link: "https://github.com/mo-jinran"
        }
    }

    const fragment = document.createDocumentFragment();

    for (let _ = 0; _ < 10; _++) {
        const plugin_item = pluginItem(plugin_info);
        fragment.appendChild(plugin_item);
    }

    view.appendChild(fragment);
}


export async function onConfigView(view) {
    const plugin_path = LiteLoader.plugins.plugins_marketplace.path.plugin;
    const css_file_path = `file://${plugin_path}/src/style.css`;
    const html_file_path = `file://${plugin_path}/src/view.html`;

    // CSS
    const link_element = document.createElement("link");
    link_element.rel = "stylesheet";
    link_element.href = css_file_path;
    document.head.appendChild(link_element);

    // HTMl
    const html_text = await (await fetch(html_file_path)).text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html_text, "text/html");
    doc.querySelectorAll("section").forEach(node => view.appendChild(node));

    // 初始化
    initListCtl(view.querySelector(".list-ctl"));
    initPluginList(view.querySelector(".plugin-list"));
}