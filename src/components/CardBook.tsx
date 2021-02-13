import React from 'react';
import { Text, Div, Button, Image } from 'react-native-magnus';
import Svg, { Rect } from 'react-native-svg';

export default function CardBook({ book, press }: any) {
  return (
    <Button
      m="md"
      row
      alignItems="center"
      justifyContent="center"
      flex={1}
      onPress={press}
      bg="orange600"
      rounded="xl"
      style={{ width: '100%' }}
    >
      <Div position="absolute" top={0} left={0} h={700} w={700} zIndex={1}>
        <Svg viewBox="0 0 375 283" fill="none" opacity={0.1}>
          <Rect
            x={159.52}
            y={175}
            width={152}
            height={152}
            rx={8}
            transform="rotate(-45 159.52 175)"
            fill="#fff"
          />
          <Rect
            y={107.48}
            width={152}
            height={152}
            rx={8}
            transform="rotate(-45 0 107.48)"
            fill="#fff"
          />
        </Svg>
      </Div>
      <Div alignItems="flex-start" zIndex={2} py="2xl" px="2xl" flex={1}>
        <Div flexDir="row" justifyContent="flex-start" mb={15}>
          <Image
            // ml={10}
            h={100}
            w={100}
            resizeMode="contain"
            source={{
              uri: book?.volumeInfo?.imageLinks?.smallThumbnail,
            }}
          />
          <Div flex={1}>
            <Text
              color="white"
              fontSize="xl"
              fontWeight="bold"
              style={{ flexWrap: 'wrap' }}
            >
              {book?.volumeInfo?.title}
            </Text>
            <Text mt={0} color="white" fontSize={12} fontWeight="400">
              {book?.volumeInfo?.authors
                ? book?.volumeInfo?.authors.join(', ')
                : ''}
            </Text>
          </Div>
        </Div>
        <Div>
          <Text
            color="white"
            fontSize="xl"
            numberOfLines={5}
            ellipsizeMode="tail"
            style={{ flexWrap: 'wrap' }}
          >
            {book?.volumeInfo?.description}
          </Text>
        </Div>
      </Div>
    </Button>
  );
}
