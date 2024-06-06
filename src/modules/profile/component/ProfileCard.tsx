import {Pressable, View} from 'react-native';
import React from 'react';
import {Text, StackView, EditPen} from 'components';
import {COLORS} from 'utils';
import {IconButton} from 'components/commons/IconButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ProtectedScreens} from 'routes';

type Props = {};

export const ProfileCard = (props: Props) => {
  const {navigate} = useNavigation<NavigationProp<ProtectedScreens>>();

  return (
    <StackView
      align="center"
      style={{
        borderRadius: 9,
        columnGap: 10,
        width: '100%',
        height: 130,
        borderWidth: 2,
        backgroundColor: COLORS.PRIMARY,
        paddingHorizontal: 10,
        marginBottom: '10%',
        marginTop: 20,
      }}>
      <View style={{width: 85, height: 85, backgroundColor: 'green', borderRadius: 50}}></View>
      <View style={{rowGap: 5, flex: 1}}>
        <Text fontSize={20} isBold>
          James Buawer
        </Text>
        <Text fontSize={12}>james @gmail.com</Text>
        <IconButton onPress={() => navigate('update_profile')} size={20} icon={<EditPen />} style={{alignSelf: 'flex-end'}} />
      </View>
    </StackView>
  );
};