import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import LogoInCircle from '@/components/LogoInCircle';
import InputField from '@/components/InputField';
import { ToggleSwitch } from '@/components/ToggleSwitch';
import { DefaultButton } from '@/components/DefaultButton';
import { CustomDropdown } from '@/components/Dropdown';
import { CYCLES_OPTIONS, REMINDER_OPTIONS } from '@/constants/subscriptions.constants';
import { SECONDARY_BACKGROUND_COLOR } from '@/constants/Colors';
import { DatePicker } from '@/components/DatePicker';
import { Subscription } from '@/constants/interfaces';
import { Cycles } from '@/constants/enums';

interface SubscriptionFormData {
  name: string;
  price: string;
  startDate: string;
  endDate: string;
  cycle: string;
  notes: string;
  reminderEnabled: boolean;
  reminderTime: string;
  disabled: boolean;
}

export default function CreateSubscription() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');

  const params = useLocalSearchParams();
  const { 
    image, 
    name, 
    backgroundColor, 
    textColor 
  } = params as {
    image: string;
    name: string;
    backgroundColor: string;
    textColor: string;
  };

  const [formData, setFormData] = useState<Subscription>({
    name: name ?? '',
    icon: image,
    backgroundColor: backgroundColor,
    textColor: textColor,
    price: '',
    startDate: '',
    endDate: '',
    cycle: Cycles.monthly,
    notes: '',
    reminderEnabled: false,
    reminderTime: '1 day before',
    disabled: false
  });

  const handleFieldChange = (field: keyof Subscription, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Datos del formulario:', formData);
    // Aquí iría tu lógica para guardar la suscripción
  };


  useEffect(() => {
    navigation.setOptions({
      headerTitle: '', 
      headerStyle: { backgroundColor: SECONDARY_BACKGROUND_COLOR },
      headerLeft: () => (
        <Pressable onPress={ () => navigation.goBack() } style={{ marginLeft: 10 }}>
          <Text style={styles.headerButton}>Cancel</Text>
        </Pressable>
      )
    });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      >

      <View style={styles.logoContainer}>
        <LogoInCircle 
          logo={'https://cdn-icons-png.flaticon.com/512/732/732228.png'}
          backgroundColor={ backgroundColor ?? '#5C6362' }
        />
      </View>

      <View style={styles.formContainer}>

        <InputField
          label={'Name'} 
          value={name ?? ''} 
          placeholder='Service name' 
          onChangeText={(text) => handleFieldChange('name', text)}
        />

        <InputField label={'Price'} placeholder='$0.00' />

        <DatePicker
          label={'Start day'}
          placeholder='today'
          onDateSelected={(date) => setSelectedDate(date)}
          initialDate={selectedDate}
        />

        <DatePicker
          label={'Duration'}
          placeholder='enter an end day if needed'
          onDateSelected={(date) => setSelectedDate(date)}
          initialDate={selectedDate}
          blockPreviousDates={true}
        />

        <CustomDropdown data={CYCLES_OPTIONS} label='Cycle' placeholder='monthly by default'/>

        <InputField label={'Notes'} placeholder='Enter a description' extend={true}/>

        <ToggleSwitch label={'Add reminder'} />

        <CustomDropdown data={REMINDER_OPTIONS} label='How much time before' placeholder='1 day before'/>

        <ToggleSwitch label={'Disable Service'} />
      </View>

      <DefaultButton label={'Save'} onPress={handleSubmit}/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
   headerButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  headerButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: SECONDARY_BACKGROUND_COLOR,
  },
  scrollContent: {
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: SECONDARY_BACKGROUND_COLOR,
  },
  formContainer: {
    width: '100%',
    backgroundColor: SECONDARY_BACKGROUND_COLOR,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
