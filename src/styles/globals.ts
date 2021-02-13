import { StyleSheet } from 'react-native';
import COLORS from './colors';

const Globals = StyleSheet.create({
  titleBook: {
    color: COLORS.titleBook,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    flexWrap: 'wrap',
  },
  decriptionBookCard: {
    textAlign: 'justify',
    color: COLORS.white,
    flexWrap: 'wrap',
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '400',
  },
  decriptionBookDetail: {
    textAlign: 'justify',
    color: COLORS.textDescription,
    flexWrap: 'wrap',
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '400',
  },
});

export default Globals;
