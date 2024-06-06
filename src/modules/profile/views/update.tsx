import React from 'react';
import {Button, ScreenWrapper, TextInput} from 'components';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProtectedScreens} from 'routes';
import {useAppSelector} from 'redux-store';
import {ScrollView} from 'react-native';
import {UpdateProfileFormPayload} from '../api';
import {useForm} from 'hooks';

type Props = {
  navigation: StackNavigationProp<ProtectedScreens, 'update_profile'>;
};

export const UpdateProfileScreen = ({navigation}: Props) => {
  const {token, user} = useAppSelector(state => state.auth);
  // const {isPending, mutate} = useRegister();
  const {values, handleSubmit, register, errors} = useForm<UpdateProfileFormPayload>({
    defaultValues: {firstName: '', bio: '', lastName: ''},
    validationRule: {bio: 'text', firstName: 'string', lastName: 'string'},
  });

  const onSubmit = (v: UpdateProfileFormPayload) => {
    // mutate(v);
  };
  return (
    <ScreenWrapper noEdges>
      <ScrollView keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled" automaticallyAdjustKeyboardInsets>
        <TextInput
          value={values?.firstName}
          onChangeText={v => register({name: 'firstName', value: v})}
          placeholder="First Name"
          mb={20}
          returnKeyType="next"
          errorMessage={errors?.firstName}
        />
        <TextInput
          value={values?.lastName}
          onChangeText={v => register({name: 'lastName', value: v})}
          placeholder="Last Name"
          mb={20}
          returnKeyType="next"
          errorMessage={errors?.lastName}
        />
        <TextInput placeholder="Email" mb={20} returnKeyType="next" disabled />
        <TextInput
          value={values?.bio}
          onChangeText={v => register({name: 'bio', value: v})}
          placeholder="Bio"
          mb={20}
          returnKeyType="next"
          errorMessage={errors?.bio as string}
          multiline
        />

        <Button text="Save Changes" onPress={() => handleSubmit(onSubmit)} />
      </ScrollView>
    </ScreenWrapper>
  );
};
