import * as React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from 'src/components/Restyle';
import {PinBox} from 'src/components/PinBox';
import {Button} from 'src/components/Button';

import {styles} from './styles.otp';

export const OptScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = React.useState('');

  const handleKeyPress = (newCode: string) => setCode(newCode);

  const handleConfirm = async () => {
    Keyboard.dismiss();
    navigation.navigate('AccountSetup');
    // await verifyEmail({ id: user?.id || "", token: code });
  };

  const handleResendCode = async () => {
    Keyboard.dismiss();
    // await resendCode(user?.email || "");
  };

  const disabled = code.length < 6;

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <Box flex={1}>
            <View style={[styles.subHeadingWrapper]}>
              <Text
                variant='header'
                style={styles.subHeading}
                marginBottom="s"
              >
                Enter a code
              </Text>
              <Text
                variant="headerSecondary"
                style={styles.instruction}
                marginBottom="s"
              >
                Enter a 4 digit code sent to you on your email to proceed
              </Text>
            </View>
            <View style={styles.numberWrapper}>
              <PinBox value={code.split('')} onKeyPress={handleKeyPress} />
            </View>
            <Box
              flexDirection="row"
              paddingHorizontal="m"
              justifyContent="center"
              flex={0.5}
              width="100%"
            >
              <Button label="Next" onPress={handleConfirm} />
            </Box>
          </Box>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
