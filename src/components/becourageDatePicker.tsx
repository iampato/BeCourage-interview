import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../core/sizes';
import useTheme from '../core/theme';

interface BecourageDatePickerProps {
  placeholder: string;
  onDateChange: (date: Date) => void;
}

const BecourageDatePicker: React.FC<BecourageDatePickerProps> = ({
  placeholder,
  onDateChange,
}) => {
  const colors = useTheme();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const onChange = (event: DateTimePickerEvent, date?: Date) => {
    if (date === undefined) {
      return;
    }
    setSelectedDate(date);
    onDateChange(date);
    setShowPicker(false);
  };

  const handleClosePicker = () => {
    setShowPicker(false);
  };

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors.lightestGrey}]}
      onPress={() => setShowPicker(!showPicker)}>
      {selectedDate ? (
        <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
      ) : (
        <Text style={styles.placeholderText}>{placeholder}</Text>
      )}
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate ?? new Date()}
          mode={'date'}
          is24Hour={true}
          onTouchCancel={handleClosePicker}
          onTouchEnd={handleClosePicker}
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(23),
    borderRadius: responsiveRadius(10),
    paddingHorizontal: responsiveWidth(10),
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  placeholderText: {
    color: 'gray',
    fontSize: 13,
  },
  dateText: {
    color: 'gray',
    fontSize: 13,
  },
});

export default BecourageDatePicker;
