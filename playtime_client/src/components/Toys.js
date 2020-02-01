import React, { Component } from 'react';

class Toys extends Component {
    render() {
        return(
            <div>
                {this.props.toys.map(toy => {
                    return(
                        <div key={toy.id} className="toy">
                            <h3><a href={toy.link}>{toy.name}</a></h3>
                            <h4>${toy.price}</h4>
                            <h4>{toy.ageRange}</h4>
                            <img src={toy.imageUrl} alt={toy.name}></img>
                        </div>
                    )
                  })}
            </div>
            )
        }
    }

export default Toys;