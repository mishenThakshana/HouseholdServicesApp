import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    width: '80%',
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingBottom: 5,
  },
  input: {
    paddingLeft: 10,
    fontSize: 15,
    color: '#000',
  },
  forgotPasswordText: {
    fontWeight: 'bold',
    color: '#2196F3',
  },
  btnContainer: {
    width: '80%',
  },
  btn: {
    backgroundColor: '#2196F3',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
    padding: 15,
  },
  btnLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  socialBtnContainer: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderColor: '#D3D3D3',
    borderRadius: 10,
  },
  
});

export default styles;
