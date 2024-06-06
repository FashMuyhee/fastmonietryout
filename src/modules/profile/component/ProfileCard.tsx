import {Image, View} from 'react-native';
import React from 'react';
import {Text, StackView, EditPen} from 'components';
import {COLORS} from 'utils';
import {IconButton} from 'components/commons/IconButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ProtectedScreens} from 'routes';
import {useGetUser} from '../api';

type Props = {};

export const ProfileCard = (props: Props) => {
  const {navigate} = useNavigation<NavigationProp<ProtectedScreens>>();
  const {data, isLoading} = useGetUser();

  if (isLoading) {
    return (
      <View
        style={{marginBottom: '10%', width: '100%', height: 130, backgroundColor: '#e7e7e7', marginTop: 20, borderRadius: 9}}
      />
    );
  }

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
      <View style={{width: 85, height: 85}}>
        <Image
          source={{uri: data?.avatar}}
          style={{backgroundColor: COLORS.GREY, resizeMode: 'cover', height: '100%', width: '100%', borderRadius: 50}}
        />
      </View>
      <View style={{rowGap: 5, flex: 1}}>
        <Text fontSize={20} isBold>
          {`${data?.first_name} ${data?.last_name}`}
        </Text>
        <Text fontSize={12}>{data?.email}</Text>
      </View>
      <IconButton onPress={() => navigate('update_profile')} size={25} icon={<EditPen />} style={{alignItems: 'flex-end'}} />
    </StackView>
  );
};
