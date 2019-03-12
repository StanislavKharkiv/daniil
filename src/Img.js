import React from 'react';
class Img extends React.Component {
state = {
    open: false
}
openImg = () => this.setState({open: !this.state.open});
    render() {
        return (
            <figure className={this.state.open ? 'explanation__modal' : 'explanation__parent_img'} onClick={this.openImg}>
                <button className="explanation__btn btn" onClick={this.openImg}>закрыть</button>
                <img className={this.state.open ? 'explanation__img_open' : 'explanation__img'} src={this.props.src} alt='north and south kings' />
            </figure>
        )
    }
}
export default Img