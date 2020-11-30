import * as React from 'react';
import {Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import {Box, Text} from 'src/components/Restyle';
import {Images} from 'src/assets/images';
import Icon from 'src/components/Icons';
import {width, scale} from 'src/utils/scale';

import styles from './styles';
import {palette} from 'src/constants/color';

interface LoginScreenProps {}

const SignupScreen = ({}: LoginScreenProps) => {
  return (
    <Box flex={1}>
      {/* <Image
        source={Images.Logo}
        style={{height: 180, width, position: 'absolute', zIndex: -1, top: 0}}
        resizeMode="cover"
      /> */}
      <Box flex={1}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* 0.1 */}
          <Box style={styles.header}>
            <Text variant="headerBig">Let's Get Started!</Text>
            <Text variant="headerSecondary">
              Create Meet Connects Account to Get In!
            </Text>
          </Box>
          {/* 0.15 */}
          <Box style={styles.formFieldContainer}>
            <Box style={styles.formField}>
              <Box style={styles.fieldIconWrapper}>
                <Icon type="FontAwesome" name="user-o" style={styles.icon} />
              </Box>
              <TextInput placeholder="Email" style={styles.input} />
            </Box>
          </Box>
          {/* 0.15 */}
          <Box style={styles.formFieldContainer}>
            <Box style={styles.formField}>
              <Box style={styles.fieldIconWrapper}>
                <Icon
                  type="MaterialIcons"
                  name="smartphone"
                  style={styles.icon}
                />
              </Box>
              <TextInput placeholder="Phone" style={styles.input} />
            </Box>
          </Box>
          {/* 0.15 */}
          <Box style={styles.formFieldContainer}>
            <Box style={styles.formField}>
              <Box style={styles.fieldIconWrapper}>
                <Icon type="Feather" name="lock" style={styles.icon} />
              </Box>
              <TextInput placeholder="Password" style={styles.input} />
            </Box>
          </Box>
          {/* 0.15 */}
          <Box style={styles.formFieldContainer}>
            <Box style={styles.formField}>
              <Box style={styles.fieldIconWrapper}>
                <Icon type="Feather" name="lock" style={styles.icon} />
              </Box>
              <TextInput placeholder="Confirm Password" style={styles.input} />
            </Box>
          </Box>
          {/* 0.15 */}
          <Box style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CREATE</Text>
            </TouchableOpacity>
          </Box>
          {/* 0.15 */}
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

export default SignupScreen;
