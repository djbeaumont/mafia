import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, InputGroup, Input, List, ListItem } from 'native-base';

export default class GameList extends Component {

    render() {
        return (
            <Container> 
                <Header>
                    <Title>Games</Title>
                </Header>

                <Content>
                     <List>
                        { this.props.games.map(game => (
                            <ListItem key={game} onPress={() => this.props.handleGameSelect(game.name)}>
                                <Text>{ game.name }</Text>
                            </ListItem>
                        ))}
                    </List>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button transparent>
                            <Icon name='ios-call' />
                        </Button>  
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}