import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {IconProps} from 'react-native-vector-icons/Icon';

const IconPayload: any = {
  AntDesign: AntDesign,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  Feather: Feather,
  MaterialCommunityIcons: MaterialCommunityIcons,
  MaterialIcons: MaterialIcons,
  FontAwesome: FontAwesome,
  FontAwesome5: FontAwesome5,
  Fontisto: Fontisto,
  Ionicons: Ionicons,
  Octicons: Octicons,
  SimpleLineIcons: SimpleLineIcons,
};

interface IIconPayload {
  AntDesign: string;
  Entypo: string;
  EvilIcons: string;
  Feather: string;
  MaterialCommunityIcons: string;
  MaterialIcons: string;
  FontAwesome: string;
  FontAwesome5: string;
  Fontisto: string;
  Ionicons: string;
  Octicons: string;
  SimpleLineIcons: string;
}

interface IIcon extends IconProps {
  type: keyof IIconPayload;
}

const Icon = ({type, ...props}: IIcon) => {
  const GetIcon = IconPayload[type] as any;
  return <GetIcon {...props} />;
};

export default Icon;

export type IconTypes = keyof IIconPayload;
