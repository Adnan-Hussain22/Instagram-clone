import * as React from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Box, Text} from 'src/components/Restyle';
import {Images} from 'src/assets/images';
import Icon from 'src/components/Icons';
import {
  height,
  width,
  moderateScale,
  verticalScale,
  scale,
} from 'src/utils/scale';

import styles from './styles';
import {palette} from 'src/constants/colors';

interface LoginScreenProps {}

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <Box flex={1}>
      {/* 
      
      Initial:
        initial height 100% and resizeMode center 
        Also the login box should be hidden
      
      After:
        Set image image to 150 and resizeMode cover
        Set login box height 150 and show with slidein animated

    */}
      <Image
        source={Images.Logo}
        style={{height: 180, width, position: 'absolute', zIndex: -1, top: 0}}
        resizeMode="cover"
      />
      <Box flex={1}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* 0.15 */}
          <Box style={styles.header}>
            <Text variant="headerBig">Welcome back!</Text>
            <Text variant="headerSecondary">
              Login into your existing account!
            </Text>
          </Box>
          {/* 0.15 */}
          <Box style={[styles.formField, {marginVertical: scale(15)}]}>
            <Box style={styles.fieldIconWrapper}>
              <Icon type="FontAwesome" name="user-o" style={styles.icon} />
            </Box>
            <TextInput
              placeholder="Enter your email address"
              style={styles.input}
            />
          </Box>
          {/* 0.15 */}
          <Box style={styles.formField}>
            <Box style={styles.fieldIconWrapper}>
              <Icon type="Feather" name="lock" style={styles.icon} />
            </Box>
            <TextInput placeholder="Enter your password" style={styles.input} />
          </Box>
          {/* 0.1 */}
          <Box style={styles.forgotPassword}>
            <Text>Forgot Password?</Text>
          </Box>
          {/* 0.15 */}
          <Box style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
          </Box>
          {/* 0.2 */}
          <Box style={styles.socialContainer}>
            <TouchableOpacity
              style={[
                styles.socialButtonWrapper,
                {backgroundColor: palette.purpleDark},
              ]}
            >
              <Icon name="facebook" type="Fontisto" style={styles.socialIcon} />
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialButtonWrapper, {backgroundColor: 'red'}]}
            >
              <Icon
                name="google"
                type="AntDesign"
                style={{fontSize: 18, color: palette.white}}
              />
              <Text style={{color: palette.white, fontSize: 14, marginLeft: 8}}>
                Google
              </Text>
            </TouchableOpacity>
          </Box>
          {/* 0.1 */}
          <Box style={styles.bottomAnchor}>
            <Text marginRight="s">Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.sigupAnchor}>Sign Up</Text>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default LoginScreen;
