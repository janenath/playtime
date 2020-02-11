import React, { Component } from 'react';

class Clothes extends Component {
 
    delete = (id, index) => {
        this.props.delete(id, index);
        this.props.handleReRender();
    }  
    update = (item, index) => {
        this.props.update(item, index);
        this.props.handleReRender();
    }  
    // filterItems = (section) => {
    //     let thisSection = this.props.items.filter(item => item.category === section)
    //     return thisSection
    // }
    // renderSection = (section) => {
    //     return(this.filterItems(section).map(item => {
    //       return()
    //         <div className="clothesContainer">
    //             <div key={item.id} className={`clothes ${item.category} ${item.selected}`}>
    //                 <img src={item.image} alt="clothing item"></img>
    //                 <p onClick={this.delete.bind(this, item.id)}>delete</p>
    //             </div>
    //         </div>
    //         )
    //     })
    // )
    // } 

    render() {
        return(
            <div>
                <div className="section">
                    <h3>shirts</h3>
                    <div className="itemsBox">
                    {this.props.items.filter(item => item.category === 'shirts').map((item,index) => {
                        return(
                        <div className="clothesContainer">
                            <div key={item.id} className={`clothes ${item.category} ${item.selected==true ? "selectedItem" : ''}`}>
                                <img src={item.image} alt="clothing item" onClick={e=> this.update(item, index)}></img>
                                <p onClick={this.delete.bind(this, item.id)}>delete</p>
                            </div>
                        </div>
                        )
                        })
                    }
                    </div>
                </div>
                <div className="section">
                    <h3>pants</h3>
                    <div className="itemsBox">
                    {this.props.items.filter(item => item.category === 'pants').map((item,index) => {
                        return(
                        <div className="clothesContainer">
                            <div key={item.id} className={`clothes ${item.category} ${item.selected==true ? "selectedItem" : ''}`}>
                                <img src={item.image} alt="clothing item" onClick={e=> this.update(item, index)}></img>
                                <p onClick={this.delete.bind(this, item.id)}>delete</p>
                            </div>
                        </div>
                        )
                        })
                    }
                    </div>
                </div>
                <div className="section">
                    <h3>dresses</h3>
                    <div className="itemsBox">
                    {this.props.items.filter(item => item.category === 'dresses').map((item,index) => {
                        return(
                        <div className="clothesContainer">
                            <div key={item.id} className={`clothes ${item.category} ${item.selected==true ? "selectedItem" : ''}`}>
                                <img src={item.image} alt="clothing item" onClick={e=> this.update(item, index)}></img>
                                <p onClick={this.delete.bind(this, item.id)}>delete</p>
                            </div>
                        </div>
                        )
                        })
                    }
                    </div>
                </div>
                <div className="section">
                    <h3>jackets</h3>
                    <div className="itemsBox">
                    {this.props.items.filter(item => item.category === 'jackets').map((item,index) => {
                        return(
                        <div className="clothesContainer">
                            <div key={item.id} className={`clothes ${item.category} ${item.selected==true ? "selectedItem" : ''}`}>
                                <img src={item.image} alt="clothing item" onClick={e=> this.update(item, index)}></img>
                                <p onClick={this.delete.bind(this, item.id)}>delete</p>
                            </div>
                        </div>
                        )
                        })
                    }
                    </div>
                </div>
                <div className="section">
                    <h3>accessories</h3>
                    <div className="itemsBox">
                    {this.props.items.filter(item => item.category === 'accessories').map((item,index) => {
                        return(
                        <div className="clothesContainer">
                            <div key={item.id} className={`clothes ${item.category} ${item.selected==true ? "selectedItem" : ''}`}>
                                <img src={item.image} alt="clothing item" onClick={e=> this.update(item, index)}></img>
                                <p onClick={this.delete.bind(this, item.id)}>delete</p>
                            </div>
                        </div>
                        )
                        })
                    }
                    </div>
                </div>
                <div className="section">
                    <h3>shoes</h3>
                    <div className="itemsBox">
                    {this.props.items.filter(item => item.category === 'shoes').map((item,index) => {
                        return(
                        <div className="clothesContainer">
                            <div key={item.id} className={`clothes ${item.category} ${item.selected==true ? "selectedItem" : ''}`}>
                                <img src={item.image} alt="clothing item" onClick={e=> this.update(item, index)}></img>
                                <p onClick={this.delete.bind(this, item.id)}>delete</p>
                            </div>
                        </div>
                        )
                        })
                    }
                    </div>
                </div>
            </div>
            )
        }
    }

export default Clothes;