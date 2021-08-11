import React, { useState } from 'react';
import Navbar from '../header/navbar';
import './technology.scss';
import IMAGES from '../../images';
import { SRLWrapper } from 'simple-react-lightbox';

const Technology = () => {
  const [up, setUp] = useState('');

  window.onscroll = () => {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    scrolled > coords ? setUp('show') : setUp('');
  };

  const backToTop = () => {
    const scrollStep = window.pageYOffset / 40;
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -scrollStep);
      setTimeout(backToTop, 0);
    }
  };

  return (
    <React.Fragment>
      <Navbar />

      <SRLWrapper>
        <section className="tech container content">
          {/* Кнопка наверх */}
          <button
            className={`back_to_top ${up}`}
            title="Наверх"
            onClick={backToTop}
          ></button>

          <div className="tech-heading ">
            <h1 className="bottom-line">ТЕХНОЛОГИЯ ИЗГОТОВЛЕНИЯ</h1>
          </div>

          <div className="tech-content">
            <h2>ИНГРЕДИЕНТЫ</h2>
            <p>
              По классической технологии для варки пива необходимы следующие
              ингредиенты:
            </p>
            <h3>Солод</h3>
            <p>
              Солод — намоченные и пророщенные семена злаков: чаще всего ячменя,
              реже — ржи, пшеницы, кукурузы. Проращивание зёрен злаковых культур
              позволяет запустить процесс ферментации. Для прекращения
              дальнейшей ферментации и удаления лишней влаги пророщенные семена
              сушат горячим воздухом. Процесс получения солода делится на
              намачивание и проращивание семян. После замачивания ячмень
              разбухает, внутри зерен начинаются химические реакции,
              расщепляющие крахмал на нужный для брожения солодовый сахар.
            </p>
            <div className="images">
              <a href={IMAGES.solod_3}>
                <img
                  src={IMAGES.solod_3_small}
                  width="300"
                  height="200"
                  alt="Пример солода для пивоварения"
                />
              </a>
              <a href={IMAGES.solod}>
                <img
                  src={IMAGES.solod_small}
                  width="300"
                  height="200"
                  alt="Карамельный, ячменный, пшеничный солод"
                />
              </a>
              <a href={IMAGES.solod_2}>
                <img
                  src={IMAGES.solod_2_small}
                  width="300"
                  height="200"
                  alt="Пример солода для пивоварения"
                />
              </a>
            </div>
            <div className="img_discription">
              <i>Примеры солода для пивоварения (фото кликабельны) </i>
            </div>
            <h3>Хмель</h3>
            <p>
              Хмель придает пиву характерный горький вкус, который компенсирует
              излишнюю солодовую сладость в некоторых сортах пива и способствует
              более сбалансированному вкусу. Хмель также отвечает за
              пенообразование. Заменить данный ингредиент в производстве пива
              без потери качества невозможно. Важно отметить, что для пива
              годятся только шишки женских растений хмеля
            </p>
            <i>
              (прим. Отсюда по всей видимости пошел определенный миф о якобы
              возможном увеличении груди у мужчин при регулярном употреблении
              пива из-за наличия в пиве так называемого «женского гормона».
              Несмотря на то, что в пиве действительно содержится «женский
              гормон» - фитоэстроген, важно понимать, что это растительный
              аналог животного эстрогена, который естественным образом
              вырабатывается в человеческом организме. Содержащийся в хмеле
              фитоэстроген примерно в 5000 раз слабее животного эстрогена,
              поэтому чтобы отрастить себе красивую упругую грудь, придется
              ежедневно употреблять примерно по 5-10 тонн пива (источник -
              телеграм-канал Александра Савицкого t.me/pivamne).).
            </i>
            <p>
              Помимо прочего хмель оказывает огромное влияние на аромат
              (цитрусовые, хвойные, травяные, землистые и прочие оттенки), а
              также является естественным природным консервантом.
            </p>
            <div className="images">
              <a href={IMAGES.hop_1}>
                <img
                  src={IMAGES.hop_1_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Шишки хмеля"
                />
              </a>

              <a href={IMAGES.hop_2}>
                <img
                  src={IMAGES.hop_2_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Шишковой и гранулированный хмель"
                />
              </a>

              <a href={IMAGES.hop_3}>
                <img
                  src={IMAGES.hop_3_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Некоторые виды хмеля"
                />
              </a>
            </div>
            <div className="img_discription">
              <i>Примеры хмеля для пивоварения (фото кликабельны)</i>
            </div>
            <p>
              На внутренней стороне чешуек, составляющих шишку хмеля,
              располагаются желёзки, выделяющие различные смолистые вещества,
              эфирное масло, дубильные вещества и другие химические соединения,
              совокупность которых в подсушенном виде образуют желтый липковатый
              порошок лупулин.
            </p>
            <p>
              Тремя основными группами компонентов, входящих в его состав,
              являются:
            </p>
            <ul>
              <li>
                Альфа-кислоты. После нагревания в растворе придают пиву
                характерный горький вкус. Пивная горечь напрямую зависит от
                количества альфа-кислот в хмеле – чем их больше, тем более
                горькое получится пиво, но только при условии полной
                изомеризации, которая возможна только при длительном кипячении
                (именно поэтому хмель для горечи добавляют в начале варки
                сусла).
              </li>
              <li>
                Бета-кислоты: в отличие от горечи альфа-кислот, горечь
                бета-кислот не очень приятна, более агрессивная и жесткая,
                поэтому хмель с большим содержанием бета-кислот пользуется
                меньшим спросом. По мере созревания пива бета-кислоты продолжают
                окисляться и горчат ещё больше. Также обладают
                антибактериальными свойствами.
              </li>
              <li>
                Эфирные масла – смесь нескольких химических соединений, терпенов
                и их производных, которые в основном и отвечают за те или иные
                вкусо-ароматические составляющие, которые мы ассоциируем с
                хмелем.
              </li>
            </ul>
            <div className="hop-4">
              <img
                src={IMAGES.hop_4}
                width="800"
                height="900"
                loading="lazy"
                alt="Вкусы и ароматы популярных сортов хмелей"
              />
            </div>
            <div className="img_discription">
              <i>Вкусы и ароматы популярных сортов хмелей </i>
            </div>
            <p>
              Соотношение этих компонентов разнится от сорта к сорту. Для
              удобства все сорта хмеля делят на горькие, ароматические и хмели
              двойного назначения. В пивоварении используется несколько форм
              хмеля, а именно:
            </p>
            <ul>
              <li>
                Шишковой хмель – это минимально обработанные цветки хмеля,
                фактически сушеные шишки. Считается, что шишковой хмель лучше
                передаёт пиву вкус и аромат, чем его обработанные версии.
                Высушенные цветки хмеля во время традиционного охмеления сусла
                всплывают на поверхность, поэтому их легко отделить на этапе
                фильтрации. Недостаток у них один: шишки хмеля занимают много
                места, что усложняет их хранение и транспортировку.
              </li>
              <li>
                Гранулированный хмель – более современная и популярная форма
                хмеля, которая представляет собой высушенные, раздробленные и
                спрессованные шишки хмеля в виде пеллет. Благодаря смолистым
                веществам гранулы не распадаются. Основное преимущество хмеля в
                гранулах заключается в удобстве их хранения и транспортировки.
                По мнению некоторых пивоваров, они уступают по качеству сушеным
                шишкам и брикетированному хмелю.
              </li>
              <li>
                Брикетированный хмель – это шишки хмеля, которые после сушки
                сжали в пробку-диск, весом 15 грамм, что немного уменьшает их
                объем для более удобного хранения. Брикетами удобно
                манипулировать, так как они имеют одинаковый вес. Менее
                популярная форма, но любима многими пивоварами, так как
                считается более качественной, чем пеллетный хмель.
              </li>
              <li>
                Экстракт хмеля – жидкая форма, получаемая экстрагированием хмеля
                растворителем, которым обычно выступает этанол или жидкая
                двуокись углерода. Благодаря экстракции из хмеля извлекаются все
                необходимые биохимические компоненты без их изомеризации.
                Экстракты чаще используются коммерческими пивоварнями, так как
                занимают ещё меньше места, а также позволяют более точно
                контролировать уровень альфа-кислот и других составляющих, ведь
                процесс экстракции можно останавливать при достижении экстрактом
                определённых характеристик.
              </li>
            </ul>
            <div className="images">
              <a href={IMAGES.hop_citra}>
                <img
                  src={IMAGES.hop_citra_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Хмель Цитра"
                />
              </a>
              <img
                src={IMAGES.hop_mosaic}
                width="300"
                height="200"
                loading="lazy"
                alt="Хмель Мозаик"
              />
              <img
                src={IMAGES.hop_simcoe}
                width="300"
                height="200"
                loading="lazy"
                alt="Хмель Симкое"
              />
            </div>
            <div className="img_discription">
              <i>Некоторые виды хмелей (фото кликабельны) </i>
            </div>
            <h3>Вода</h3>
            <p>
              В пивоварении воду различают по составу и концентрации солей. Для
              некоторых сортов пива лучше подходит «жесткая вода» (с высоким
              содержанием солей), например, для мюнхенского. Есть сорта,
              сделанные исключительно на воде с низким содержанием солей
              (пльзеньское пиво). Современные технологии позволяют регулировать
              концентрацию солей в воде с очень высокой долей точности, что
              упрощает производство.
            </p>
            <h3>Дрожжи</h3>
            <p>
              Различают пивные дрожжи низового и верхового брожения. Дрожжи
              верхового брожения (например, Saccharomyces cerevisiae) формируют
              «шапку» на поверхности сусла, предпочитают температуры 14—25 °C
              (поэтому верховое брожение также называется тёплым) и выдерживают
              более высокие концентрации спирта. Путем верхового брожения варят
              такие сорта как портер, эль и стаут.
            </p>{' '}
            <p>
              Дрожжи низового (холодного) брожения (Saccharomyces uvarum,
              Saccharomyces carlsbergensis) имеют оптимум развития при 6—10 °C и
              оседают на дно ферментёра. Сорта: лагерное и среднеевропейское
              пиво. При создании пшеничного пива часто используется Torulaspora
              delbrueckii. При изготовлении ламбика применяются случайно
              попавшие в ферментёр дрожжи, обычно они принадлежат к роду
              Brettanomyces.
            </p>
            <h2>ТЕХНОЛОГИЯ ВАРКИ</h2>
            <h3>Подработка солода</h3>
            <p>
              Предназначенное для пивоварения зерновое сырьё требует
              предварительной обработки, которая заключается в превращении его в
              пивоваренный солод. Процесс включает в себя проращивание зёрен
              злаков (чаще всего ячменя), сушку и очистку от ростков. При
              проращивании крахмал в зёрнах расщепляется на сахара. Различная
              степень сушки солода применяется для приготовления солода разных
              типов — светлого, тёмного, чёрного.
            </p>
            <p>
              Для получения тёмных и особенно карамельных сортов солод
              поджаривают, причём этот процесс, как правило, осуществляется в
              отдельном от пивоварни помещении. Чем сильнее жарят солод, тем
              больше сахаров карамелизуются в нём. Наиболее тёмные сорта солода
              не могут использоваться самостоятельно без светлых сортов, так как
              при обжаривании теряются ферменты, необходимые для осахаривания
              сусла. В здании пивоварни солод пропускают через дробилку, чтобы
              раскрыть оболочку зёрен. Это помогает извлечь больше крахмала в
              процессе затирания. Но зерна не должны превратиться в однородную
              массу. В составе сусла обязательны большие и мелкие крупинки. На
              крупных пивоварнях также применяется замачивание перед дроблением.
            </p>
            <h3>Затирание сусла</h3>
            <p>
              В зависимости от рецептуры в начале непосредственного
              приготовления пива готовится затор — смесь дроблёных
              зернопродуктов (различных сортов солода и других требуемых
              ингредиентов), предназначенных для затирания с водой. При
              смешивании его с водой получается кашица, которая имеет
              сладковатый вкус от растворённых сахаров солода.
            </p>
            <p>
              В ходе затирания производят постепенный нагрев с так называемыми
              «температурными паузами», необходимыми для действия различных
              ферментов. На современном производстве таких пауз несколько:
            </p>
            <ul>
              <li>
                50-52 градуса в течение 10-15 минут (белковая пауза (для
                расщепления белков));
              </li>
              <li>
                62-63 градуса 15-30 минут (действует фермент бета-амилаза,
                который дробит крахмал и декстрины на мелкие фрагменты —
                олигосахариды, мальтозу);
              </li>
              <li>
                70-72 градуса 30 минут (действует альфа-амилаза, дробящая
                крахмал на крупные фрагменты — декстрины).
              </li>
            </ul>
            <p>
              При затирании натуральные ферменты, содержащиеся в солоде,
              расщепляют крахмалы, превращая их в сахара, которые впоследствии
              становятся спиртом. Окончание процесса осахаривания определяют
              йодной пробой (капли раствора йода не должны синеть). Затем затор
              нагревают до 78 градусов (для инактивации ферментов и снижения
              вязкости) и подают на фильтрацию.
            </p>
            <p>
              Существуют технологии затирания с отварками, когда часть затора
              кипятится. Обычно такой способ применяют при использовании
              несоложёного сырья — ячменя, риса, кукурузы, а также при
              производстве тёмных сортов пива.
            </p>
            <h3>Фильтрация затора</h3>
            <p>
              Полученный затор перекачивается в фильтр — чан, где происходит его
              разделение на неохмелённое пивное сусло и дробину — нерастворимые
              остатки затора, остающиеся в процессе фильтрации.
            </p>
            <p>
              Процесс фильтрации состоит из трёх этапов: мэш-аута, рециркуляции
              и промывания. Мэш-аут заключается в нагреве затора до 76 ºC, что
              останавливает ферментативные реакции и сохраняет в сусле
              сбраживаемые сахара, а также делает сусло менее вязким, облегчая
              дальнейшую работу.
            </p>
            <p>
              Затем осуществляется рециркуляция сусла и формируется фильтрующий
              слой, при помощи которого от сусла естественным образом отделяются
              частицы зерна, что делает сусло более прозрачным. Как только сусло
              очистится, оставшуюся дробину, состоящую из шелухи и частиц,
              образовавшихся в процессе затирания, необходимо промыть.
              Промывание дробины осуществляется тёплой водой, чтобы получить из
              дробины как можно больше сахаров для сусла.
            </p>
            <p>
              Также применяют фильтры-прессы, в которых роль фильтровальной
              перегородки играет синтетический материал, а фильтрация происходит
              не под действием тяготения, а пневматическим сжатием
              фильтровальных элементов.
            </p>
            <h3>Кипячение сусла</h3>
            <p>
              Сусло варится 1-2 часа с добавлением хмеля и других необходимых
              ингредиентов. В ходе этого процесса погибают все микроорганизмы и
              разрушаются ферменты, поэтому дальнейшие химические реакции
              невозможны. Пивовары добиваются наперед установленной плотности
              начального сусла, которое на этикетке готового продукта
              обозначается как плотность пива.
            </p>
            <p>
              Во время кипячения ароматические и горькие составные части хмеля
              растворяются, придавая суслу характерные для пива оттенки вкуса и
              аромата. В это же время коагулируют и выпадают в осадок белковые
              вещества, а также выпариваются некоторые ароматические компоненты,
              неблагоприятно влияющие на вкус пива. Также на некоторых заводах
              ускоряют удаление нежелательных остатков центрифугой.
            </p>
            <h3>Осветление сусла</h3>
            <p>
              По окончании варки осуществляется вихревое перемешивание,
              позволяющее сделать сусло ещё более прозрачным в результате
              удаления белков и частичек хмеля, которые оседают на дне. Эти
              частицы, под действием силы трения слоёв жидкости, собираются в
              центре днища гидроциклона. После 20-30 минут отстаивания сусло
              отделяют от нерастворимого остатка — бруха (труба).
            </p>
            <h3>ОХЛАЖДЕНИЕ И АЭРАЦИЯ СУСЛА</h3>
            <p>
              Сусло перекачивается в бродильный резервуар. В течение перекачки
              оно охлаждается и насыщается кислородом, необходимым для
              размножения дрожжей.{' '}
            </p>
            <h3>Брожение</h3>
            <p>
              Под воздействием заданных в сусло дрожжей происходит брожение, при
              котором простейшие сахара, содержащиеся в сусле, превращаются в
              спирт и углекислый газ. Продолжительность брожения и температура
              процесса зависят от того, какие дрожжи были заданы и какое пиво
              хотят получить — верхового или низового брожения. Для пива
              верхового брожения перед добавлением дрожжей сусло охлаждают до
              18-22°C, для пива низового брожения – до 5-10°C. Спустя сутки
              после закладки дрожжей на поверхности бродильного чана появляется
              толстый слой пены. Это значит, что дрожжи успешно начали
              превращать сахар в углекислый газ и спирт. В ходе брожения
              выделяется много тепла, поэтому сусло нуждается в постоянном
              охлаждении, температура должна быть стабильной.
            </p>
            <p>
              На этапе брожения пивовары следят за концентрацией углекислоты в
              чанах. При достижении максимально допустимого уровня газ отводят
              по специальным трубам. Брожение останавливается после того, как
              весь сахар дрожжи переработают на спирт.
            </p>
            <p>
              В результате брожения сусла получается нефильтрованное молодое
              пиво, которому необходимо созревание. Для этого его помещают в
              нержавеющие емкости и оставляют на срок от нескольких недель до 4
              месяцев, поддерживая стабильное давление и температуру. Для этого
              процесса получили широкое распространение т. н.
              цилиндро-конические танки (ЦКТ), в которых процессы основного
              брожения и дображивания происходят непрерывно, без перекачки, в
              одной ёмкости.
            </p>
            <h3>Фильтрация и пастеризация</h3>
            <p>
              Затем пиво фильтруется от остатков дрожжей. Фильтрация
              используется обычно в промышленном пивоварении. Используются
              намывные кизельгуровые фильтры, керамические, фильтры-прессы, а
              также сепараторы. Некоторые методы фильтрации уничтожают
              микрофлору пива и увеличивают этим срок его хранения.
            </p>
            <p>
              Некоторые сорта пива подвергаются пастеризации — нагреванию до
              температуры порядка 68-72 °C для увеличения срока хранения.
              Считается, что пастеризация ухудшает вкус.
            </p>
            <h3>Розлив и карбонизация</h3>
            <p>
              После завершения процесса брожения пиво необходимо разлить в кеги
              или бутылки и газировать, либо естественным образом, либо
              принудительно. При принудительной карбонизации CO2 подаётся в
              ёмкость под высоким давлением, чтобы насытить напиток углекислым
              газом. Принудительная карбонизация применяется чаще, так как
              позволяет ускорить процесс и делает пиво ещё более прозрачным.
            </p>
            <p>
              Перед разливом из тары удаляют воздух, ее тщательно моют,
              добиваясь максимальной стерильности. В противном случае ухудшатся
              вкус и плотность напитка, снизится срок хранения.
            </p>
            <div className="images">
              <a href={IMAGES.kak_delayut_pivo}>
                <img
                  src={IMAGES.kak_delayut_pivo_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Общая схема производства пива"
                />
              </a>

              <a href={IMAGES.sushka_soloda}>
                <img
                  src={IMAGES.sushka_soloda_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Сушка солода"
                />
              </a>

              <a href={IMAGES.tank_zatora}>
                <img
                  src={IMAGES.tank_zatora_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Танк для затора сусла"
                />
              </a>

              <a href={IMAGES.drobilka}>
                <img
                  src={IMAGES.drobilka_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Дробилка для солода"
                />
              </a>

              <a href={IMAGES.tanki}>
                <img
                  src={IMAGES.tanki_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Цилиндро-конические танки"
                />
              </a>

              <a href={IMAGES.rozliv_1}>
                <img
                  src={IMAGES.rozliv_1_small}
                  width="300"
                  height="200"
                  loading="lazy"
                  alt="Линия розлива"
                />
              </a>
            </div>
            <h3>Используемые ресурсы при написании статьи:</h3>
            <div className="refs">
              <p>
                АгроПродМаш{' '}
                <a
                  href="https://www.agroprodmash-expo.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.agroprodmash-expo.ru
                </a>
              </p>
              <p>
                The Beer Connoisseur{' '}
                <a
                  href="https://beerconnoisseur.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://beerconnoisseur.com
                </a>
              </p>
              <p>
                Pivo BY{' '}
                <a href="https://pivo.by" target="_blank" rel="noreferrer">
                  https://pivo.by
                </a>
              </p>
              <p>
                Алкофан{' '}
                <a href="https://alcofan.com" target="_blank" rel="noreferrer">
                  https://alcofan.com
                </a>
              </p>
              <p>
                МирБир{' '}
                <a
                  href="https://www.mirbeer.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.mirbeer.ru
                </a>
              </p>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </React.Fragment>
  );
};

export default Technology;
