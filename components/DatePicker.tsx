import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Modal, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { INPUT_BACKGROUND_COLOR } from '@/constants/Colors';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  dayNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Today'
};
LocaleConfig.defaultLocale = 'en';

interface DatePickerProps {
  label: string,
  placeholder: string,
  onDateSelected: (date: string) => void;
  initialDate?: string;
  blockPreviousDates?: boolean
}

const generateDisabledDates = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  const disabledDates: Record<string, any> = {};
  let currentDate = new Date(2000, 0, 1); // Fecha inicial lejana
  
  while (currentDate <= yesterday) {
    const dateStr = currentDate.toISOString().split('T')[0];
    disabledDates[dateStr] = { disabled: true, disableTouchEvent: true };
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return disabledDates;
};

export const DatePicker = ({ label, placeholder, onDateSelected, initialDate, blockPreviousDates = false }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState(initialDate || '');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
    onDateSelected(day.dateString);
    setShowCalendar(false);
  };

  const disabledDates = blockPreviousDates ? generateDisabledDates() : {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>

      <TouchableOpacity 
        style={styles.input} 
        onPress={() => setShowCalendar(true)}
      >
        <Text style={[
          styles.inputText,
          !selectedDate && styles.placeholderText
        ]}>
          {selectedDate || placeholder}
        </Text>
      </TouchableOpacity>

      <Modal visible={showCalendar} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: '#3A4A4C' },
                ...disabledDates
              }}
              enableSwipeMonths
              theme={{
                backgroundColor: '#293638',
                calendarBackground: '#293638',
                textSectionTitleColor: 'white',
                selectedDayBackgroundColor: '#3A4A4C',
                selectedDayTextColor: 'white',
                todayTextColor: '#007AFF',
                dayTextColor: 'white',
                arrowColor: 'white',
                monthTextColor: 'white',
                textDisabledColor: '#555',
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowCalendar(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: INPUT_BACKGROUND_COLOR,
  },
  inputText: {
    color: 'white',
    fontSize: 16,
  },
  placeholderText: {
    color: '#999',
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  calendarContainer: {
    backgroundColor: '#293638',
    borderRadius: 12,
    marginHorizontal: 20,
    padding: 16,
  },
  closeButton: {
    marginTop: 16,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#3A4A4C',
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});