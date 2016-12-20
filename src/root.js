import React, { Component } from 'react';
import GameList from './GameList';
import Game from './Game';

export default class Root extends Component {

    constructor(props) {
        super(props);
        this.handleGameSelect = this.handleGameSelect.bind(this);

        this.state = {
            chosen: null,
            games: [
                {
                    name: 'First'
                },{
                    name: 'Second'
                },{
                    name: 'Third'
                },{
                    name: 'Fourth'
                },{
                    name: 'Fifth'
                },{
                    name: 'Sixth'
                },{
                    name: 'Seventh'
                }
            ]
        };
    }

    handleGameSelect(game) {
        console.log('oh heck', game);
        this.setState({ chosen: game });
    }

    render() {
        if (this.state.chosen) return <Game title={this.state.chosen} />;
        return <GameList games={this.state.games} handleGameSelect={this.handleGameSelect} />;
    }
}