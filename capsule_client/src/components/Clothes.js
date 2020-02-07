import React, { Component } from 'react';

class Clothes extends Component {
 
    render() {
        return(
            <div>
                {this.props.clothes.map(item => {
                    return(
                        <div className="clothesContainer">
                            <div key={item.id} className="clothes" className={item.category}>
                                <img src={item.image}></img>
                            </div>
                        </div>
                    )
                  })}
            </div>
            )
        }
    }

export default Clothes;