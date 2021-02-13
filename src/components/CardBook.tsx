import React from 'react';
import { Text, Div, Button, Image } from 'react-native-magnus';
import COLORS from '../styles/colors';
import Globals from '../styles/globals';
import Metrics from '../styles/metrics';

export default function CardBook({ book, press }: any) {
  return (
    <Button
      mb={Metrics.defaultSpacing}
      p={0}
      row
      alignItems="center"
      justifyContent="center"
      flex={1}
      onPress={press}
      bg={COLORS.bgCard}
      // rounded="xl"
      style={{
        width: '100%',
        borderColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: Metrics.defaultSpacing,
        borderRadius: 5,
      }}
    >
      <Div alignItems="flex-start" zIndex={2} flex={1}>
        <Div
          flexDir="row"
          justifyContent="flex-start"
          mb={Metrics.defaultSpacing}
        >
          <Image
            h={141}
            w={100}
            style={{ borderColor: COLORS.detailPrimary, borderWidth: 1 }}
            resizeMode="contain"
            source={{
              uri: book?.volumeInfo?.imageLinks?.smallThumbnail,
            }}
          />
          <Div flex={1} ml={Metrics.defaultSpacing}>
            <Text
              style={Globals.titleBook}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {book?.volumeInfo?.title}
            </Text>
            <Text
              mt={8}
              color={COLORS.authorCard}
              fontSize={16}
              fontWeight="400"
            >
              {book?.volumeInfo?.authors
                ? book?.volumeInfo?.authors.join(', ')
                : ''}
            </Text>
          </Div>
        </Div>
        <Div>
          <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={Globals.decriptionBookCard}
          >
            {book?.volumeInfo?.description}
          </Text>
        </Div>
      </Div>
    </Button>
  );
}
