import {Text} from 'react-native';

const SectionTitle = ({text}) => {
  return (
    <Text
      style={{
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 10,
      }}>
      {text}
    </Text>
  );
};

export default SectionTitle;
