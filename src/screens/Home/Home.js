
import React,{useState,useEffect} from 'react';
import { View, Text, Button,Dimensions,Modal,StyleSheet,TouchableOpacity,ToastAndroid,PermissionsAndroid,Platform,Picker } from 'react-native';
import CalendarComponent from '../../components/CalendarComponent';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';
import Geolocation from 'react-native-geolocation-service';
import {styles} from './styles';


const Home = () =>{
    
    const[fromDate,setFromDate]=useState(null);
    const[toDate,setToDate]=useState(null);
    const[showCalendarInit,setShowCalendarInit]=useState(false);
    const[showCalendarEnd,setShowCalendarEnd]=useState(false);
    const[selectedTime,setSelectedTime]=useState(5);
    const[showAlert,setShowAlert]=useState(false);
    const[latitude,setLatitude]=useState(0)
    const[longitude,setLongitude]=useState(0)
    
    useEffect(() => {

        requestPermissions()

        PushNotification.configure({
            onRegister: function (token) {
              console.log("TOKEN:", token);
            },
            onNotification: function (notification) {
              console.log("NOTIFICATION:", notification);
              setShowAlert(true)
              console.log("showAlert:",showAlert)      
             //  notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            permissions: {
              alert: true,
              badge: true,
              sound: true,
            },
            popInitialNotification: true,
            requestPermissions: Platform.OS === 'ios'
          });
      },[]);

      async function requestPermissions() {
      
        if (Platform.OS === 'android') {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
        }
      }
      
    const getLocation=()=>{
        Geolocation.getCurrentPosition(async (Location) => {
            console.log("Location:",Location)
            setLatitude(Location.coords.latitude)
            setLongitude(Location.coords.longitude)
        }, (err) => {
            console.log(err)
            ToastAndroid.show('GPS location not found.', ToastAndroid.LONG);
        }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 1000 });
    }  
   
    
    const onDayPressInit=(day)=>{
        setFromDate(day.dateString)
        setShowCalendarInit(false)
    }
    const onDayPressEnd=(day)=>{
        setToDate(day.dateString)
        setShowCalendarEnd(false)
    }

    const pushNotify=()=>{
        console.log("selectedTime:",Number(selectedTime))
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            message: "New Notification", // (required)
            date: new Date(Date.now() + selectedTime * 1000), 
          });
    }

    const showAlertModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showAlert}
                onRequestClose={() => {
                    setShowAlert(false)
                }}>
                <View style={styles.overlay}>
                    <View style={styles.window2}>
                        <View style={styles.windowHeader}>
                            <Text style={styles.title}>From Date:{fromDate}   ToDate:{toDate}</Text>
                        </View>
                        <View style={styles.windowContent}>
                            <Text style={styles.modelContenttext}>Latitude :{latitude}</Text>
                            <Text style={styles.modelContenttext}>Longitude :{longitude}</Text>
                            <Text style={styles.modelContenttext}>Time in seconds :{selectedTime}</Text>
                        </View>
                        <View style={styles.windowFooter}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => {
                                    setShowAlert(false)
                                }}
                            >
                                <Text style={[styles.buttonTxt, styles.nextBtn]}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
    
    return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#d5ded1' }}>
                <TouchableOpacity style={{flexDirection:'row',margin:5}} onPress={()=>setShowCalendarInit(!showCalendarInit)}>
                    <Text>Choose FromDate:</Text>
                    <Text>{fromDate}</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity style={{flexDirection:'row',margin:5}} onPress={()=>setShowCalendarEnd(!showCalendarEnd)}>
                <Text>Choose ToDate:</Text>
                <Text>{toDate}</Text>
                </TouchableOpacity>
                
                <CalendarComponent
                minDate={moment().subtract(30, 'days').format('YYYY-MM-DD')}
                maxDate={moment().subtract(1, 'days').format('YYYY-MM-DD')}
                onDayPress={onDayPressInit}
                showCalendar={showCalendarInit}
                markedDates={{
            
                    [fromDate]: { selected: true, selectedDotColor: 'orange' }
                }}
                
            />

            <CalendarComponent
                    minDate={moment().subtract(30, 'days').format('YYYY-MM-DD')}
                    maxDate={moment().subtract(1, 'days').format('YYYY-MM-DD')}
                    showCalendar={showCalendarEnd}
                    onDayPress={onDayPressEnd}
                    markedDates={{
                                        [toDate]: { selected: true, selectedDotColor: 'orange' }
                                    }}
                                />

           <Text>Choose time to schedule notification in sec</Text>
                
                <Picker style={styles.pickerStyle}  
                selectedValue={selectedTime}  
                onValueChange={(itemValue, itemPosition) =>  
                    setSelectedTime(itemValue)
                }  
                >  
                <Picker.Item label="5" value="5" />  
                <Picker.Item label="10" value="10" />  
                <Picker.Item label="15" value="15" />  
                </Picker>  
                                 
           
            <TouchableOpacity style={styles.footerButton} onPress={()=>{
                if(fromDate!=null && toDate!=null ){
                    getLocation()
                    pushNotify()
                }else{
                    alert("Please choose from and to date")
                }
            }}>
                    <Text style={{color:"#fff"}}>Schedule Notification</Text>
            </TouchableOpacity>    
                {showAlertModal()}
            </View>
        )

    }

export default Home    