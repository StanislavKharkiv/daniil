import React from 'react'
const allPoints = [ 
    {id:"", text: "", shortComment: "", comment: "В этом блоке будут менятся ключивые мысли данного пророчества"},
    {id:"#5", text: "Даниила 11:5", shortComment: "Появление двух царей", comment: "- из четырех эллинистических царств появились два сильных царя: Селевк I Никатор в Сирии и Птолемей I в Египте. С этих двух царей началась борьба между «царем северным» и «царем южным»."},
    {id:"#22", text: "Даниила 11:22" , shortComment: "Смерть мессии", comment: "- Был «сокрушен» и «вождь соглашения», заключенного Иеговой Богом с Авраамом для того, чтобы благословить все народы земли. Обещанным согласно этому завету Семенем Авраама был Иисус Христос."},
    {id:"#30", text: "Даниила 11:30" , shortComment: "Последний Южный Царь", comment: "- Усилившись за счет военных кораблей и войск США, царь южный — теперь Англо-Американская мировая держава — начал полномасштабную войну со своим соперником. "},
    {id:"#44", text: "Даниила 11:44" , shortComment: "Последний Северный Царь", comment: "на ежегодном собрании 2018г. было обьявлено о появлении 'северного царя'. Это Россия"},
    {id:"#45", text: "Даниила 11:45" , shortComment: "Нападение на народ Бога", comment: "Во исполнение пророчества разъяренный царь северный выступит в поход против народа Бога. Но каким бы злобным ни было это нападение, народ Иеговы не будет уничтожен."}
]
class KeyPoints extends React.Component {
    state = {
        namber: 0,
    }
    increment() {
        if(this.state.namber > 3) this.setState({namber: 0});
        this.setState({namber: this.state.namber + 1})
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.increment()
        }, 15000)
        
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render() {

        return(
            <React.Fragment>
            <h3 onClick={this.props.close} title="Нажмите чтобы закрыть или открыть ключевые мысли">Ключевые мысли</h3>
            <p className='key-points'><a href={allPoints[this.state.namber].id}>{allPoints[this.state.namber].text}</a><span>{allPoints[this.state.namber].shortComment}</span>{allPoints[this.state.namber].comment}</p>
            </React.Fragment>
        )
    }
}

export default KeyPoints