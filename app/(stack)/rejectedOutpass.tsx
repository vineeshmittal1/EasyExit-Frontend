import { SafeAreaView } from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { rejectedStudentOutpass } from '@/services/api';
import { Spinner, Image, ScrollView } from 'tamagui';
import CustomCard from '@/components/CustomCard';

export default function RejectedOutpass() {
  const { data = [], isLoading } = useQuery({
    queryKey: ['rejected', 'student', 'outpass'],
    queryFn: rejectedStudentOutpass,
  });

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10, alignItems: 'center' }}>
        {isLoading ?
          <Spinner size='large' color='$blue1Dark' />
        : data.length === 0 ?
          null
        : data.map((value, index) => (
            <CustomCard
              value={value.token}
              status='rejected'
              approvedBy={value.acceptedBy}
              startTime={value.startTime}
              endTime={value.endTime}
              heading={value.heading}
              reason={value.reason}
              phoneNumber={value.phoneNumber}
            />
          ))
        }
      </SafeAreaView>
    </ScrollView>
  );
}
