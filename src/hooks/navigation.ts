import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, RootTabParamList } from '../@types/navigation';
import { CompositeNavigationProp } from '@react-navigation/native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppNavigationProps = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<RootTabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

export const useAppNavigation = () => useNavigation<AppNavigationProps>();
