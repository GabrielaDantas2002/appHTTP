import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/apiconnection';
import Filmes from './src/Filmes/filmes';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      filmes: [],
      loading: true
    };
  }

  async componentDidMount(){
    const response = await api.get('b/62900e3b449a1f3821f0a49c/1');
    this.setState({
      filmes: response.data[0].aluno,
      loading: false
    });

    console.log(response.data)
  }

  render() {

    if(this.state.loading){
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <ActivityIndicator color="#09A6FF" size={40}/>
        </View>
      )
    }else{
      return(
        <View style={styles.container}>
  
          <FlatList
          data={this.state.filmes}
          keyExtractor={item => item.id.toString() }
          renderItem={ ({item}) => <Filmes data={item} /> }
          />
  
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default App;