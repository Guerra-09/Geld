import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { validateSubscriptionForm } from '@/utils/validation';
import { addSubscription } from '@/store/subscriptionSlice';

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
  const dispatch = useDispatch();
  const params = useLocalSearchParams();
  const [formData, setFormData] = useState<SubscriptionFormData>({
    name: '',
    price: '',
    startDate: '',
    endDate: '',
    cycle: 'monthly',
    notes: '',
    reminderEnabled: false,
    reminderTime: '1',
    disabled: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '', 
      headerStyle: { backgroundColor: '#293638' },
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
          <Text style={styles.headerButtons}>Cancel</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  const handleFieldChange = (field: keyof SubscriptionFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateSubscriptionForm(formData);
    if (validationErrors.length > 0) {
      const errorMap = validationErrors.reduce((acc, err) => ({
        ...acc,
        [err.field]: err.message
      }), {});
      setErrors(errorMap);
      return;
    }

    setLoading(true);
    try {
      await dispatch(addSubscription({
        name: formData.name,
        price: formData.price,
        icon: params.icon as string || '',
        backgroundColor: params.backgroundColor as string || '#FFFFFF',
        textColor: params.textColor as string || '#000000',
        startDate: formData.startDate,
        endDate: formData.endDate,
        cycle: formData.cycle as Cycles,
        notes: formData.notes,
        reminderEnabled: formData.reminderEnabled,
        reminderTime: formData.reminderTime,
        disabled: formData.disabled
      })).unwrap();
      
      navigation.goBack();
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.logoContainer}>
        <LogoInCircle 
          logo={params.icon as string} 
          backgroundColor={params.backgroundColor as string}
        />
      </View>

      <View style={styles.formContainer}>
        <InputField 
          label={'Name'} 
          placeholder='Enter subscription name'
          value={formData.name}
          onChangeText={(text) => handleFieldChange('name', text)}
          error={errors.name}
        />

        <InputField 
          label={'Price'} 
          placeholder='$0.00'
          value={formData.price}
          onChangeText={(text) => handleFieldChange('price', text)}
          keyboardType="decimal-pad"
          error={errors.price}
        />

        <DatePicker
          label={'Start day'}
          placeholder='today'
          onDateSelected={(date) => handleFieldChange('startDate', date)}
          initialDate={formData.startDate}
          error={errors.startDate}
        />

        <DatePicker
          label={'Duration'}
          placeholder='enter an end day if needed'
          onDateSelected={(date) => handleFieldChange('endDate', date)}
          initialDate={formData.endDate}
          blockPreviousDates={true}
          error={errors.endDate}
        />

        <CustomDropdown 
          data={CYCLES_OPTIONS} 
          label='Cycle' 
          placeholder='monthly by default'
          value={formData.cycle}
          onChange={(value) => handleFieldChange('cycle', value)}
        />

        <InputField 
          label={'Notes'} 
          placeholder='Enter a description' 
          extend={true}
          value={formData.notes}
          onChangeText={(text) => handleFieldChange('notes', text)}
          multiline
        />

        <ToggleSwitch 
          label={'Add reminder'} 
          value={formData.reminderEnabled}
          onChange={(value) => handleFieldChange('reminderEnabled', value)}
        />

        {formData.reminderEnabled && (
          <CustomDropdown 
            data={REMINDER_OPTIONS} 
            label='How much time before' 
            placeholder='1 day before'
            value={formData.reminderTime}
            onChange={(value) => handleFieldChange('reminderTime', value)}
          />
        )}

        <ToggleSwitch 
          label={'Disable Service'} 
          value={formData.disabled}
          onChange={(value) => handleFieldChange('disabled', value)}
        />

        {errors.submit && (
          <Text style={styles.errorText}>{errors.submit}</Text>
        )}
      </View>

      <DefaultButton 
        label={'Save'} 
        onPress={handleSubmit} 
        disabled={loading}
      />
    </ScrollView>
  );
}

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
  headerButtons: {
    color: '#908D8D',
    fontSize: 16
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center'
  }
});