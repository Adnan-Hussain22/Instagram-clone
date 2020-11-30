import {StyleSheet} from 'react-native';
import {palette} from 'src/constants/color';

import {
  height,
  width,
  moderateScale,
  scale,
  verticalScale,
} from 'src/utils/scale';

export default StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: palette.white,
    paddingTop: 25,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    flex: 0.15,
    justifyContent: 'flex-start',
  },
  formFieldContainer: {
    flex: 0.15,
    width,
    alignItems: 'center',
  },
  formField: {
    width: width * 0.9,
    maxHeight: scale(60),
    borderRadius: width * 0.1,
    paddingVertical: 5,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: palette.purpleDark,
    backgroundColor: palette.white,
    shadowOffset: {width: 0, height: 2},
    shadowColor: palette.black,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 2,
  },
  fieldIconWrapper: {
    marginRight: 10,
  },
  icon: {fontSize: moderateScale(18)},
  input: {
    width: width - 110,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 60,
    backgroundColor: palette.purpleDark,
    alignItems: 'center',
    width: 180,
    maxHeight: 50,
    elevation: 15
  },
  buttonText: {color: 'white', fontWeight: 'bold', letterSpacing: 1},
  bottomAnchor: {
    flex: 0.15,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  sigupAnchor: {
    color: palette.purplePrimary,
    fontWeight: 'bold',
  },
});
