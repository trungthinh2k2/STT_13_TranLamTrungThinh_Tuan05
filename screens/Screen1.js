import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Screen1({route,navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img_product} 
            source={require(`../assets/${route.params?route.params:"vs_blue"}.png`)}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.body_content}>
          <View style={styles.title_product}>
            <Text style={styles.text_title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          </View>
          <View style={styles.rating_product}>
            <Image style={styles.img_star} source={require("../assets/star.png")}/>
            <Image style={styles.img_star} source={require("../assets/star.png")}/>
            <Image style={styles.img_star} source={require("../assets/star.png")}/>
            <Image style={styles.img_star} source={require("../assets/star.png")}/>
            <Image style={styles.img_star} source={require("../assets/star.png")}/>
            <TouchableOpacity style={styles.link_see_review}>
              <Text style={styles.text_link}>(Xem 828 đánh giá)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.price_product}>
            <View style={styles.price}>
              <Text style={styles.price_new}>1.790.000 đ</Text>
              <Text style={styles.price_old}>2.000.000 đ</Text>
            </View>
            <View style={styles.infor}>
              <Text style={{fontSize:12, fontWeight:700, color: '#FA0000'}}>
                Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
              <TouchableOpacity style={styles.link_infor}>
                <Image style={styles.img_infor} source={require('../assets/group.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.option_product}>
            <TouchableOpacity style={{backgroundColor:'#ffffff'}}
              onPress={() => {
                navigation.navigate("Screen2",route.params?route.params:"vs_blue");
            }}
              
            >
              <Text style={styles.btn_ChonMau}>4 MÀU-CHỌN MÀU</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body_footer}>
          <TouchableOpacity style={styles.btn}
            onPress={() => alert("Bạn đã chọn mua sản phẩm!")}
          >
            <Text style={styles.btn_ChonMua}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    width: '90%',
    height: 360,
    justifyContent: 'center'
  },
  body:{
    flex:1,
    backgroundColor: '#ffffff',
    width: '90%'
  },
  img_product: {
    width: '96%',
    height: 340,
    top: -2,
    alignItems: 'center',
    resizeMode:'contain'
  },
  body_content: {
    flex: 4,
    backgroundColor: '#ffffff'
  },
  title_product: {
    height: '10%',
  },
  rating_product: {
    height: '15%',
    flexDirection: "row",
  },
  price_product: {
    height: '30%',
    justifyContent: 'space-around'
  },
  price: { 
    flexDirection: 'row', 
  },
  price_new: {
    fontSize:18, 
    fontWeight:700
  }, 
  price_old: {
    fontSize:15, 
    fontWeight:700,
    color: "#000000",
    opacity: 0.5,
    textDecorationLine: 'line-through',
    paddingTop: 1,
    paddingLeft: 30,
  },
  infor: {
    flexDirection: 'row',
  },
  link_infor: {
  },
  img_infor: {  
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  option_product: {
    height: '30%',
  },
  text_title: {
    fontSize:15,
    fontWeight:400,
    
  },
  img_star: {
      width: 23, 
      height: 25,
      marginTop: 8,
      marginRight: 4
  }, 
  text_link: {
    paddingTop: 12,
    paddingLeft: 20,
    fontSize: 15
  },
  body_footer: {
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    backgroundColor: 'red',
    width: '100%',
    height: 46,
    borderRadius: 10,
    alignItems: 'center'
  },
  btn_ChonMau: {
    marginTop: 12,
    textAlign: 'center',
    lineHeight: 32,
    height: 34,
    fontSize: 15,
    fontWeight: 400,
    color: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    border: '1px solid #00000075'
    
  },
  btn_ChonMua: {
    fontSize: 20,
    fontWeight: 400,
    color: '#F9F2F2',
    lineHeight: 46,
  }
});

export default Screen1;