import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { INPUT_BACKGROUND_COLOR } from '@/constants/Colors';

interface CustomDropdownProps {
  data: any,
  label: string,
  placeholder?: string,
}

export const CustomDropdown = ({ data, label, placeholder }: CustomDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Dropdown
        data={data}
        value={selectedValue}
        onChange={(item) => setSelectedValue(item.value)}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        search={false}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        dropdownPosition="auto"
        activeColor="#3A4A4C"
        itemTextStyle={styles.itemTextStyle}
        itemContainerStyle={styles.itemContainerStyle}
        containerStyle={styles.dropdownContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  dropdown: {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    borderRadius: 15,
    paddingHorizontal: 16,
    height: 50,
    color: 'white'
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    marginBottom: 8
  },
  dropdownContainer: {
    backgroundColor: '#293638',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3A4A4C',
  },
  itemTextStyle: {
    color: 'white',
    fontSize: 16,
  },
  itemContainerStyle: {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: '#3A4A4C',
  },
  selectedItemStyle: {
    backgroundColor: '#3A4A4C',
  },
});