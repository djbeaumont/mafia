import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, InputGroup, Input, List, ListItem } from 'native-base';

export default class GameList extends Component {

    render() {
        return (
            <Container> 
                <Header>
                    <Title>{ this.props.title }</Title>
                </Header>

                <Content>

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
