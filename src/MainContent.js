import React from "react";
import articles from "./articles";
import Gog from "./Gog";
import Img from "./Img";
import SimpleSlider from "./SimpleSlider";
import kings_t1 from "./img/kings_t1.jpg";
import kings_t2 from "./img/kings_t2.jpg";
import kings_t3 from "./img/kings_t3.jpg";
import kings_t4 from "./img/kings_t4.jpg";
import KeyPoints from "./KeyPoints";


// add img to sidebar and verse sorting
function imgSrc (namber) {
    if(namber < 5) this.setState({img: false})
    if(namber > 4 && namber <= 19) this.setState({img: kings_t1})
    if(namber > 19 && namber <= 26) this.setState({img: kings_t2})
    if(namber > 26 && namber <= 31) this.setState({img: kings_t3})
    if(namber > 31) this.setState({img: kings_t4})
}

class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sidebar: true ,
            articl: ' ',
            gog: false,
            img: false,
            mark: 0
        }
        this.show = this.showTextComment.bind(this);
        this.showGog = this.showTextGog.bind(this);
        this.sidebarMainOpen = this.sidebarMainOpen.bind(this);
    }

    showTextComment(e) { 
        let articl = e.target.getAttribute('data');
        let textNamber = +e.target.parentNode.firstChild.textContent;
        let id = +e.target.parentNode.getAttribute('id');
        this.setState({mark: id});
        this.setState({articl: articl});
        imgSrc.call(this, textNamber);
        this.setState({gog: false});
        this.props.dateShow(id);
    }
    showTextGog() {
        this.setState({gog: true});
        this.setState({img: false});
    }
    sidebarMainOpen() {
        this.setState({sidebar: !this.state.sidebar})
    }

    render() {
        return (
            <React.Fragment>
                <section className="main-content">
                    <h2>Даниила 11 глава</h2>
                    <p className={this.state.mark === 2 ? 'text mark' : 'text'} id="2"><span className="text__namber" data={articles[0].all} onClick={this.show}>2</span>И теперь я расскажу тебе истину: Вот, <span className="text__inf" data={articles[0].one} onClick={this.show}>ещё три царя</span> поднимутся в Персии, а <span className="text__inf" data={articles[0].two} onClick={this.show}>четвёртый</span> соберёт больше богатств, чем все остальные. И как только он приобретёт огромное богатство, он поднимет всех против царства Греции.</p>
                    <p className={this.state.mark === 3 ? 'text mark' : 'text'} id="3"><span className="text__namber" data={articles[1].all} onClick={this.show}>3</span>И поднимется <span className="text__inf" data={articles[1].one} onClick={this.show}>могущественный царь</span>, который будет править с великой властью и поступать по своей воле</p>
                    <p className={this.state.mark === 4 ? 'text mark' : 'text'} id="4"><span className="text__namber" data={articles[2].all} onClick={this.show}>4</span>Когда же он поднимется, его царство будет сокрушено и разделено по <span className="text__inf" data={articles[2].one} onClick={this.show}>четырём небесным ветрам</span>, но не достанется его потомкам и не будет управляться с такой властью, с какой правил он, потому что его царство будет искоренено и достанется другим, а не им.</p>
                    <p className={this.state.mark === 5 ? 'text mark' : 'text'} id="5"><span className="text__namber" data={articles[3].all} onClick={this.show}>5</span>И <span className="text__inf" data={articles[3].one} onClick={this.show}>южный царь</span>, один из его князей, станет сильным; он превозможет его и будет править с великой властью, большей, чем у него.</p>
                    <p className={this.state.mark === 6 ? 'text mark' : 'text'} id="6"><span className="text__namber" data={articles[4].all} onClick={this.show}>6</span>По прошествии нескольких лет они заключат друг с другом союз, и <span className="text__inf" data={articles[4].one} onClick={this.show}>дочь южного царя</span> придёт к <span className="text__inf" data={articles[4].two} onClick={this.show}>северному царю</span>, чтобы заключить договор. Но <span className="text__inf" data={articles[4].three} onClick={this.show}>сила её руки не сохранится</span>, и не устоит ни он, ни его сила. Её отдадут — её и тех, которые привели её, а также её родителя и того, благодаря кому она была сильной в те времена.</p>
                    <p className={this.state.mark === 7 ? 'text mark' : 'text'} id="7"><span className="text__namber" data={articles[5].all} onClick={this.show}>7</span>И тот, кто происходит от отростка её корней, поднимется, заняв его положение; он придёт к военной силе, пойдёт против крепости северного царя, будет действовать против них и превозмогать.</p>
                    <p className={this.state.mark === 8 ? 'text mark' : 'text'} id="8"><span className="text__namber" data={articles[6].all} onClick={this.show}>8</span>С их богами, с их литыми идолами, с их дорогими изделиями из серебра и золота и с пленными он придёт в Египет. Несколько лет он будет держаться от северного царя на расстоянии.</p>
                    <p className={this.state.mark === 9 ? 'text mark' : 'text'} id="9"><span className="text__namber" data={articles[7].all} onClick={this.show}>9</span>Он придёт в царство южного царя и потом возвратится в свою землю.</p>
                    <p className={this.state.mark === 10 ? 'text mark' : 'text'} id="10"><span className="text__namber" data={articles[8].all} onClick={this.show}>10</span>А его сыновья будут снаряжаться и соберут многочисленные войска. Придя, он будет продвигаться вперёд, и наводнит землю, и пройдёт. Но он вернётся и будет неистовствовать, пока не достигнет его крепости.</p>
                    <p className={this.state.mark === 11 ? 'text mark' : 'text'} id="11"><span className="text__namber" data={articles[9].all} onClick={this.show}>11</span>Южный царь озлобится, он выступит и сразится с ним, то есть с северным царём; и он поднимет множество людей, но это множество будет отдано в руки того</p>
                    <p className={this.state.mark === 12 ? 'text mark' : 'text'} id="12"><span className="text__namber" data={articles[10].all} onClick={this.show}>12</span>И это множество будет уведено. Его сердце превознесётся, и он погубит десятки тысяч, но он не воспользуется своим выгодным положением.</p>
                    <p className={this.state.mark === 13 ? 'text mark' : 'text'} id="13"><span className="text__namber" data={articles[11].all} onClick={this.show}>13</span>Северный царь вернётся и соберёт войско ещё большее, чем прежнее. Через некоторое время, через несколько лет, он придёт с великим войском и с множеством добра</p>
                    <p className={this.state.mark === 14 ? 'text mark' : 'text'} id="14"><span className="text__namber" data={articles[12].all} onClick={this.show}>14</span>В те времена многие поднимутся против южного царя. И сыновья грабителей из твоего народа поднимутся и попытаются исполнить видение, но не будут иметь успеха</p>
                    <p className={this.state.mark === 15 ? 'text mark' : 'text'} id="15"><span className="text__namber" data={articles[13].all} onClick={this.show}>15</span>Северный царь придёт, насыплет осадный вал и захватит укреплённый город. Силы же юга не устоят, не устоит и его отборный народ, у них не будет силы, чтобы стоять.</p>
                    <p className={this.state.mark === 16 ? 'text mark' : 'text'} id="16"><span className="text__namber" data={articles[14].all} onClick={this.show}>16</span>Вышедший против него будет поступать по своей воле, и никто не устоит перед ним. Он будет стоять в Прекрасной земле, и в его руке будет истребление</p>
                    <p className={this.state.mark === 17 ? 'text mark' : 'text'} id="17"><span className="text__namber" data={articles[15].all} onClick={this.show}>17</span>Он обратит лицо, чтобы прийти со всей силой своего царства. С ним будет заключён договор, и он будет действовать успешно. Ему будет позволено губить дочь женщин. Она не устоит и не останется у него.</p>
                    <p className={this.state.mark === 18 ? 'text mark' : 'text'} id="18"><span className="text__namber" data={articles[16].all} onClick={this.show}>18</span>Он обратит лицо на побережья и захватит многие. И некий военачальник положит конец позору, которому подвергался от него, так что позора больше не будет, и военачальник обратит позор на него самого.</p>
                    <p className={this.state.mark === 19 ? 'text mark' : 'text'} id="19"><span className="text__namber" data={articles[17].all} onClick={this.show}>19</span>Он обратит лицо на крепости своей земли, он споткнётся и упадёт, и его не найдут.</p>
                    <p className={this.state.mark === 20 ? 'text mark' : 'text'} id="20"><span className="text__namber" data={articles[18].all} onClick={this.show}>20</span>Его положение займёт <span className="text__inf" data={articles[18].one} onClick={this.show}>некто</span>, который пошлёт сборщика налогов пройти по великолепному царству, и через несколько дней он будет сокрушён, но не в гневе и не на войне.</p>
                    <p className={this.state.mark === 21 ? 'text mark' : 'text'} id="21"><span className="text__namber" data={articles[19].all} onClick={this.show}>21</span>Его положение займёт <span className="text__inf" data={articles[19].one} onClick={this.show}>презираемый</span>, и на него не возложат достоинства царства. Он придёт в безмятежное время и возьмёт царство лестью</p>
                    <p className={this.state.mark === 22 ? 'text mark' : 'text'} id="22"><span className="text__namber" data={articles[20].all} onClick={this.show}>22</span>Он покорит силы, подобные наводнению. Они будут сокрушены, как и <span className="text__inf" data={articles[20].one} onClick={this.show}>Вождь соглашения</span>.</p>
                    <p className={this.state.mark === 23 ? 'text mark' : 'text'} id="23"><span className="text__namber" data={articles[21].all} onClick={this.show}>23</span>Поскольку они заключат с ним союз, он будет действовать обманом. Он поднимется и станет могущественным с помощью небольшого народа.</p>
                    <p className={this.state.mark === 24 ? 'text mark' : 'text'} id="24"><span className="text__namber" data={articles[22].all} onClick={this.show}>24</span>В безмятежное время он войдёт в лучшую часть подведомственной области и будет делать то, чего не делали ни его отцы, ни отцы его отцов. Он будет разбрасывать среди них награбленное, добычу и имущество. И будет строить замыслы против укреплённых мест, но лишь до времени.</p>
                    <p className={this.state.mark === 25 ? 'text mark' : 'text'} id="25"><span className="text__namber" data={articles[23].all} onClick={this.show}>25</span>Он соберётся с силами и настроит своё сердце против южного царя с великим войском, и южный царь будет готовиться к войне, имея чрезвычайно великое и сильное войско. Но он не устоит, потому что против него будут строить замыслы.</p>
                    <p className={this.state.mark === 26 ? 'text mark' : 'text'} id="26"><span className="text__namber" data={articles[24].all} onClick={this.show}>26</span>Те, кто едят его кушанья, приведут его к гибели. А его <span className="text__inf" data={articles[24].one} onClick={this.show}>войско будет унесено наводнением, и многие падут убитыми</span>.</p>
                    <p className={this.state.mark === 27 ? 'text mark' : 'text'} id="27"><span className="text__namber" data={articles[25].all} onClick={this.show}>27</span>Сердце этих двух царей будет склонно делать зло, и за одним столом они будут говорить ложь. Но успеха не будет, потому что конец настанет только в назначенное время.</p>
                    <p className={this.state.mark === 28 ? 'text mark' : 'text'} id="28"><span className="text__namber" data={articles[26].all} onClick={this.show}>28</span><span className="text__inf" data={articles[26].one} onClick={this.show}>Он</span> возвратится в свою землю со множеством добра, и его сердце будет настроено против святого соглашения. Он будет действовать успешно и возвратится в свою землю.</p>
                    <p className={this.state.mark === 29 ? 'text mark' : 'text'} id="29"><span className="text__namber" data={articles[27].all} onClick={this.show}>29</span>В назначенное время он возвратится и пойдёт против юга, но в последний раз будет не так, как в первый.</p>
                    <p className={this.state.mark === 30 ? 'text mark' : 'text'} id="30"><span className="text__namber" data={articles[28].all} onClick={this.show}>30</span>Против него пойдут <span className="text__inf" data={articles[28].one} onClick={this.show}>корабли Китти́ма</span>, и он упадёт духом. Возвратившись, он <span className="text__inf" data={articles[28].two} onClick={this.show}>разразится угрозами против святого соглашения</span> и будет действовать успешно. Ему придётся вернуться, и он <span className="text__inf" data={articles[28].three} onClick={this.show}>обратит внимание на оставляющих святое соглашение</span>.</p>
                    <p className={this.state.mark === 31 ? 'text mark' : 'text'} id="31"><span className="text__namber" data={articles[29].all} onClick={this.show}>31</span>И от него двинутся силы; они осквернят святилище и крепость и прекратят постоянное жертвоприношение. И поставят <span className="text__inf" data={articles[29].one} onClick={this.show}>мерзость, несущую опустошение</span>.</p>
                    <p className={this.state.mark === 32 ? 'text mark' : 'text'} id="32"><span className="text__namber" data={articles[30].all} onClick={this.show}>32</span>Поступающих нечестиво против соглашения он вовлечёт льстивыми словами в отступничество. Но народ, знающий своего Бога, превозможет и будет действовать успешно.</p>
                    <p className={this.state.mark === 33 ? 'text mark' : 'text'} id="33"><span className="text__namber" data={articles[31].all} onClick={this.show}>33</span>И обладающие пониманием среди народа наделят пониманием многих, хотя несколько дней они будут падать от меча и пламени, плена и грабежа.</p>
                    <p className={this.state.mark === 34 ? 'text mark' : 'text'} id="34"><span className="text__namber" data={articles[32].all} onClick={this.show}>34</span>Но когда они будут падать, им будет оказана небольшая помощь, и многие присоединятся к ним с помощью вкрадчивых слов.</p>
                    <p className={this.state.mark === 35 ? 'text mark' : 'text'} id="35"><span className="text__namber" data={articles[33].all} onClick={this.show}>35</span>И некоторые из обладающих пониманием падут, так что благодаря им совершится переплавка, очищение и убеление, до времени конца, потому что это относится к назначенному времени.</p>
                    <p className={this.state.mark === 36 ? 'text mark' : 'text'} id="36"><span className="text__namber" data={articles[34].all} onClick={this.show}>36</span>И <span className="text__inf" data={articles[34].one} onClick={this.show}>царь</span> будет поступать по своей воле, он будет возвеличиваться и превозноситься над всеми богами, и против Бога богов он будет говорить неслыханные слова. Он будет успешен, пока осуждение не подойдёт к концу, поскольку то, что решено, должно быть исполнено.</p>
                    <p className={this.state.mark === 37 ? 'text mark' : 'text'} id="37"><span className="text__namber" data={articles[35].all} onClick={this.show}>37</span>И он не будет считаться с Богом своих отцов, не будет считаться ни с желанием женщин, ни с каким-либо другим богом, но будет превозноситься над всеми.</p>
                    <p className={this.state.mark === 38 ? 'text mark' : 'text'} id="38"><span className="text__namber" data={articles[36].all} onClick={this.show}>38</span>В своём положении он будет славить бога крепостей, и бога, которого не знали его отцы, будет славить золотом, серебром, драгоценными камнями и ценными вещами.</p>
                    <p className={this.state.mark === 39 ? 'text mark' : 'text'} id="39"><span className="text__namber" data={articles[37].all} onClick={this.show}>39</span>Заодно с чужим богом он будет действовать успешно против самых сильных укреплений. Кто будет признавать его, тем он даст великую славу и поставит их править многими. Он будет наделять землёй за плату.</p>
                    <p className={this.state.mark === 40 ? 'text mark' : 'text'} id="40"><span className="text__namber" data={articles[38].all} onClick={this.show}>40</span>Во время конца южный царь будет биться с ним, и северный царь устремится на него с колесницами, всадниками и многочисленными кораблями. Он войдёт в земли, наводнит и пройдёт их.</p>
                    <p className={this.state.mark === 41 ? 'text mark' : 'text'} id="41"><span className="text__namber" data={articles[39].all} onClick={this.show}>41</span>Он также войдёт в Прекрасную землю, и многие земли будут повержены. Но от его руки спасутся Эдо́м, Моа́в и главные из сыновей Аммо́на.</p>
                    <p className={this.state.mark === 42 ? 'text mark' : 'text'} id="42"><span className="text__namber" data={articles[40].all} onClick={this.show}>42</span>Он будет протягивать руку против земель. Не спасётся и земля Египет.</p>
                    <p className={this.state.mark === 43 ? 'text mark' : 'text'} id="43"><span className="text__namber" data={articles[41].all} onClick={this.show}>43</span>Он будет распоряжаться скрытыми сокровищами — золотом и серебром — и всеми ценностями Египта. И за ним последуют ливийцы и эфиопы.</p>
                    <p className={this.state.mark === 44 ? 'text mark' : 'text'} id="44"><span className="text__namber" data={articles[42].all} onClick={this.show}>44</span>Но от восхода солнца и с севера придут вести, которые встревожат его, и <span className="text__inf" data={articles[42].one} onClick={this.show}>он</span> выступит в сильной ярости, чтобы губить и уничтожать многих.</p>
                    <p className={this.state.mark === 45 ? 'text mark' : 'text'} id="45"><span className="text__namber" data={articles[43].all} onClick={this.show}>45</span><span className="text__inf" data={articles[42].one} onClick={this.show}>Он</span> поставит свои царские шатры между великим морем и святой горой Прекрасной земли. Он придёт к своему концу, и никто не поможет ему.</p>
                    <div><button className="btn" onClick={this.showGog}>Параллельное пророчество</button></div>
                </section>

                <aside className='sidebar'>
                    <div className={this.state.sidebar ? 'sidebarMain' : 'sidebarMainClosed'}>
                        <SimpleSlider/>
                        <KeyPoints close={this.sidebarMainOpen}/>
                    </div>    
                    <div className="explanation">
                        {this.state.img ? <Img src={this.state.img}/> : false}
                        <div className="explanation__p">{this.state.gog ? <Gog /> : this.state.articl}</div>
                    </div>
                </aside>
            </React.Fragment>
        )
    }
}
export default MainContent;