import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, Dimensions } from 'react-native';

const screenWidth : number = Math.round(Dimensions.get('window').width);


interface FABProps{
    color? : string ,
    onPress : VoidFunction,
    position? : 'left'|'center'|'right',
    icon? : string,
    iconColor? : string
};

const FAB: React.FC<FABProps> = (props: FABProps) => {
    
    const color = props.color;
    const onPress = props.onPress;
    const icon = `${props.icon}`;
    const iconColor = `${props.iconColor}`;
    let FABPosition;
    
    if(props.position === 'right'){
        FABPosition = 10;
    }else if(props.position === 'center'){
        FABPosition = screenWidth/2-30;
    }else if(props.position === 'left'){
        FABPosition = screenWidth - 70;
    }
    return (
        <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={onPress}
        style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color,
            width: 60,
            height: 60,
            borderRadius: 90,
            position: 'absolute',
            bottom: 10,
            right: FABPosition,
            elevation: 10,
          }} 
        >
            <Icon name={icon} size={30} color={iconColor} ></Icon>
        </TouchableOpacity>
    );
};
FAB.defaultProps = {
    color : "#049bdb",
    onPress: () => {},
    position: "right",
    icon: "plus",
    iconColor: "white"
}
const FloatingActionButton = FAB;

export default FloatingActionButton;