import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageZoomViewer from 'react-native-image-zoom-viewer';

interface State {
  allRecording: boolean;
  myRecording: boolean;
  isModalVisible: boolean;
}

export default class VK extends Component {
  state: State = {
    allRecording: true,
    myRecording: false,
    isModalVisible: false,
  };

  renderHeader() {
    return (
      <View style={{width: '100%'}}>
        <TouchableOpacity
          onPress={() => this.setState({isModalVisible: false})}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="close"
            size={30}
            color={'white'}
            style={{marginLeft: 14, marginTop: 55}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderStatus() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 10,
          alignItems: 'center',
          paddingVertical: 8,
        }}>
        <Avatar
          rounded
          size={60}
          source={{url: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'}}
        />
        <View style={{flexDirection: 'column', paddingTop: 5}}>
          <Text style={styles.name}> Юлия Гуськова </Text>
          <Text style={styles.statusText}> "какой-то статус" </Text>
          <View style={{flexDirection: 'row', paddingVertical: 4}}>
            <Text style={{marginLeft: 17, fontSize: 14, color: '#b0b0b0'}}>
              online
            </Text>
            <Icon
              name="tablet"
              size={15}
              color="grey"
              style={{marginLeft: 4}}
            />
          </View>
        </View>
      </View>
    );
  }

  renderActionButton() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 10,
          justifyContent: 'space-between',
          marginRight: 15,
          marginLeft: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Icon
            name="camera"
            size={19}
            color={'#0000FF'}
            style={{marginLeft: 14, marginBottom: 5}}
          />
          <Text style={styles.mainText}>История</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Icon
            name="pencil"
            size={19}
            color={'#0000FF'}
            style={{marginLeft: 14, marginBottom: 5}}
          />
          <Text style={styles.mainText}>Запись</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Icon
            name="photo"
            size={19}
            color={'#0000FF'}
            style={{marginLeft: 14, marginBottom: 5}}
          />
          <Text style={styles.mainText}>Фото</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Icon
            name="angellist"
            size={19}
            color={'#0000FF'}
            style={{marginLeft: 14, marginBottom: 5}}
          />
          <Text style={styles.mainText}>Клип</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderMainInfo() {
    return (
      <View>
        <View style={{marginTop: 10, flexDirection: 'row', marginLeft: 5}}>
          <Icon
            name="home"
            size={17}
            color={'#b0b0b0'}
            style={{marginRight: 5}}
          />
          <Text style={styles.statusId}>Город : Нижний новгород</Text>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row', marginLeft: 5}}>
          <Icon
            name="mortar-board"
            size={16}
            color={'#b0b0b0'}
            style={{marginRight: 1}}
          />
          <Text style={styles.statusId}>
            Образование: ННГУ им. Лобачевского
          </Text>
        </View>
        <TouchableOpacity
          style={{marginTop: 10, flexDirection: 'row', marginLeft: 8}}>
          <Icon
            name="briefcase"
            size={15}
            color={'#0000FF'}
            style={{marginRight: 8}}
          />
          <Text style={styles.mainText}>Укажите место работы</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 10, flexDirection: 'row', marginLeft: 12}}>
          <Icon
            name="info"
            size={17}
            color={'#0000FF'}
            style={{marginRight: 11}}
          />
          <Text style={styles.mainText}>Подробная информация</Text>
        </TouchableOpacity>
      </View>
    );
  }

  images = [
    'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
    'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
  ];

  renderImageViews(urlImg: string, index: number) {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.setState({isModalVisible: true})}>
        <Image
          source={{
            url: urlImg,
          }}
          resizeMode={'contain'}
          style={styles.photo}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView edges={['top']} backgroundColor={'white'} zIndex={1000}>
        {this.renderStatus()}
        <View style={{marginTop: 5, marginBottom: 10}}>
          <TouchableOpacity
            style={{
              paddingVertical: 8,
              backgroundColor: '#DCDCDC',
              alignItems: 'center',
              borderRadius: 7,
            }}>
            <Text style={{color: '#0000CD', fontSize: 15}}>Редактировать</Text>
          </TouchableOpacity>
          {this.renderActionButton()}
          {this.renderMainInfo()}
        </View>
        <View style={{height: 1, width: '100%', backgroundColor: '#DCDCDC'}} />
        <View style={{paddingTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.mainText}>ФОТОГРАФИИ 5</Text>
            <Icon
              name="angle-right"
              size={13}
              color={'#0000FF'}
              style={{marginRight: 19}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              marginLeft: 20,
              width: '100%',
            }}>
            <Modal visible={this.state.isModalVisible} transparent={true}>
              <View
                style={{
                  backgroundColor: 'black',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}>
                <StatusBar barStyle="light-content" />
                {this.renderHeader()}
                <ImageZoomViewer
                  enableImageZoom
                  enableSwipeDown
                  renderIndicator={() => <View />}
                  saveToLocalByLongPress={false}
                  onCancel={() => this.setState({isModalVisible: false})}
                  imageUrls={this.images}
                />
              </View>
            </Modal>
            {this.images.map(this.renderImageViews)}
          </View>
        </View>
        <View style={{height: 6, width: '100%', backgroundColor: '#DCDCDC'}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Avatar rounded size="small" source={require('../../img/5.jpg')} />
          <View
            style={{
              flex: 2,
              padding: 8,
              backgroundColor: '#DCDCDC',
              borderRadius: 5,
              marginLeft: 9,
            }}>
            <Text style={{}}>Что у вас нового?</Text>
          </View>
          <Icon
            name="image"
            size={20}
            color={'#b0b0b0'}
            style={{marginLeft: 10}}
          />
        </View>
        <View style={{height: 6, width: '100%', backgroundColor: '#DCDCDC'}} />
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              disabled={false}
              onPress={() =>
                this.setState({allRecording: true, myRecording: false})
              }>
              <Text
                style={
                  this.state.allRecording
                    ? {marginRight: 8, marginBottom: 3}
                    : {marginRight: 8, color: '#DCDCDC'}
                }>
                Все записи
              </Text>
              {this.state.allRecording && (
                <View
                  style={{
                    height: 2,
                    width: '90%',
                    backgroundColor: '#0000FF',
                  }}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({allRecording: false, myRecording: true})
              }>
              <Text
                style={
                  this.state.myRecording
                    ? {marginRight: 8, marginBottom: 3}
                    : {marginRight: 8, color: '#DCDCDC'}
                }>
                Мои записи
              </Text>
              {this.state.myRecording && (
                <View
                  style={{
                    height: 2,
                    width: '90%',
                    backgroundColor: '#0000FF',
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          <Icon
            name="search"
            size={19}
            color={'#b0b0b0'}
            style={{marginLeft: 10}}
          />
        </View>
        <View style={{height: 1, width: '100%', backgroundColor: '#DCDCDC'}} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginLeft: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  name: {
    marginLeft: 10,
    fontSize: 17,
    color: '#2e2e2e',
    fontWeight: '700',
  },
  statusText: {
    marginLeft: 10,
    paddingTop: 6,
    fontSize: 14,
    color: '#2e2e2e',
  },
  statusId: {
    marginLeft: 7,
    fontSize: 14,
    color: '#b0b0b0',
  },
  mainText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#0000FF',
  },
});
