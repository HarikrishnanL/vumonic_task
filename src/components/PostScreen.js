import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, FlatList,ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { TextInput } from 'react-native-gesture-handler';
import Firebase from '../../constant/firebaseconfig'; 

import description from '../../constant/description';

export default class PostScreen extends Component {
    constructor(props) {
        super(props)
        // this.ref = firebase.firestore().collection('description');
        this.state = {
            date: "25-02-2020"
        }
    }

    componentDidMount () {
        console.log("firebase")
          Firebase.database().ref('/description').on('value',(snapshot)=>{console.log(snapshot.val())});
    //    console.log(records)
        
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.outerContainer}>
                    <Text>Welcome to the Post</Text>
                </View>
                <View style={styles.card}>
                    <View>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 100, height: 100, marginHorizontal: -15 }}
                                source={{
                                    uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <DatePicker
                            date={this.state.date} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="Select your DOB"
                            format="DD-MM-YYYY"
                            minDate="01-01-1990"
                            maxDate="01-01-2024"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"

                            onDateChange={this.DateHandler}
                        />
                        <TextInput
                            style={styles.postTitleInput}
                            placeholder='Post Title'
                            multiline={true}
                            numberOfLines={5}
                        />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Text style={styles.customAuthor}>Author</Text>
                            <Text style={styles.customAuthor}><Text>0 </Text>Score</Text>
                            <Text style={styles.customAuthor}> Comments</Text>

                        </View>

                        <View style={{ width: '50%', flexDirection: 'row',marginVertical:10 }}>
                            <Button
                                title='Submit'
                            />
                        </View>
                    </View>
                </View>


                <View>
                    {description.map((item)=>{
                         return (
                             <View style={{ marginTop: 5 }}>
                                <View style={styles.descriptionCard}>
                                    <View>
                                        {/* <TouchableOpacity> */}
                                        <Image
                                            style={{ width: 100, height: 100, marginHorizontal: -15 }}
                                            source={{
                                                uri: item.image,
                                            }}
                                        />
                                        {/* </TouchableOpacity> */}
                                    </View>

                                    <View>
                                        <Text>Date:{item.date}</Text>
                                        <Text>{item.post_Title}</Text>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text>{item.Author} </Text>
                                            <Text >{item.Score} Score </Text>
                                            <Text >{item.commentsScore} Comments</Text>

                                        </View>

                                    </View>
                                </View>
                             </View>
                        )
                    })}
                </View>


                


            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({

    outerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },

    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    descriptionCard: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },

    postTitleInput: {
        width: 200,
        // height:100,
        borderWidth: 0.2,
        borderColor: 'black',
        marginVertical: 5
    },
    customAuthor: {
        // backgroundColor: '#ff6f61',
        borderBottomWidth: 1,
        borderBottomColor: '#ff6f61',
        // height: 40,
        // width: '40%',
        marginTop: 10,
        textAlign: 'center',
    },

})
