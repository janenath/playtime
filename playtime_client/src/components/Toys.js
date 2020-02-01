import React, { Component } from 'react';

class Toys extends Component {
    render() {
        return(
            <div>
                {this.props.toys.map(toy => {
                    return(
                        <div className="toyContainer">
                            <div className="toySorter">
                                
                            </div>
                            <div key={toy.id} className="toy">
                                <h3><a href={`/toy/${toy.id}`}>{toy.name}</a></h3>
                                <h4><a href={toy.link} target="_blank">${toy.price}</a></h4>
                                <h4>{toy.ageRange}</h4>
                                <img src={toy.imageUrl} alt={toy.name}></img>
                            </div>
                        </div>
                    )
                  })}
            </div>
            )
        }
    }

export default Toys;