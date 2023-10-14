import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Pressable} from 'react-native';


function Screen2({route,navigation}) {
    var [img, setImage] = useState(route.params);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.img}>
                    <Image style={styles.img_product}
                        source={require(`../assets/${img}.png`)}
                    />
                </View>
                <View style={styles.infor_product}>
                    <Text style={styles.text_title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                </View>
        </View>
        <View style={styles.body}>
            <View style={styles.body_content}>
                <Text style={{fontSize: 18, fontWeight: 400, padding: 20}}>Chọn một màu bên dưới:</Text>
                <View style={styles.option}>
                    <Pressable 
                        style={{
                            backgroundColor:'#ffffff',
                            width: 85,
                            height: 80,
                            backgroundColor: '#C5F1FB',
                            marginBottom: 14,
                        }
                    }
                        onPress={()=>{setImage('vs_silver');}}
                    >
                    </Pressable>
                    <Pressable 
                        style={{
                            backgroundColor:'#ffffff',
                            width: 85,
                            height: 80,
                            backgroundColor: '#F30D0D',
                            marginBottom: 14,
                        }
                    }
                        onPress={()=>{setImage('vs_red_a_1');}}
                    >

                    </Pressable>
                    <Pressable 
                        style={{
                            backgroundColor:'#ffffff',
                            width: 85,
                            height: 80,
                            backgroundColor: '#000000',
                            marginBottom: 14,
                        }
                    }
                        onPress={()=>{setImage('vs_black');}}
                        
                    >

                    </Pressable>
                    <Pressable 
                        style={{
                            backgroundColor:'#ffffff',
                            width: 85,
                            height: 80,
                            backgroundColor: '#234896',
                            marginBottom: 14,
                        }
                    }
                        onPress={()=>{setImage('vs_blue');}}
                    ></Pressable>
                </View>
            </View>
            <View style={styles.body_footer}>
                <TouchableOpacity style={styles.btn}
                    onPress={() => {navigation.navigate('Screen1', img)}}
                >
                    <Text style={styles.btn_confirm}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    img: {
        flex: 1,
    },
    img_product: {
        width: 112,
        height: 132,
        resizeMode: 'contain',
    },
    infor_product: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    text_title: {
        width: 164,
        fontSize: 15,
        fontWeight: 400,
        paddingTop: 12
    },
    body: {
        flex: 3,
        backgroundColor: '#C4C4C4',
    },
    body_content: {
        flex: 6,
    },
    option: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    body_footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
    },
    btn: {
        width: '90%',
        height: 44,
        backgroundColor: '#1952E2', 
        opacity: '68%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CA1536',

    },
    btn_confirm: {
        lineHeight: 44,
        fontSize: 20,
        fontWeight: 700,
        color: '#ffffff',
        textAlign: 'center',
    },

});

export default Screen2;