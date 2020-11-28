import {StyleSheet} from 'react-native';
import {palette} from 'src/constants/color';

import {height, width, moderateScale, scale} from 'src/utils/scale';

export default StyleSheet.create({
  container: {
    height: scale(height - 50),
    width,
    backgroundColor: 'white',
    borderTopLeftRadius: 90,
    paddingTop: 25,
    alignItems: 'center',
    top: scale(70),
  },
  header: {alignItems: 'center', flex: 0.15},
  formField: {
    width: width * 0.9,
    flex: 0.15,
    maxHeight: scale(60),
    borderRadius: width * 0.1,
    paddingVertical: 5,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },
  fieldIconWrapper: {
    marginRight: 10,
  },
  icon: {fontSize: moderateScale(18)},
  input: {
    width: width - 110,
    justifyContent: 'center',
  },
  forgotPassword: {
    flex: 0.1,
    flexDirection: 'row',
    width: width * 0.85,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {flex: 0.15, justifyContent: 'center'},
  button: {
    paddingVertical: 15,
    borderRadius: 60,
    backgroundColor: palette.purpleDark,
    alignItems: 'center',
    width: 180,
    maxHeight: 50,
  },
  buttonText: {color: 'white', fontWeight: 'bold', letterSpacing: 1},
  bottomAnchor: {flex: 0.1, bottom: 0, flexDirection: 'row'},
  socialContainer: {
    flex: 0.2,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonWrapper: {
    paddingVertical: 8,
    backgroundColor: 'blue',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    marginRight: scale(15),
  },
  socialIcon: {fontSize: 18, color: palette.white},
  socialText: {color: palette.white, fontSize: 14, marginLeft: 8},
  sigupAnchor: {
    color: palette.purplePrimary,
    fontWeight: 'bold',
  },
});
