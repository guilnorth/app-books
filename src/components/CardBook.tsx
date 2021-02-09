import React from 'react';
import { Text, Div, Button, Image } from 'react-native-magnus';
import Svg, { Rect } from 'react-native-svg';

export default function CardBook({ book }: any) {
  return (
    <Div
      m="md"
      row
      alignItems="center"
      justifyContent="center"
      flex={1}
      style={{ width: 290 }}
    >
      <Button
        bg="orange500"
        rounded="xl"
        py="2xl"
        px="2xl"
        style={{ width: 260 }}
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
        <Div alignItems="flex-start" zIndex={2}>
          <Image
            h={100}
            w={100}
            resizeMode="contain"
            source={{
              uri: book?.volumeInfo?.imageLinks?.smallThumbnail,
            }}
          />
          <Div>
            <Div row alignItems="center">
              <Text color="white" fontSize="xl" fontWeight="bold">
                {book?.volumeInfo?.title}
              </Text>
            </Div>
            <Text
              color="white"
              fontSize="xl"
              mt="xl"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {book?.volumeInfo?.description}
            </Text>
          </Div>
        </Div>
      </Button>
    </Div>
  );
}
