import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: '비',
        subtitle: '비가 오는 날이예요',
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: '맑음',
        subtitle: '맑은 날이예요',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: '천둥번개',
        subtitle: '번개치는 날이예요',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: '흐림',
        subtitle: '흐린 날이예요',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: '눈',
        subtitle: '눈이 오는 날이예요',
        icon: 'weather-snowy'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: '안개',
        subtitle: '안개낀 날이예요 🚩',
        icon: 'weather-fog'
    },
    Mist: {
        colors: ['#D7D2CC', '#304352'],
        title: '습함',
        subtitle: '습한 날이예요 🚩',
        icon: 'weather-fog'
    }
}

function Weather({ weatherName, temp, cityName }) {
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color='white' size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.cityName}>{cityName}</Text>
                <Text style={styles.temp}>{Math.floor(temp - 273.15)}°C</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
      );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
  },
  temp: {
    fontSize: 48,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10
  },
  cityName: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10
  },
  lower: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft: 25
  },
  title: {
      fontSize: 38,
      backgroundColor: 'transparent',
      color: 'white',
      marginBottom: 10,
      fontWeight: '300'
  },
  subtitle: {
      fontSize: 24,
      backgroundColor: 'transparent',
      color: 'white',
      marginBottom: 24
  }
});
