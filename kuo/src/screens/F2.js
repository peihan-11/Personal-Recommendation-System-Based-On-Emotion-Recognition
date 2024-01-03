import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

const F2 = ({navigation}) => {
  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );
  const [imageData, setImageData] = useState('');
  const [imageURL, setImageURL] = useState('');

  const [items, setI] = useState(null);
  const [sweetness, setS] = useState(null);
  const [date, setD] = useState(null);
  const [day, setd] = useState(null);

  let asyncFunc2 = async () => {
    var formdata = new FormData();

    formdata.append('image', imageData);

    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Client-ID 50140947a620cb3',
      },
      body: formdata,
      redirect: 'follow',
    };
    fetch('https://api.imgur.com/3/image', requestOptions)
      .then(res => res.json())
      .then(datas => {
        //console.warn("Resp4", datas);
        //console.warn("Resp4", datas.data.link);
        setImageURL(datas.data.link);
      });
    const requestOption = {
      method: 'POST',
      headers: {
        'Prediction-Key': '07530248e612402fa4934cc3f004b30e',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: imageURL,
      }),
    };
    let resp = await fetch(
      'https://dailyjuicyapple-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/3d77dd50-7027-4d9f-8435-719801ec3cea/classify/iterations/Iteration1/url',
      requestOption,
    );
    let respJson = await resp.json();
    const result = respJson.predictions[0].tagName;
    //console.warn("Resp3", result);
    if (result == 'General') {
      setS('三分糖');
    } else if (result == 'High') {
      setS('五分糖');
    } else if (result == 'Very High') {
      setS('七分糖');
    }
    setI('蘋果');
    setD('10/17');
    setd('10/24');
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      includeExif: true,
    }).then(images => {
      setImage(images.path);
      setImageData(images.data);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      includeExif: true,
    }).then(images => {
      setImage(images.path);
      setImageData(images.data);
    });
  };

  renderInner = () => (
    <View style={styles.panel}>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>拍照</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>從圖庫選擇</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>取消</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderHeader={this.renderHeader}
        renderContent={this.renderInner}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />

      <Animated.View
        style={{
          opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
        }}>
        <View>
          <View style={{backgroundColor: '#ffffff'}}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginTop: 15,
                marginBottom: 0,
                marginLeft: 20,
                fontSize: 40,
                fontWeight: '100',
              }}>
              水果放大鏡
            </Text>
          </View>
          <View style={{backgroundColor: '#ffffff'}}>
            <View style={{margin: 20, alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'black',
                }}
                onPress={() => this.bs.current.snapTo(0)}>
                <View>
                  <ImageBackground
                    source={{
                      uri: image,
                    }}
                    style={{height: 190, width: 190}}
                    imageStyle={{borderRadius: 15}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.Text}>
              <View style={styles.row}>
                <View style={styles.c1}>
                  <Text style={styles.w}>品項</Text>
                </View>
                <View style={styles.c2}>
                  <Text style={styles.w}>{items}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.c1}>
                  <Text style={styles.w}>甜度</Text>
                </View>
                <View style={styles.c2}>
                  <Text style={styles.w}>{sweetness}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.c1}>
                  <Text style={styles.w}>存入日</Text>
                </View>
                <View style={styles.c2}>
                  <Text style={styles.w}>{date}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.c3}>
                  <Text style={styles.w}>保存期限</Text>
                </View>
                <View style={styles.c4}>
                  <Text style={styles.w}>{day}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    asyncFunc2();
                  }}>
                  <Text style={styles.buttonText}>確認</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => {
                    navigation.navigate('水果資料庫');
                  }}>
                  <Text style={styles.buttonText}>存入水果庫</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default F2;

const styles = StyleSheet.create({
  Text: {
    backgroundColor: '#ffe4b5',
    borderRadius: 15,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 80,
  },
  container: {
    flex: 2,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button1: {
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#8b4513',
    fontSize: 30,
    fontWeight: '100',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  c1: {
    height: 50,
    width: 120,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 5,
    marginLeft: 5,
  },
  c2: {
    backgroundColor: '#fff',
    height: 50,
    width: 200,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    marginLeft: 0,
  },
  c3: {
    height: 50,
    width: 140,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 5,
    marginLeft: 5,
  },
  c4: {
    backgroundColor: '#fff',
    height: 50,
    width: 180,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    marginLeft: 0,
  },
  w: {
    fontSize: 25,
  },
  line: {
    backgroundColor: '#000000',
    height: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 2,
    color: '#8b4513',
  },
});
