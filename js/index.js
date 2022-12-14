document.addEventListener("DOMContentLoaded", () => {

    const NAME_HEADERS_CABLES = {
        name: "Назва",
        title: "Короткий опис",
        clamps: "Тип крокодилів",
        areaCopper: "Переріз кабелю",
        length: "Довжина",
        amperage: "Струм",
        using: "Застосування",
        desciptionOne: "Опис",
        desciptionTwo: "Характеристики",
        desciptionThree: "Технічні нюанси",
        price: "Ціна",
    };

    const LIST_DESCRIPTION_CABLES = {
        plasticSmallKG10: {
            name: "Міні",
            title: "Мідна багатодротяна жила загальної площі 10 кв.мм - довжина 2,8 м - максимальний струм 600А",
            clamps: "Пластикові, середні",
            areaCopper: "10 кв.мм",
            length: "2.8 метри",
            amperage: "600А",
            using: "Використовуються для легкових автомобілей з бензиновим двигуном потужністю до 2.0 л.с., які мають аккумулятор до 85 А*ч",
            desciptionOne: "Мідь повного перерізу 10 квадратів. Товарний вигляд – якісний товар – приємно взяти до рук. У комплекті - сучасна опрацьована пам'ятка з використання докладних пояснень і покрокових інструкцій. Мають малу вагу і не займають багато місця у багажнику.",
            desciptionTwo: "Довжина кожного кабелю від одного крокодила до іншого крокодила - 2,8 метри. Кабель - КГ 1*10 - всередині міжний багатожильний провід загальним перетином 10 кв.мм., а зовні гумове обплетення, що не дубіє до мінус 40 градусів. Виробник кабелю – завод КРОК (Запоріжжя). Більшість китайських проводів - товста оплітка, але тонкий кабель усередині і замість міді - пофарбований алюміній.",
            desciptionThree: "Кабель опресований мідними мідними наконечниками та захищений термоусадкою з клеєм для запобігання окисленню. Перемичка між половинками «крокодилів» – мідна лужена плетінка перетином 10 кв.мм. Вона забезпечує велику площу контакту у будь-якій формі клем. Також це забезпечує рівномірний розподіл струму. Крокодили повністю ізольовані, що робить прикурювання помітно безпечнішим і мінімізує ризики короткого замикання.",
            price: "830 грн.",
        },
        metalKG16_3: {
            name: "Класика",
            title: "Мідна багатодротяна жила загальної площі 16 кв.мм - довжина 3,0 м - максимальний струм 1000А",
            clamps: "Металеві",
            areaCopper: "16 кв.мм",
            length: "3.0 метри",
            amperage: "1000А",
            using: "Використовуються для будь-яких легкових автомобілей та мікроавтобусів з бензиновим чи дизельним двигуном",
            desciptionOne: "Мідь повного перерізу 16 квадратів. Товарний вигляд – якісний товар – приємно взяти до рук. У комплекті - сучасна опрацьована пам'ятка з використання докладних пояснень і покрокових інструкцій. Вага 2 кг.",
            desciptionTwo: "Довжина кожного кабелю від одного крокодила до іншого крокодила - 3,0 метри. Кабель - КГ 1*16 - всередині міжний багатожильний провід загальним перетином 16 кв.мм., а зовні гумове обплетення, що не дубіє до мінус 40 градусів. Виробник кабелю – завод КРОК (Запоріжжя). Більшість китайських проводів - товста оплітка, але тонкий кабель усередині і замість міді - пофарбований алюміній.",
            desciptionThree: "Кабель опресований мідними мідними наконечниками та захищений термоусадкою з клеєм для запобігання окисленню. Перемичка між половинками «крокодилів» – мідна лужена плетінка перетином 16 кв.мм. Вона забезпечуючи велику площу контакту у будь-якій формі клем. Також це забезпечує рівномірний розподіл струму. Крокодили повністю ізольовані, що робить прикурювання помітно безпечнішим і мінімізує ризики короткого замикання.",
            price: "1070 грн.",
        },
        plasticBigKG16_3: {
            name: "Сучасна класика",
            title: "Мідна багатодротяна жила загальної площі 16 кв.мм - довжина 3,0 м - максимальний струм 1000А",
            clamps: "Пластикові, великі",
            areaCopper: "16 кв.мм",
            length: "3.0 метри",
            amperage: "1000А",
            using: "Використовуються для будь-яких легкових автомобілей та мікроавтобусів з бензиновим чи дизельним двигуном",
            desciptionOne: "Мідь повного перерізу 16 квадратів. Товарний вигляд – якісний товар – приємно взяти до рук. У комплекті - сучасна опрацьована пам'ятка з використання докладних пояснень і покрокових інструкцій. Вага 2,3 кг.",
            desciptionTwo: "Довжина кожного кабелю від одного крокодила до іншого крокодила - 3,0 метри. Кабель - КГ 1*16 - всередині міжний багатожильний провід загальним перетином 16 кв.мм., а зовні гумове обплетення, що не дубіє до мінус 40 градусів. Виробник кабелю – завод КРОК (Запоріжжя). Дуже надійні, кабель підключений безпосередньо до клем крокодилів.",
            desciptionThree: "Кабель опресований мідними мідними наконечниками та захищений термоусадкою з клеєм для запобігання окисленню. Перемичка між половинками «крокодилів» – мідна лужена плетінка перетином 16 кв.мм. Вона забезпечуючи велику площу контакту у будь-якій формі клем. Також це забезпечує рівномірний розподіл струму. Крокодили повністю ізольовані, що робить прикурювання помітно безпечнішим і мінімізує ризики короткого замикання.",
            price: "1220 грн.",
        },
        plasticBigKG25_4: {
            name: "Потужні",
            title: "Мідна багатодротяна жила загальної площі 25 кв.мм - довжина 4,0 м - максимальний струм 1400А",
            clamps: "Пластикові, великі",
            areaCopper: "25 кв.мм",
            length: "4.0 метри",
            amperage: "1400А",
            using: "Використовуються для потужних легкових, вантажних автомобілей чи автобусів, військової чи будівельної техніки. А також для постійного використання на СТО у особливо важких умовах.",
            desciptionOne: "Мідь повного перерізу 25 квадратів. Товарний вигляд – якісний товар – приємно взяти до рук. У комплекті - сучасна опрацьована пам'ятка з використання докладних пояснень і покрокових інструкцій. Вага 4,0 кгю",
            desciptionTwo: "Довжина кожного кабелю від одного крокодила до іншого крокодила - 4,0 метри. Кабель - КГ 1*25 - всередині міжний багатожильний провід загальним перетином 25 кв.мм., а зовні гумове обплетення, що не дубіє до мінус 40 градусів. Виробник кабелю – завод КРОК (Запоріжжя). Дуже надійні, кабель підключений безпосередньо до клем крокодилів.",
            desciptionThree: "Кабель опресований мідними мідними наконечниками та захищений термоусадкою з клеєм для запобігання окисленню. Перемичка між половинками «крокодилів» – мідна лужена плетінка перетином 16 кв.мм. Вона забезпечуючи велику площу контакту у будь-якій формі клем. Також це забезпечує рівномірний розподіл струму. Крокодили повністю ізольовані, що робить прикурювання помітно безпечнішим і мінімізує ризики короткого замикання.",
            price: "2050 грн.",
        },

        plasticBigKG35_6: {
            name: "Суперпотужні",
            title: "Мідна багатодротяна жила загальної площі 35 кв.мм - довжина 6,0 м - максимальний струм 1900А",
            clamps: "Пластикові, великі",
            areaCopper: "35 кв.мм",
            length: "6.0 метрів",
            amperage: "1900А",
            using: "Використовуються для військової чи будівельної техніки. А також для постійного використання на СТО у особливо важких умовах.",
            desciptionOne: "Мідь повного перерізу 35 квадратів. Товарний вигляд – якісний товар – приємно взяти до рук. У комплекті - сучасна опрацьована пам'ятка з використання докладних пояснень і покрокових інструкцій. Вага 6.5 кг.",
            desciptionTwo: "Довжина кожного кабелю від одного крокодила до іншого крокодила - 6,0 метрів. Кабель - КГ 1*35 - всередині міжний багатожильний провід загальним перетином 35 кв.мм., а зовні гумове обплетення, що не дубіє до мінус 40 градусів. Виробник кабелю – завод КРОК (Запоріжжя). Дуже надійні, кабель підключений безпосередньо до клем крокодилів.",
            desciptionThree: "Кабель опресований мідними мідними наконечниками та захищений термоусадкою з клеєм для запобігання окисленню. Перемичка між половинками «крокодилів» – мідна лужена плетінка перетином 16 кв.мм. Вона забезпечуючи велику площу контакту у будь-якій формі клем. Також це забезпечує рівномірний розподіл струму. Крокодили повністю ізольовані, що робить прикурювання помітно безпечнішим і мінімізує ризики короткого замикання.",
            price: "3700 грн.",
        },
    }

    const showHeader = () => {
        const currentDiv = document.createElement("div");
        currentDiv.innerHTML = "<p>Стартові пускові дроти прикурювання</p>";
        document.querySelector(".header__div").append(currentDiv);
    }

    const showMenu = () => {
        [LIST_DESCRIPTION_CABLES].map(menuItem => {
            for (let [fieldMenu, nameMenu] of Object.entries(menuItem)) {
                const currentDiv = document.createElement("li");
                currentDiv.className = "menu__item";
                currentDiv.innerHTML = `<a class="menu__title" href="#">${nameMenu.name}</a>`;
                currentDiv.dataset.typeProduct = fieldMenu;
                document.querySelector(".menu").append(currentDiv);
            }
        }
        )
    }

    const showCurrentProduct = (currentCable) => {
        const parentDiv = document.createElement("div");
        parentDiv.className = "main__div";
        document.querySelector(".main__div").replaceWith(parentDiv);
        const currentTable = ["<table>"];
        [currentCable].forEach(rowDescription => {
            for (let [header, description] of Object.entries(rowDescription)) {
                if (header != "menu") {
                    currentTable.push(`<tr><td class="main__td-title">${NAME_HEADERS_CABLES[header]}
                    </td><td class="main__td-text">${description}</td></tr>`);
                }
            }
        })
        currentTable.push("</table>");
        parentDiv.innerHTML = currentTable.join('');
    }

    const showFooter = () => {
        const currentDiv = document.createElement("div");
        currentDiv.innerHTML = '<p>2022 • Document Object Model by <a class="git" href="https://github.com/VikTorNik" target="_blank">VikTorNik</a> </p>';
        document.querySelector(".footer__div").append(currentDiv);
    }

    showHeader();
    showMenu();
    showFooter();

    [...document.querySelectorAll(".menu__item")].forEach(selectMenuItem => {
        selectMenuItem.addEventListener("click", ({ currentTarget }) => {
            const currentProduct = currentTarget.dataset.typeProduct;
            showCurrentProduct(LIST_DESCRIPTION_CABLES[currentProduct]);
        });
    });

    document.querySelector(".menu__item").click();
});

