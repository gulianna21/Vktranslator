import React, {Component, useState} from 'react';
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

export default function VK() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myRecording, setMyRecording] = useState(false);
  const [allRecording, setAllRecording] = useState(true);
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);

  const renderHeader = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setIsModalVisible(false);
          }}
          style={styles.header}>
          <Icon
            name="close"
            size={30}
            color={'white'}
            style={styles.iconClose}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderStatus = () => {
    return (
      <View style={styles.status}>
        <Avatar
          rounded
          size={60}
          source={{url: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'}}
        />
        <View style={styles.statusContent}>
          <Text style={styles.name}> Юлия Гуськова </Text>
          <Text style={styles.statusText}> "какой-то статус" </Text>
          <View style={styles.st}>
            <Text style={styles.statusIn}>online</Text>
            <Icon name="tablet" size={15} color="grey" />
          </View>
        </View>
      </View>
    );
  };

  const renderActionButton = (names: string, title: string) => {
    return (
      <TouchableOpacity style={styles.viewAction}>
        <Icon
          name={names}
          size={19}
          color={'#0000FF'}
          style={styles.iconAction}
        />
        <Text style={styles.mainText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const renderMainInfo = () => {
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
  };

  images = [
    {
      url: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
    },
    {
      url: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
    },
    {
      url: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
    },
  ];

  const renderImage = () => {
    return this.images.map((img) => (
      <View style={styles.renderImage}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Image
            source={{
              url: img.url,
            }}
            resizeMode={'contain'}
            style={styles.photo}
          />
        </TouchableOpacity>
      </View>
    ));
  };

  const renderSwitch = (title: string, active1: boolean, active2: boolean) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setMyRecording(active1),
            setAllRecording(active2),
            setSwitch1(active2),
            setSwitch2(active1)
        }}>
        <Text style={active1 ? styles.activeTitle : styles.notActive}>
          {title}
        </Text>
        {active1 && <View style={styles.underline} />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView edges={['top']} backgroundColor={'white'} zIndex={1000}>
      {renderStatus()}
      <View style={styles.viewEdit}>
        <TouchableOpacity style={styles.edit}>
          <Text style={styles.textEdit}>Редактировать</Text>
        </TouchableOpacity>
        <View style={styles.actionButton}>
          {renderActionButton('camera', 'История')}
          {renderActionButton('pencil', 'Запись')}
          {renderActionButton('photo', 'Фото')}
          {renderActionButton('angellist', 'Клип')}
        </View>
        {renderMainInfo()}
      </View>
      <View style={styles.smallSeparator} />
      <View style={styles.mainCont}>
        <View style={styles.photoBlock}>
          <Text style={styles.mainText}>ФОТОГРАФИИ 3</Text>
          <Icon
            name="angle-right"
            size={13}
            color={'#0000FF'}
            style={styles.iconRight}
          />
        </View>
        <View style={styles.contentModal}>
          <Modal visible={isModalVisible} transparent={true}>
            <View style={styles.modal}>
              <StatusBar barStyle="light-content" />
              {renderHeader()}
              <ImageZoomViewer
                enableImageZoom
                enableSwipeDown
                renderIndicator={() => <View />}
                saveToLocalByLongPress={false}
                onCancel={() => setIsModalVisible(false)}
                imageUrls={this.images}
              />
            </View>
          </Modal>
          {renderImage()}
        </View>
      </View>
      <View style={styles.bigSeparator} />
      <View style={styles.newAll}>
        <TouchableOpacity style={styles.newBlockAva} onPress={() => {}}>
          <Avatar
            rounded
            size="small"
            source={{url: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'}}
          />
          <View style={styles.newBlock}>
            <Text>Что у вас нового?</Text>
          </View>
        </TouchableOpacity>
        <Icon name="image" size={20} color={'#b0b0b0'} style={styles.icons} />
      </View>
      <View style={styles.bigSeparator} />
      <View style={styles.allTask}>
        <View style={styles.allTaskBlock}>
          {renderSwitch('Все записи', switch1, switch2)}
          {renderSwitch('Мои записи', switch2, switch1)}
        </View>
        <Icon name="search" size={19} color={'#b0b0b0'} style={styles.icons} />
      </View>
      <View style={styles.smallSeparator} />
    </SafeAreaView>
  );
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconClose: {
    marginLeft: 14,
    marginTop: 55,
  },
  status: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
  },
  statusContent: {
    flexDirection: 'column',
    paddingTop: 5,
  },
  statusIn: {
    marginLeft: 17,
    fontSize: 14,
    color: '#b0b0b0',
    marginRight: 4,
  },
  st: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  actionButton: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    marginRight: 15,
    marginLeft: 10,
    alignItems: 'center',
  },
  iconAction: {
    marginLeft: 14,
    marginBottom: 5,
  },
  viewAction: {
    alignItems: 'center',
  },
  renderImage: {
    flex: 1,
  },
  edit: {
    paddingVertical: 8,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    borderRadius: 7,
  },
  textEdit: {
    color: '#0000CD',
    fontSize: 15,
  },
  viewEdit: {
    marginTop: 5,
    marginBottom: 10,
  },
  smallSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#DCDCDC',
  },
  bigSeparator: {
    height: 6,
    width: '100%',
    backgroundColor: '#DCDCDC',
  },
  underline: {
    height: 2,
    width: '90%',
    backgroundColor: '#0000FF',
  },
  activeTitle: {
    marginRight: 8,
    marginBottom: 3,
  },
  notActive: {
    marginRight: 8,
    color: '#DCDCDC',
  },
  allTask: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  icons: {
    marginLeft: 10,
  },
  allTaskBlock: {
    flexDirection: 'row',
  },
  newBlock: {
    flex: 2,
    padding: 8,
    backgroundColor: '#DCDCDC',
    borderRadius: 5,
    marginLeft: 9,
  },
  newBlockAva: {
    flexDirection: 'row',
    flex: 1,
  },
  newAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentModal: {
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 5,
  },
  photoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainCont: {
    paddingTop: 10,
  },
  iconRight: {
    marginRight: 19,
  },
});
